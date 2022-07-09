import { mobilityConnectivityAspects } from '../../utils/context/mobilityConnectivity';

function MobilityConnectivity() {
  return (
    <main className='mobility'>
      <section className='showcase'>
        <div className='container'>
          <span className='text-title'>Vehicle connectivity</span>
          <p className='mt-3'>
            Innovations in automotive connectivity, smart mobility, and the automotive IoT are
            geared toward both better experiences for the consumer and societal good. These
            technologies aim to lower CO2 emissions, enhance transportation efficiency in smart
            cities, increase road safety, and more.
          </p>
        </div>
      </section>

      <section className='aspects'>
        <div className='container'>
          <div className='mt-5 d-flex flex-column gap-5'>
            {mobilityConnectivityAspects.map((item, index) => (
              <div
                key={index}
                className={`d-flex flex-column flex-md-row  ${
                  index % 2 === 0 ? 'flex-md-row-reverse' : ''
                } justify-content-between align-items-center row`}
              >
                <div className={`col ${item.image ? 'col-md-7' : ''}`}>
                  <h5 className='text-purple'>{item.title}</h5>
                  <span>{item.description}</span>
                </div>
                {item.image && <div className='col col-md-5'>{item.image}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default MobilityConnectivity;
