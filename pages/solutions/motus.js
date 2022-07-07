import { motusMainFeatures } from '../../utils/context/motusContext';

function Motus() {
  return (
    <main className='motus'>
      <section className='showcase'>
        <div className='container d-flex'>
          <div className='content'>
            <span className='text-title'>
              Mine crypto <br /> with your car
            </span>
            <p className='mt-3'>
              Proof-of-availability is sustained through plug-and-play hardware, which are a set of
              open-source connectivity modules with V2V, V2N, V2P and V2X capabilities.
              <br />
              <br />
              The system is designed to fit different vehicles and user configurations(4-wheelers,
              2-wheelers, pedestrians, micromobility, Road-side units).
            </p>
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
    </main>
  );
}

export default Motus;
