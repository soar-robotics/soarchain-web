import Image from 'next/image';

import { Btn } from '../../components/Btn';
import { solutionsList } from '../../utils/context/investors';

function Investors() {
  return (
    <main id='investors'>
      <section className='showcase'>
        <div className='container'>
          <span className='text-title'>Solutions</span>
          <p>
            Soarchain offers many possibilities in various sectors and unlocks the business
            potential of novel revenue streams in the mobility space.
          </p>

          <div className='solutions d-flex flex-column flex-md-row gap-4 gap-md-0 row mt-5'>
            {solutionsList.map((item, index) => (
              <div
                key={index}
                className='col col-md-6 col-xl-3 d-flex flex-column align-items-center gap-3'
              >
                <span>{item.icon}</span>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='partners'>
        <div className='container'>
          <div className='d-flex flex-column flex-md-row justify-content-between align-items-center row'>
            <div className='col col-md-4'>
              <h5 className='text-center text-uppercase fw-bold'>our partners</h5>
            </div>
            <div className='col col-md-8'>
              <Image
                alt='soarchain-partners'
                src='/partners/partners.png'
                width={806}
                height={513}
              />
            </div>
          </div>
        </div>
      </section>

      <section className='applications'>
        <div className='container'>
          <h5 className='text-center text-purple text-uppercase fw-bold'>
            explore application ecosystem
          </h5>

          <div className='text-center mt-5'>
            <Btn href='/solutions/application-ecosystem' text='learn more' />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Investors;
