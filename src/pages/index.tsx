import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { GetServerSideProps } from 'next';
import styles from './home.module.scss'
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <h1>
      <Head>
        <title>Home Ignews</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey, welcome</span>
          <h1>News about <br />the <span>React</span> world.</h1>
          <p>Get acces to all publications <br />
            <span>for {product.amount} month.</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </h1>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1JYyQoCLxGFJTV3BvkUeAIjq', {
    expand: ['product']
  });

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,
  }

  return {
    props: {
      product,
    }
  }
}
