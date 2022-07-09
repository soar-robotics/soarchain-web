import Image from 'next/image';

import { Btn } from '../../components/Btn';
import Tree from '../../components/Tree';
import { userFeatures } from '../../utils/context/users';

function Users() {
  return (
    <main id='users'>
      <section className='showcase'>
        <div className='container'>
          <Tree title='Soarchain offers users' context={userFeatures} />
        </div>
      </section>

      <section className='motus'>
        <div className='container'>
          <div className='row d-flex align-items-center justify-content-center'>
            <div className='col col-md-6'>
              <h5 className='text-center text-purple text-uppercase fw-bold'>
                Upgrade your car with MOTUS
              </h5>
              <div className='text-center mt-5'>
                <Btn dark href='/solutions/motus' text='learn more' />
              </div>
            </div>

            <div className='col col-md-6'>
              <Image alt='motus' src='/motus/front-left.png' width={1600} height={899} />
            </div>
          </div>
        </div>
      </section>

      <section className='applications'>
        <div className='container'>
          <h5 className='text-center text-purple text-uppercase fw-bold'>
            Soarchain unlocks variety of applications
          </h5>
          <div className='my-5'>
            <Image
              alt='application'
              src='/pages/solutions/application-ecosystem/fork.png'
              width={1088}
              height={536}
            />
          </div>
          <div className='text-center mt-5'>
            <Btn href='/solutions/application-ecosystem' text='explore more' />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Users;
