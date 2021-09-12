import Head from 'next/head';
export default function Home() {
  return (
    <h1>
      <Head>
        <title>Home Ignews</title>
      </Head>
      <main>
        <section>
          <span>Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>Get acces to all publications <br />
            <span>for $9.90 month.</span>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </h1>
  )
}
