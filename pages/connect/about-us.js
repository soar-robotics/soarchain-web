import Image from 'next/image';

import { solutionsList } from '../../utils/context/investors';

function Investors() {
  return (
    <main id='investors'>
      <section className='showcase'>
        <div className='container text-center'>
          <span className='text-header-showcase'>Building the Connected Mobility Together</span>
          <p className='mt-3'>Join us on our journey of making cars connected.</p>

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
          <p className='text-title text-center mb-5'>Our partners</p>
          <div>
            <Image
              alt='soarchain-partners'
              src='/partners/partners.png'
              width={1076}
              height={151}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Investors;
