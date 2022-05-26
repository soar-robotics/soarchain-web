import Head from 'next/head';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import Spacing from '../components/Spacing';
import { useState } from 'react';
import Form from '../components/Form';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

export default function Home() {
  //const [isAuth, setIsAuth] = useState(false);

  //if (!isAuth) {
  // return <Form setIsAuth={setIsAuth} />;
  //}
  return (
    <div className="app">
      <Head>
        <title>Soar Chain</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <NavBar />
      <img src="/background/waves-1.png" className="first-shapes" alt="" />
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

        <div className="row mw-900 mx-auto position-relative cards">
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
            <div className="row">
              <div className="col-md-6">
                <div className="rsu-highlight pb-10 text-end">
                  What is <br /> Road Side Unit (RSU) ?
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src="/hardware-1.png"
                  className="img-fluid img-hw"
                  alt=""
                />
              </div>
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

            <img src="/corners/top-left.png" alt="" className="img-corner" />
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

        <div className="use-cases py-30 row">
          <div className="card-holder col-md-8">
            <div className="card mb-2 justify-content-center align-items-center">
              <div className="w-75">
                <div className="mw-80 py-3 ms-auto">
                  <div className="rsu-title mb-2 ">dApp Store</div>
                  <div className="card-p ">
                    Application Developers use RSU cloud as smart city dApp
                    store to develop, test, and sell their applications.
                    Developers stake Kozmito to publish their applications.
                  </div>
                </div>
              </div>

              <div
                className="shape-3d"
                style={{ backgroundImage: `url('/cube.png')` }}
              ></div>
            </div>
            <div className="card mb-2 justify-content-center align-items-center">
              <div className="w-75">
                <div className="mw-80 py-3 me-auto">
                  <div className="rsu-title mb-2 ">Routes Optimization</div>
                  <div className="card-p ">
                    Reducing total electric consumption of a smart city by
                    optimizing the routes of all electrical vehicles. Savers are
                    awarded with Kozmito.
                  </div>
                </div>
              </div>
              <div
                className="shape-3d right"
                style={{ backgroundImage: `url('/cone.png')` }}
              ></div>
            </div>
            <div className="card mb-2 justify-content-center align-items-center">
              <div className="w-75">
                <div className="mw-80 py-3 ms-auto">
                  <div className="rsu-title mb-2 ">Insurance</div>
                  <div className="card-p ">
                    Insurance companies provide instant insurance to drivers
                    based on driver data, vehicle data, road information, trip
                    duration.
                  </div>
                </div>
              </div>

              <div
                className="shape-3d"
                style={{ backgroundImage: `url('/cylinder.png')` }}
              ></div>
            </div>
          </div>

          <div className="usecase-text px-md-5 col-md-4 h2">
            Sample Use Cases
          </div>
        </div>

        <div className="currency p-md-5 position-relative">
          <div className="text-title text-center ">
            KoZMITO Currency of Smart City Data Infrastructure
          </div>

          <div className="row">
            <div className="col-md-4 text-center">
              <div className="ellips mx-auto my-md-4">1</div>
              <div className="rsu-title mb-2">Limitation</div>
              <div className="rsu-p">Kozmito is limited in supply.</div>
            </div>
            <div className="col-md-4 text-center">
              <div className="ellips mx-auto my-md-4">2</div>
              <div className="rsu-title mb-2">Increasing</div>
              <div className="rsu-p">
                Kozmito’s value increases with increasing amount collected data.
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="ellips mx-auto my-md-4">3</div>
              <div className="rsu-title mb-2">True Enabler</div>
              <div className="rsu-p">
                Kozmito is true enabler for secure, safe, and green operation of
                smart cities.
              </div>
            </div>
          </div>

          <img src="/corners/top-left.png" className="top-left" alt="" />
          <img src="/corners/top-right.png" className="top-right" alt="" />
          <img
            src="/corners/bottom-right.png"
            className="bottom-right"
            alt=""
          />
        </div>

        <div className="developers py-30">
          <div className="row">
            <div className="col-md-6">
              <img src="/devpic.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <div className="text-title">Developers</div>
              <ul className="ul-line">
                <li>
                  <span className="indicator"></span>
                  <div className="circle"></div>
                  <span className="card-p">
                    Access to on-chain, secure, multidimensional rich and
                    diverse data set to develop and test applications.
                  </span>
                </li>
                <li>
                  <span className="indicator"></span>
                  <div className="circle"></div>
                  <span className="card-p">
                    Develop applications that vehicles and other nodes can
                    download from RSU cloud.{' '}
                  </span>
                </li>

                <li>
                  <span className="indicator"></span>
                  <div className="circle"></div>
                  <span className="card-p">
                    Leverage processing capabilities of RSU cloud to
                    automatically test your application and to tailor the
                    feature set for the targeted node.
                  </span>
                </li>
                <li>
                  <span className="indicator"></span>
                  <div className="circle"></div>
                  <span className="card-p">
                    Earn Kozmito coin with each download of your application by
                    any node (vehicles, drones, scooters, buildings, ...) in the
                    smart city.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      {/* <img src="/waves.png" className="waves1" alt="" /> */}
      {/* <img src="/shapes.png" className="shapes1" alt="" /> */}
    </div>
  );
}
