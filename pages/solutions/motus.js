import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Btn } from '../../components/Btn';

import { motusMainFeatures, motusOverview, motusTechSpecs } from '../../utils/context/motusContext';

function Motus() {
  const [navIndex, setNavIndex] = useState(1);

  return (
    <main id='motus'>
      <section className='showcase'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 d-flex flex-column justify-content-center'>
              <p className='text-header-showcase'>Mine crypto with your car</p>
              <div className='separator mx-auto my-4'></div>
              <p className='mt-3'>
                Proof-of-availability is sustained through plug-and-play hardware, which are a set
                of open-source connectivity modules with V2V, V2N, V2P and V2X capabilities.
                <br />
                <br />
                The system is designed to fit different vehicles and user configurations such as
                4-wheelers, 2-wheelers, pedestrians, micromobility, Road-side units.
              </p>
              <Btn dark href='https://shop.soarchain.com/' text='pre-order now' className='mt-3' />
              <small className='text-secondary mt-2'>
                * Only 100 MOTUS are available in the first batch. <br /> Pre-order now and start
                mining!
              </small>
            </div>
            <div className='col-md-6 mt-5 mt-md-0 d-flex align-items-center'>
              <Image alt='motus' src='/motus/front.png' width={690} height={552} />
            </div>
          </div>

          <div className='features'>
            <p className='text-title text-center'>Main features</p>
            <div className='d-none d-md-block mt-5'>
              <Image alt='features' src='/motus/features.png' width={1065} height={167} />
            </div>
            <div className='d-md-none tree-right mt-5 ps-5'>
              <div className='tree-right-list'>
                {motusMainFeatures.map((item, index) => (
                  <span key={index} className='tree-right-list-item'>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='specs'>
        <div className='container'>
          <div className='navigation mb-5'>
            <span
              key={1}
              className={`item ${navIndex === 1 ? 'active' : ''}`}
              onClick={() => setNavIndex(1)}
            >
              overview
            </span>
            <span
              key={2}
              className={`item ${navIndex === 2 ? 'active' : ''}`}
              onClick={() => setNavIndex(2)}
            >
              specs
            </span>
          </div>

          <div className={navIndex === 1 ? 'd-block' : 'd-none'}>
            <div className='mt-5 d-flex flex-column gap-5'>
              <div className='row'>
                <div className='col-md-6 d-flex align-items-center justify-content-center'>
                  <Image alt='motus' src='/motus/side.png' width={539} height={326} />
                </div>
                <div className='col-md-6'>
                  <p className='text-title'>Overview</p>
                  <div className='tree-right mt-5 ps-5'>
                    <div className='tree-right-list'>
                      <span className='tree-right-list-item'>
                        Receive and transfer different kinds of V2X messages through PC5
                      </span>
                      <span className='tree-right-list-item'>
                        Your identity is safe and your privacy is not invaded
                      </span>
                      <span className='tree-right-list-item'>
                        Use whenever and wherever you like{' '}
                      </span>
                      <span className='tree-right-list-item'>
                        Track your rewards from the Soar Mobile App{' '}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='d-flex flex-column flex-md-row gap-4'>
                {motusOverview.map((item, index) => (
                  <Fragment key={index}>
                    <div>
                      <p className='text-large fw-bold'>{item.title}</p>
                      <small>{item.description}</small>
                    </div>
                    {index !== motusOverview.length - 1 && (
                      <div
                        className='d-none d-md-block my-auto'
                        style={{
                          borderLeft: '3px solid #f5f6fe',
                          height: '150px',
                        }}
                      />
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className={navIndex === 2 ? 'd-block' : 'd-none'}>
            <div className='mt-5 row'>
              <div className='col-md-3'>
                <div>
                  <p className='text-large fw-bold text-capitalize'>core</p>
                  <div>
                    {motusTechSpecs.core.map((spec, index) => (
                      <p key={index}>{spec}</p>
                    ))}
                  </div>
                </div>
                <div className='mt-5'>
                  <p className='text-large fw-bold text-capitalize'>sensors</p>
                  <div>
                    {motusTechSpecs.sensors.map((spec, index) => (
                      <p key={index}>{spec}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className='col-md-1 d-none d-md-block mx-auto'>
                <div
                  className='mx-auto'
                  style={{
                    width: '10px',
                    borderLeft: '3px solid #f5f6fe',
                    height: '100%',
                  }}
                />
              </div>
              <div className='col-md-4 mt-5 mt-md-0 mx-auto'>
                <div>
                  <p className='text-large fw-bold text-capitalize'>interfaces & connectivity</p>
                  <div>
                    {motusTechSpecs.interfaces.map((spec, index) => (
                      <p key={index}>{spec}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className='col-md-1 d-none d-md-block'>
                <div
                  className='mx-auto'
                  style={{
                    width: '10px',
                    borderLeft: '3px solid #f5f6fe',
                    height: '100%',
                  }}
                />
              </div>
              <div className='col-md-3 mt-5 mt-md-0'>
                <div>
                  <p className='text-large fw-bold text-capitalize'>power</p>
                  <div>
                    {motusTechSpecs.power.map((spec, index) => (
                      <p key={index}>{spec}</p>
                    ))}
                  </div>
                </div>
                <div className='mt-5'>
                  <p className='text-large fw-bold text-capitalize'>mechanical</p>
                  <div>
                    {motusTechSpecs.mechanical.map((spec, index) => (
                      <p key={index}>{spec}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Motus;
