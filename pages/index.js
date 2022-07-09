import Link from 'next/link';
import { useState } from 'react';

import Form from '../components/Form';
import { ExploreSlider, ShowcaseSlider } from '../components/Slider';
import { motusExploreItems } from '../utils/context/motusContext';

export default function Home() {
  const [isAuth, setIsAuth] = useState(false);

  if (!isAuth) {
    return <Form setIsAuth={setIsAuth} />;
  }
  return (
    <div className='app'>
      <main id='home'>
        <section className='showcase'>
          <div className='container position-relative'>
            <div className='texts mx-auto position-relative pt-5'>
              <div className='text-highlight text-center mt-3'>
                <span>Connected Mobility of tomorrow</span>
              </div>
              <div className='p mt-4 text-center'>
                Soar Chain is the first blockchain protocol to deploy vehicular ad-hoc networks that
                enable vehicle-to-everything (V2X) communication and interaction.
              </div>
            </div>

            <div>
              <div className='pt-5'>
                <ShowcaseSlider />
              </div>
            </div>

            <div className='d-flex gap-5 w-75 mx-auto align-items-baseline mt-5'>
              <div className='outlined-box'>
                <span className='font-weight-bold'>Safety, security and scalability</span>
              </div>
              <div className='text-center'>
                <span>
                  Soarchain is the first blockchain to integrate a decentralized layer for all
                  members of mobility
                </span>
              </div>
            </div>

            <div className='d-flex justify-content-between align-items-center pt-5'>
              <div className='text-center w-75 w-md-100'>
                <h3 className='text-uppercase mb-4'>
                  Soarchain unlocks <br /> new possibilities
                </h3>
                <ul className='showcase-ul'>
                  <li>Safety & Emergency</li>
                  <li>Smart City</li>
                  <li>Fleet Management</li>
                  <li>Artificial Intelligence</li>
                </ul>
              </div>
              <div className='showcase-graphics w-100'></div>
            </div>
          </div>
        </section>

        <section className='ecosystem'>
          <div className='container position-relative py-5'>
            <h5 className='text-center text-purple text-uppercase fw-bold'>
              explore application ecosystem
            </h5>
            <div className='text-center mt-5'>
              <Link href='/solutions/application-ecosystem'>
                <a className='btn btn-purple py-2 px-5 text-uppercase text-white'>
                  <small>explore more</small>
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section className='explore'>
          <div className='container position-relative py-5'>
            <h5 className='text-center text-primary text-uppercase fw-bold'>soarchain is</h5>
            <ExploreSlider />
          </div>
        </section>

        <section className='motus'>
          <div className='container position-relative py-30 text-center'>
            <p className='display-6 fw-bold m-0 text-uppercase mb-3'>meet motus</p>
            <p className='mb-5'>
              A plug-and-play device with state of the art C-V2X capabilities to fit different
              vehicle and user configurations.
            </p>
            <div className='d-flex py-15 justify-content-center'>
              <hr className='position-absolute w-100' style={{ zIndex: '1' }} />
              {motusExploreItems.map((item, index) => (
                <div key={index} className='motus-item'>
                  <span className={`motus-item-point`}></span>
                  <span className={`motus-item${index % 2 === 0 ? '-reverse' : ''}-text`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <Link href='#'>
              <a type='button' className='btn btn-outline-light text-uppercase py-2 px-5'>
                <small>learn more</small>
              </a>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
