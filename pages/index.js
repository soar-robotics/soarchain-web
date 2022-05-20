import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>Soar Chain</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <NavBar />
      <img src="/waves.png" className="waves1" alt="" />
      {/* <img src="/shapes.png" className="shapes1" alt="" /> */}
    </div>
  );
}
