import Link from 'next/link';
import Image from 'next/image';

import { ExploreSlider, ShowcaseSlider } from '../components/Slider';
import { motusExploreItems } from '../utils/context/motusContext';
import { Btn } from '../components/Btn';

export default function Home() {
  return (
    <div className='app'>
      <main id='home'>
        <section className='showcase'>
          <div className='container position-relative'>
            <div className='ms-md-4 position-relative'>
              <div className='showcase-vh-100'>
                <span className='text-header-showcase w-100'>
                  Connected Vehicles. <br /> Mobility of Future.
                </span>
                <div className='d-flex gap-3 mt-5'>
                  <Btn href='/solutions/motus' text='learn more' />

                  <a
                    target='_blank'
                    href='https://shop.soarchain.com/'
                    className='btn btn-dark text-uppercase py-2 px-5'
                    rel='noreferrer'
                  >
                    <small>pre-order now</small>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <ShowcaseSlider />
            </div>

            <div className='d-flex flex-column flex-md-row gap-5 w-75 mx-auto align-items-baseline mt-5'>
              <div className='outlined-box mx-auto'>
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
              <div className='text-center w-md-100'>
                <p className='text-title text-uppercase'>Soarchain unlocks new possibilities</p>
                <div className='tree-right w-75 mt-5 mx-auto ps-5'>
                  <div className='tree-right-list'>
                    <span className='tree-right-list-item'>Safety & Emergency</span>
                    <span className='tree-right-list-item'>Smart City</span>
                    <span className='tree-right-list-item'>Fleet Management</span>
                    <span className='tree-right-list-item'>Artificial Intelligence</span>
                  </div>
                </div>
                <div>
                  <Btn dark href='/solutions/application-ecosystem' text='explore more' />
                </div>
              </div>
              <div className='showcase-graphics'></div>
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
          <div className='container position-relative py-5 d-flex flex-column flex-md-row justify-content-center align-items-center gap-5'>
            <span className='text-large text-capitalize fw-bold'>
              explore application ecosystem
            </span>
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
              <div className='col-md-7'>
                <p className='text-header m-0 text-capitalize mb-3'>meet MOTUS</p>
                <p className='mb-5 fw-bold'>
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
                <div className='d-flex align-items-center gap-2 justify-content-center'>
                  <a
                    target='_blank'
                    href='https://shop.soarchain.com/'
                    className='btn btn-dark text-uppercase py-2 px-5'
                    rel='noreferrer'
                  >
                    <small>pre-order now</small>
                  </a>
                  <Btn dark href='/solutions/motus' text='learn more' />
                </div>
              </div>
              <div className='col-md-5 mt-5 mt-md-0 d-flex align-items-center'>
                <Image alt='motus' src='/motus/front.png' width={690} height={552} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
