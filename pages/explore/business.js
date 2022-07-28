import Link from 'next/link';
import Image from 'next/image';

import { Btn } from '../../components/Btn';
import { businessFeatures } from '../../utils/context/business';

function Business() {
  return (
    <main id='business'>
      <section className='showcase'>
        <div className='container'>
          <p className='text-header-showcase'>
            Components <br /> of the network
          </p>
          <div className='tree-right mt-5 ps-5'>
            <div className='tree-right-list'>
              {businessFeatures.map((item, index) => (
                <span key={index} className='tree-right-list-item'>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='ecosystem'>
        <div className='container position-relative py-5 d-flex flex-column flex-md-row justify-content-center align-items-center gap-5'>
          <span className='text-large text-capitalize fw-bold'>explore application ecosystem</span>
          <div>
            <Link href='/solutions/application-ecosystem'>
              <a className='btn btn-outline-white py-2 px-5 text-uppercase text-white'>
                <small>explore more</small>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className='cv2x'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 d-flex align-items-center'>
              <Image alt='motus' src='/cv2x/road.png' width={536} height={549} />
            </div>
            <div className='col-md-6 mt-5 mt-md-0 ps-md-5 d-flex flex-column justify-content-center'>
              <p className='text-title'>What is cv2-x ?</p>

              <div>
                <p>
                  Cellular Vehicle-to-Everything (C-V2X) is a unified connectivity platform designed
                  to offer vehicles low-latency vehicle-to-vehicle (V2V), vehicle-to-roadside
                  infrastructure (V2I) and vehicle-to-pedestrian (V2P) communication.
                </p>
                <p>
                  Combining secure wide area and short-range connectivity in one module, C-V2X is a
                  versatile and cost-effective solution for automakers looking to improve road
                  safety.
                </p>
                <p>
                  With the expanding usage of electronic sensors on vehicles and the amount of data
                  generated, a reliable, secure communication system is necessary in mobility space.
                </p>
              </div>
              <Btn dark href='/solutions/cv2x' text='explore more' />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Business;
