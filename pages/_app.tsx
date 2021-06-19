import '../css/index.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@components/Layout';

const CoreApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <title>Overseerr</title>
        <meta
          name="description"
          content="Request management and media discovery tool for the Plex ecosystem."
        />
        <meta property="og:site_name" content="Overseerr" data-rh="true"></meta>
        <meta property="og:title" content="Overseerr" data-rh="true"></meta>
        <meta
          property="og:description"
          content="Request management and media discovery tool for the Plex ecosystem."
          data-rh="true"
        ></meta>
        <meta
          property="og:image"
          content="/os_logo_filled.svg"
          data-rh="true"
        ></meta>
        <meta
          property="og:url"
          content="https://overseerr.dev"
          data-rh="true"
        ></meta>
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
};

export default CoreApp;
