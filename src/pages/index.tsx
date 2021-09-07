import styles from '../styles/home.module.scss';
import Head from 'next/head';
export default function Home() {
  return (
    <h1 className={styles.title}>
      Hello World!
      <Head>
        <title>Home Ignews</title>
      </Head>  
    </h1>
  )
}
