import Image from 'next/image';
import { Fragment, useState } from 'react';

import { motusMainFeatures, motusOverview, motusTechSpecs } from '../../utils/context/motusContext';

function Motus() {
  const [navIndex, setNavIndex] = useState(1);

  return (
    <main id='motus'>
      <section className='showcase'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <span className='text-title'>Mine crypto with your car</span>
              <div className='separator mx-auto my-4'></div>
              <p className='mt-3'>
                Proof-of-availability is sustained through plug-and-play hardware, which are a set
                of open-source connectivity modules with V2V, V2N, V2P and V2X capabilities.
                <br />
                <br />
                The system is designed to fit different vehicles and user configurations such as
                4-wheelers, 2-wheelers, pedestrians, micromobility, Road-side units.
              </p>
              {/*             <Btn href='#' text='pre-order now' className='mt-4' />
               */}{' '}
            </div>
            <div className='col-md-7 d-flex align-items-center'>
              <Image alt='motus' src='/motus/front.png' width={690} height={552} />
            </div>
          </div>

          <div className='mt-5 pt-5'>
            <h2 className='text-center fw-bold'>Main features</h2>
            <div className='features'>
              <hr className='position-absolute w-100' style={{ zIndex: '1' }} />

              {motusMainFeatures.map((item, index) => (
                <div key={index} className='features-item'>
                  <span className={`features-item-point`}></span>
                  <span className={`features-item${index % 2 === 0 ? '-reverse' : ''}-text`}>
                    {item}
                  </span>
                </div>
              ))}
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
                  <h3 className='fw-bold mb-4'>Overview</h3>
                  <div className='tree-right ps-5'>
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

              <div className='d-flex gap-5'>
                {motusOverview.map((item, index) => (
                  <Fragment key={index}>
                    <div>
                      <h5 className='fw-bold mb-4'>{item.title}</h5>
                      <small>{item.description}</small>
                    </div>
                    {index !== motusOverview.length - 1 && (
                      <div
                        className='my-auto'
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
                  <h5 className='fw-bold text-capitalize mb-4'>core</h5>
                  <div>
                    {motusTechSpecs.core.map((spec, index) => (
                      <p key={index}>{spec}</p>
                    ))}
                  </div>
                </div>
                <div className='mt-5'>
                  <h5 className='fw-bold text-capitalize mb-4'>sensors</h5>
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
              <div className='col-md-4 mx-auto'>
                <div>
                  <h5 className='fw-bold text-capitalize mb-4'>interfaces & connectivity</h5>
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
              <div className='col-md-3'>
                <div>
                  <h5 className='fw-bold text-capitalize mb-4'>power</h5>
                  <div>
                    {motusTechSpecs.power.map((spec, index) => (
                      <p key={index}>{spec}</p>
                    ))}
                  </div>
                </div>
                <div className='mt-5'>
                  <h5 className='fw-bold text-capitalize mb-4'>mechanical</h5>
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
