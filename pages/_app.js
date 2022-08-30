import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import '../styles/app.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-MWPE7RF22E', {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Fragment>
      <Head>
        <title>Soarchain</title>
        <link rel='shortcut icon' href='/favicon.png' />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <section className='footer'>
        <Footer />
      </section>
    </Fragment>
  );
}

export default MyApp;
