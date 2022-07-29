import Link from 'next/link'
import Meta from '@/components/Meta'
import { articles } from '@/data'

export default function Article({ article }) {
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}
/**
 * 
 * @param {import('next').GetStaticProps} context 
 */
export async function getStaticProps({ params }) {
  const article = articles.find((article) => article.id === params.id)

  return {
    props: { article },
    notFound: article ? false : true,
  }
}

export async function getStaticPaths() {
  const ids = articles.map((article) => article.id)
  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}
