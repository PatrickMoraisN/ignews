import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {

  return(
    <>
      <Head>
        <title>Post | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.postList}>
          <a href="#">
            <time>12 de marco de 2021</time>
            <strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quo eum earum.</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sed fuga similique ipsa quos officia quidem qui accusantium!</p>
          </a>
          <a href="#">
            <time>12 de marco de 2021</time>
            <strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quo eum earum.</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sed fuga similique ipsa quos officia quidem qui accusantium!</p>
          </a>
          <a href="#">
            <time>12 de marco de 2021</time>
            <strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quo eum earum.</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sed fuga similique ipsa quos officia quidem qui accusantium!</p>
          </a>
          <a href="#">
            <time>12 de marco de 2021</time>
            <strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quo eum earum.</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sed fuga similique ipsa quos officia quidem qui accusantium!</p>
          </a>
        </div>
      </main>
    </>
  )
}