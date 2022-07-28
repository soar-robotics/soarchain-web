import Tree from '../../components/Tree';
import { cv2xApplications, cv2xFeatures } from '../../utils/context/cv2x';

function Cv2x() {
  return (
    <main id='cv2x'>
      <section className='showcase'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <span className='text-header'>
                CV2-X is the solution to full autonomy and safer transportation
              </span>
              <div className='mt-5'>
                {cv2xFeatures.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
            <div className='ms-lg-auto col-lg-5 ps-lg-5 mt-5 mt-lg-0'>
              <div className='ps-lg-5'>
                <h5 className='text-center text-purple text-title-semi fw-bold'>
                  Through its instant communication V2X allows road safety applications such as
                </h5>
                <div className='mx-auto'>
                  <Tree
                    bullet
                    context={cv2xApplications.map((item, index) => (
                      <small key={index}>{item}</small>
                    ))}
                  />
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
