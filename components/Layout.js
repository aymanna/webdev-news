import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import Meta from '@/components/Meta'
import styles from '@/styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <NavBar />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}
