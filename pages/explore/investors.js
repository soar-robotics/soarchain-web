import Image from 'next/image';
import Link from 'next/link';

import { solutionsList } from '../../utils/context/investors';

function Investors() {
  return (
    <main id='investors'>
      <section className='showcase'>
        <div className='container'>
          <div className='text-center'>
            <span className='text-title'>Solutions</span>
            <p>
              Soarchain offers many possibilities in various sectors and unlocks the business <br />
              potential of novel revenue streams in the mobility space.
            </p>
          </div>

          <div className='solutions d-flex flex-column flex-md-row gap-5 gap-md-0 row mt-5'>
            {solutionsList.map((item, index) => (
              <div
                key={index}
                className='col col-md-6 col-lg-3 d-flex flex-column align-items-center justify-content-between gap-5 p-3'
              >
                <span>{item.icon}</span>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='ecosystem'>
        <div className='container position-relative py-5 d-flex justify-content-center align-items-center gap-5'>
          <h5 className='text-center text-capitalize fw-bold'>explore application ecosystem</h5>
          <div>
            <Link href='/solutions/application-ecosystem'>
              <a className='btn btn-outline-white py-2 px-5 text-uppercase text-white'>
                <small>explore more</small>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className='partners'>
        <div className='container'>
          <h2 className='text-center fw-bold mb-5'>Our partners</h2>
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
