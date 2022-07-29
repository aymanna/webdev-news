import Article from '@/components/Article'
import styles from '@/styles/Article.module.css'

export default function Articles({ articles }) {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <Article article={article} key={article.id} />
      ))}
    </div>
  )
}
