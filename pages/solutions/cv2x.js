import Tree from '../../components/Tree';
import { cv2xApplications, cv2xFeatures } from '../../utils/context/cv2x';

function Cv2x() {
  return (
    <main id='cv2x'>
      <section className='showcase'>
        <div className='container'>
          <span className='text-title'>
            CV2-X is the solution to full autonomy and safer transportation
          </span>
          <div className='mt-5'>
            {cv2xFeatures.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </section>
      <section className='applications'>
        <div className='container'>
          <Tree
            title='Through its instant communication V2X allows road safety applications such as'
            context={cv2xApplications}
          />
        </div>
      </section>
    </main>
  );
}

export default Cv2x;
