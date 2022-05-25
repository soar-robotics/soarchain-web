import Head from 'next/head';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import Spacing from '../components/Spacing';
import { useState } from 'react';
import Form from '../components/Form';
import Slider from '../components/Slider';

export default function Home() {
  // const [isAuth, setIsAuth] = useState(false);

  // if (!isAuth) {
  //   return <Form setIsAuth={setIsAuth} />;
  // }
  return (
    <div className="app">
      <Head>
        <title>Soar Chain</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <NavBar />
      <img src="/background/waves.png" className="first-shapes" alt="" />
      <div className="container position-relative mt-md-4">
        <div className="texts mx-auto position-relative">
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

        <div className="texts mx-auto position-relative mt-15 pt-10 mb-3">
          <div className="text-title text-center">About The KZM Coin:</div>
          <div className="p text-center mt-2 mb-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </div>
        </div>

        <div className="row mw-900 mx-auto position-relative">
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
        </div>

        <div className="rsu-app position-relative">
          <div className="mt-30 py-30 rsu ">
            <div className="rsu-highlight pb-10 w-50 text-end">
              What is <br /> Road Side Unit (RSU) ?
            </div>

            <div className="row text-center">
              <div className="col-md-3">
                <div className="rsu-title py-md-3">Hardware</div>
                <div className="rsu-p">
                  RSU is custom hardware providing data storage, processing,
                  communication end charging
                </div>
              </div>
              <div className="col-md-3">
                <div className="rsu-title py-md-3">Miner</div>
                <div className="rsu-p">
                  RSU mines <br /> KoZMITO Coin.
                </div>
              </div>
              <div className="col-md-3">
                <div className="rsu-title py-md-3">Host</div>
                <div className="rsu-p">
                  RSU hosts the blockchain, which records data from each node in
                  the city.
                </div>
              </div>
              <div className="col-md-3">
                <div className="rsu-title py-md-3">Placeable</div>
                <div className="rsu-p">
                  Individuals and <br /> businesses can place RSUs on their
                  premises.
                </div>
              </div>
            </div>

            <img src="/hardware-1.png" className="img-hw" alt="" />
            <img src="/shape.png" alt="" className="img-corner" />
          </div>

          <Slider bgImage={'/app_dev.png'} />

          <div className="rsu-app-bg"></div>
          <div className="rsu-app-bg-2"></div>
        </div>

        <div className=" mt-5 d-flex justify-content-center">
          <div className="dots d-flex justify-content-between">
            <div className="dot "></div>
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>

      {/* <img src="/waves.png" className="waves1" alt="" /> */}
      {/* <img src="/shapes.png" className="shapes1" alt="" /> */}
    </div>
  );
}
