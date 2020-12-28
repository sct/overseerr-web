import '../css/index.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@components/layout';

const CoreApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <title>Overseerr</title>
        <meta
          name="description"
          content="Request management and media discovery tool for the Plex ecosystem."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
};

export default CoreApp;
