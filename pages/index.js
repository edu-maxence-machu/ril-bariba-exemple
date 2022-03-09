import Head from "next/head";
import Image from "next/image";
import Layout from "../layout/layout";

export default function Home({ name }) {
  return (
    <div>
      <Head>
        <title>Hariba website</title>
        <meta name="description" content="Bienvenue sur le site de Hariba" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Hello {name}</h1>
      </Layout>
    </div>
  );
}
