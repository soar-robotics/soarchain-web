import Head from 'next/head';
import { Fragment, useEffect } from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import '../styles/app.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Soar Chain</title>
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
