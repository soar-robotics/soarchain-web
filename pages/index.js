import Link from 'next/link';
import Image from 'next/image';

import { ExploreSlider, ShowcaseSlider } from '../components/Slider';
import { motusExploreItems } from '../utils/context/motusContext';

export default function Home() {
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

        <section className='explore'>
          <div className='container position-relative py-5'>
            <h5 className='text-center text-purple text-uppercase fw-bold'>soarchain is</h5>
            <ExploreSlider />
          </div>
        </section>

        <section className='ecosystem'>
          <div className='container position-relative py-5 d-flex justify-content-center align-items-center gap-5'>
            <h5 className='text-center text-capitalize fw-bold'>explore application ecosystem</h5>
            <div>
              <Link href='/solutions/application-ecosystem'>
                <a className='btn btn-outline-white py-2 px-5 text-uppercase text-white'>
                  <small>explore more</small>
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section className='motus'>
          <div className='container position-relative text-center'>
            <div className='row'>
              <div className='col col-md-6'>
                <p className='display-6 fw-bold m-0 text-uppercase mb-3'>meet motus</p>
                <p className='mb-5'>
                  A plug-and-play device with state of the art C-V2X capabilities to fit different
                  vehicle and user configurations.
                </p>
                <div className='tree-bullet-list'>
                  {motusExploreItems.map((item, index) => (
                    <div
                      key={index}
                      className={`tree-bullet-list-item-${index % 2 === 0 ? 'left' : 'right'}`}
                    >
                      <small>{item}</small>
                    </div>
                  ))}
                </div>
                <Link href='/solutions/motus'>
                  <a type='button' className='btn btn-outline-light text-uppercase py-2 px-5'>
                    <small>learn more</small>
                  </a>
                </Link>
              </div>
              <div className='col col-md-6 d-flex align-items-center'>
                <Image alt='motus' src='/motus/front-white.png' width={690} height={552} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
