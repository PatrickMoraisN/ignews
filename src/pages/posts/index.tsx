import { GetStaticProps } from 'next';
import Head from 'next/head';
import getPrismicClient from '../../services/prismic';
import Prismic from '@prismicio/client';
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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
    ], {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100,
    })
  return {
    props: {}
  }
};