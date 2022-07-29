import Link from 'next/link'
import styles from '@/styles/Article.module.css'

export default function Article({ article }) {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={styles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  )
}
