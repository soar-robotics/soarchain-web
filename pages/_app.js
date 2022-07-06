import '../styles/app.scss';
import { Fragment, useEffect } from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  return (
    <Fragment>
      <NavBar />
      <Component {...pageProps} />
      <section className='footer'>
        <Footer />
      </section>
    </Fragment>
  );
}

export default MyApp;
