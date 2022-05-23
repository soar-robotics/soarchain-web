import '../styles/app.scss';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
