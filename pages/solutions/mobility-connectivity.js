import Image from 'next/image';
import { mobilityConnectivityAspects } from '../../utils/context/mobilityConnectivity';

function MobilityConnectivity() {
  return (
    <main id='mobility'>
      <section className='showcase'>
        <div className='container'>
          <span className='text-title'>
            Vehicle <br /> connectivity
          </span>
          <p className='mt-3'>
            Innovations in automotive connectivity, smart mobility, and the automotive IoT are
            geared toward both better experiences for the consumer and societal good. These
            technologies aim to lower CO2 emissions, enhance transportation efficiency in smart
            cities, increase road safety, and more.
          </p>
        </div>
      </section>

      <section className='softwarization'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 pe-md-5'>
              <h3 className='fw-bold'>Softwarization of Mobility</h3>
              <div className='separator mx-auto my-4' />
              <p className='fw-bold'>
                We see a shift to Software-defined vehicles: The transformation of the vehicles from
                a product that is mainly hardware-based to a software-centric electronic device on
                wheels.
              </p>
              <small>
                Vehicles are getting equipped with more sensors with higher levels of sophistication
                and optimization.
                <br />
                <br /> ADAS (Advanced driver-assistance system) are getting better at assisted
                driving, leading the way to higher levels of automation with a goal to reach fully
                autonomous driving.
                <br />
                <br /> A group of cars in an urban environment literally forms a community.
                <br />
                <br /> In a well-functioning and efficient community, communication between the
                participants is of utmost importance.
              </small>
            </div>
          </div>
        </div>
      </section>

      <section className='aspects'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 d-flex justify-content-center align-items-center'>
              <Image alt='traffic' src='/mobility/connectivity.png' width={1140} height={642} />
            </div>
            <div className='col-md-6 ps-md-5 mt-5 mt-md-0'>
              <h3 className='fw-bold mb-3'>Smart city</h3>
              <p>
                A smart city is a technologically modern urban area that uses different types of
                electronic methods, voice activation methods and sensors to collect specific data.
                Information gained from that data is used to manage assets, resources and services
                efficiently; in return, that data is used to improve operations across the city.
                <br />
                Soarchain is creating smart cities by utilizing the connectivity of vehicles between
                each other and with the infrastructure.
              </p>
            </div>
          </div>

          <div className='row mt-5'>
            <div className='col-md-5'>
              <h3 className='fw-bold mb-3'>Traffic Safety</h3>
              <p className='fw-bold'>
                With the help of c-v2x emergency and safety apps, MOTUS offers a future with nearly
                zero accidents.
              </p>
              <small>
                Traffic accidents kill more than 1.25 million people around the world each year.
                Beside the lives lost, these accidents take a huge economic toll, with so much human
                potential being lost.
                <br /> According to the NHTSA, connected cars could prevent up to 80% of
                multi-vehicle crashes.
                <br /> V2X technology will drastically decrease the frequency of traffic accidents
                and the money wasted on them.
              </small>
            </div>
            <div className='col-md-2 d-none d-md-block mx-auto'>
              <div
                className='mx-auto'
                style={{
                  width: '10px',
                  borderLeft: '3px solid #f5f6fe',
                  height: '100%',
                }}
              />
            </div>
            <div className='col-md-5'>
              <h3 className='fw-bold mb-3 mt-3 mt-md-0'>Sustainability</h3>
              <small>
                Roads that are safer are less congested. Lowering congestion reduces CO2 emissions.
                <br /> Cooperative driving reduces accelerations and travel times.
                <br />
                <br /> The protection of micro mobility users provided by V2X would encourage the
                use of these technologies.
                <br /> According to 5GAA, it is possible to reduce carbon emissions by 45% when V2X
                is utilized in vehicles
              </small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MobilityConnectivity;
