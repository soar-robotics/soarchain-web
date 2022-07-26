import Tree from '../../components/Tree';
import { cv2xApplications, cv2xFeatures } from '../../utils/context/cv2x';

function Cv2x() {
  return (
    <main id='cv2x'>
      <section className='showcase'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6'>
              <span className='text-title'>
                CV2-X is the solution to full autonomy and safer transportation
              </span>
              <div className='mt-5'>
                {cv2xFeatures.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
            <div className='ms-xl-auto col-xl-5 ps-xl-5 mt-5 mt-xl-0'>
              <div className='ps-xl-5'>
                <h5 className='text-center text-purple text-uppercase fw-bold'>
                  Through its instant communication V2X allows road safety applications such as
                </h5>
                <div className='mx-auto'>
                  <Tree bullet context={cv2xApplications} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cv2x;
