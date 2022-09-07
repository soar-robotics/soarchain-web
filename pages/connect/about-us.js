import Image from 'next/image';

import { solutionsList } from '../../utils/context/investors';
import { teamMembers } from '../../utils/context/team';

function AboutUs() {
  return (
    <main id='about-us'>
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

      <div className='team'>
        <div className='container'>
          <p className='text-title text-center'>Team</p>
          <p className='text-center'>Meet the Soar Robotics team</p>
          <div className='row team-members mt-5'>
            <div className='col-md-4 team-members-left'>
              {teamMembers.map((item, index) => {
                return (
                  index < 6 && (
                    <div className='team-members-item'>
                      <span className='team-members-item-name'>{item.name}</span>
                      <span className='team-members-item-title'>{item.title}</span>
                    </div>
                  )
                );
              })}
            </div>
            <div className='col-md-4 team-members-center'>
              {teamMembers.map((item, index) => {
                return (
                  index >= 6 &&
                  index < 12 && (
                    <div className='team-members-item'>
                      <span className='team-members-item-name'>{item.name}</span>
                      <span className='team-members-item-title'>{item.title}</span>
                    </div>
                  )
                );
              })}
            </div>
            <div className='col-md-4 team-members-right'>
              {teamMembers.map((item, index) => {
                return (
                  index >= 12 &&
                  index < 18 && (
                    <div className='team-members-item'>
                      <span className='team-members-item-name'>{item.name}</span>
                      <span className='team-members-item-title'>{item.title}</span>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
