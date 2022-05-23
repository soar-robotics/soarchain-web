import Head from 'next/head';
import NavBar from '../components/NavBar';
import Card from './components/Card';

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>Soar Chain</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <NavBar />
      <div className="first-shapes"></div>
      <div className="container position-relative">
        <div className="texts mx-auto position-relative mt-5">
          <div className="text-purple p text-center">
            Creating On-Chain Smart City Data Infrastructure
          </div>
          <div className="text-highlight text-center mt-3">
            Global Currency for Autonomous Smart Cities
          </div>
          <div className="p mt-4 text-center">
            KoZMITO is the currency used in the world’s largest application and
            service ecosystem of autonomous vehicles, drones, robots and other
            nodes. KoZMITO is the distributed smart cities protocol, enabling
            on-chain data storage, data processing, and distributed application
            development.
          </div>
        </div>

        <div className="texts mx-auto position-relative mt-20">
          <div className="text-title text-center">About The KZM Coin:</div>
          <div className="p text-center mt-2 mb-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </div>
        </div>

        <section className="row mw-900 mx-auto">
          <div className="col-md-4">
            <Card title={'Token'} iconPath="/token.png">
              KZM is an ERC20 token running on P-chain is hosted by the default
              node cluster created by RSUs.
            </Card>
          </div>
          <div className="col-md-4">
            <Card title={'Sharable'} iconPath="/shareable.png">
              KZM incentivizes RSU and DVD owners to share data and ensure
              seamless integration through a reward system.
            </Card>
          </div>
          <div className="col-md-4">
            <Card title={'Payment'} iconPath="/payment.png">
              KZM is used as a payment and staking mechanism for data requests.
            </Card>
          </div>
        </section>
      </div>

      {/* <img src="/waves.png" className="waves1" alt="" /> */}
      {/* <img src="/shapes.png" className="shapes1" alt="" /> */}
    </div>
  );
}
