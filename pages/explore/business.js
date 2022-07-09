import Tree from '../../components/Tree';
import { Btn } from '../../components/Btn';
import { businessFeatures } from '../../utils/context/business';

function Business() {
  return (
    <main id='business'>
      <section className='showcase'>
        <Tree title='Components of the network' context={businessFeatures} />
      </section>

      <section className='applications'>
        <div className='container'>
          <h5 className='text-center text-purple text-uppercase fw-bold'>
            explore application ecosystem
          </h5>

          <div className='text-center mt-5'>
            <Btn dark href='/solutions/application-ecosystem' text='learn more' />
          </div>
        </div>
      </section>

      <section className='cv2x'>
        <div className='container'>
          <span className='text-title'>What is cv2-x ?</span>

          <div className='mt-5'>
            <p>
              Cellular Vehicle-to-Everything (C-V2X) is a unified connectivity platform designed to
              offer vehicles low-latency vehicle-to-vehicle (V2V), vehicle-to-roadside
              infrastructure (V2I) and vehicle-to-pedestrian (V2P) communication.
            </p>
            <p>
              Combining secure wide area and short-range connectivity in one module, C-V2X is a
              versatile and cost-effective solution for automakers looking to improve road safety.
            </p>
            <p>
              With the expanding usage of electronic sensors on vehicles and the amount of data
              generated, a reliable, secure communication system is necessary in mobility space.
            </p>
          </div>

          <div className='text-center mt-5'>
            <Btn href='/solutions/cv2x' text='explore more' />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Business;
