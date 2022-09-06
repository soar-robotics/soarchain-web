import Image from 'next/image';

function MobilityConnectivity() {
  return (
    <main id='mobility'>
      <section className='showcase'>
        <div className='container'>
          <span className='text-header-showcase'>
            Vehicle <br /> connectivity
          </span>
          <p className='mt-5'>
            Innovations in automotive connectivity, smart mobility, and the automotive IoT are
            geared toward both better experiences for the consumer and societal good. These
            technologies aim to lower CO2 emissions, enhance transportation efficiency in smart
            cities, increase road safety, and more.
          </p>
        </div>
      </section>

      <section className='softwarization'>
        <div className='container'>
          <div className='row reverse-row'>
            <div className='col-md-6 order-1 order-md-2 d-flex justify-content-center align-items-center'>
              <Image alt='traffic' src='/mobility/car.png' width={1140} height={642} />
            </div>
            <div className='col-md-6 order-2 order-md-1 pe-md-5 mt-5 mt-md-0'>
              <p className='text-title'>Softwarization of Mobility</p>
              <div className='separator mx-auto my-4' />
              <p className='fw-bold'>
                We see a shift to Software-defined vehicles: The transformation of the vehicles from
                a product that is mainly hardware-based to a software-centric electronic device on
                wheels.
              </p>
            </div>
            <div className='col order-3 mt-md-5'>
              <p>
                Vehicles are getting equipped with more sensors with higher levels of sophistication
                and optimization.
                <br />
                <br /> ADAS (Advanced driver-assistance system) are getting better at assisted
                driving, leading the way to higher levels of automation with a goal to reach fully
                autonomous driving.
                <br />
                <br /> A group of cars in an urban environment literally forms a community.
                <br /> In a well-functioning and efficient community, communication between the
                participants is of utmost importance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='aspects'>
        <div className='container'>
          <div className='row reverse-row'>
            <div className='col-md-6 order-2 order-md-1 d-flex justify-content-center align-items-center'>
              <Image alt='traffic' src='/mobility/connectivity.png' width={1140} height={642} />
            </div>
            <div className='col-md-6 order-1 order-md-2 ps-md-5 mt-5 mt-md-0'>
              <p className='text-title'>Smart city</p>
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
              <p className='text-title'>Traffic Safety</p>
              <p className='fw-bold'>
                With the help of c-v2x emergency and safety apps, MOTUS offers a future with nearly
                zero accidents.
              </p>
              <p>
                Traffic accidents kill more than 1.25 million people around the world each year.
                Beside the lives lost, these accidents take a huge economic toll, with so much human
                potential being lost.
                <br /> According to the NHTSA, connected cars could prevent up to 80% of
                multi-vehicle crashes.
                <br /> V2X technology will drastically decrease the frequency of traffic accidents
                and the money wasted on them.
              </p>
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
              <p className='text-title'>Sustainability</p>
              <p>
                Roads that are safer are less congested. Lowering congestion reduces CO2 emissions.
                <br /> Cooperative driving reduces accelerations and travel times.
                <br />
                <br /> The protection of micro mobility users provided by V2X would encourage the
                use of these technologies.
                <br /> According to 5GAA, it is possible to reduce carbon emissions by 45% when V2X
                is utilized in vehicles
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MobilityConnectivity;
