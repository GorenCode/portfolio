import Head from 'next/head';
import Layout from '../components/Layout';
import Section_1 from '../components/Section_1';
import Section_2 from '../components/Section_2';
import Section_3 from '../components/Section_3';
import Section_4 from '../components/Section_4';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Tamir&apos;s Portfolio</title>
        <meta name="Tamir's Portfolio" content="Tamir's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
      </Layout>
      

    </div>
  )
}
