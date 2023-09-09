import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>oh vida mia</title>
        <meta name="description" content="Agendas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.instagram.com/oh.vida.mia/">Vida Mia!</a>
        </h1>
        <h1>Este proyecto esta en construcción </h1>
        <h2>Alejandra y Homero</h2>
        


      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/aleepachon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Vida{' '}
          <span className={styles.logo}>
            {/*<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
          </span>
        </a>
      </footer>
    </div>
  )
}
