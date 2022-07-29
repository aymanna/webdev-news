import Articles from '@/components/Articles'
import { articles } from '@/data'

export default function Home({ articles }) {
  return (
    <div>
      <Articles articles={articles} />
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: { articles },
  }
}
