import { useState } from 'react';

import { Btn } from '../../components/Btn';
import { motusMainFeatures, motusOverview, motusTechSpecs } from '../../utils/context/motusContext';

function Motus() {
  const [navIndex, setNavIndex] = useState(1);

  return (
    <main className='motus'>
      <section className='showcase'>
        <div className='container d-flex'>
          <div className='content'>
            <span className='text-title'>
              Mine crypto <br className='d-none d-md-block' /> with your car
            </span>
            <p className='mt-3'>
              Proof-of-availability is sustained through plug-and-play hardware, which are a set of
              open-source connectivity modules with V2V, V2N, V2P and V2X capabilities.
              <br />
              <br />
              The system is designed to fit different vehicles and user configurations such as 4-wheelers,
              2-wheelers, pedestrians, micromobility, Road-side units.
            </p>
            <Btn href='#' text='pre-order now' className='mt-4' />
          </div>
        </div>
      </section>
      <section className='features'>
        <div className='container'>
          <p className='text-title text-center'>Main features</p>
          <div className='features-list mt-5'>
            {motusMainFeatures.map((item, index) => (
              <span
                key={index}
                className={`features-list-item-${index % 2 === 0 ? 'left' : 'right'}`}
              >
                {item}
              </span>
            ))}
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
              {motusOverview.map((item, index) => (
                <div
                  key={index}
                  className={`d-flex flex-column flex-md-row  ${
                    index % 2 === 0 ? 'flex-md-row-reverse' : ''
                  } justify-content-between align-items-center row`}
                >
                  <div className={`col ${item.image ? 'col-md-6' : ''}`}>
                    <h5 className='text-purple'>{item.title}</h5>
                    <span>{item.description}</span>
                  </div>
                  {item.image && <div className='col col-md-6'>{item.image}</div>}
                </div>
              ))}
            </div>
          </div>

          <div className={navIndex === 2 ? 'd-block' : 'd-none'}>
            <div className='mt-5'>
              {motusTechSpecs.map((item, index) => (
                <div
                  className='d-flex flex-column flex-md-row justify-content-between mt-5 row'
                  key={index}
                >
                  <h5 className='text-purple text-capitalize col col-md-6'>{item.title}</h5>
                  <div className='col col-md-6'>
                    {item.specs.map((spec) => (
                      <p key={index}>{spec}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Motus;
