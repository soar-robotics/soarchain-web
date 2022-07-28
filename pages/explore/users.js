import Image from 'next/image';

import { Btn, BtnOutline } from '../../components/Btn';
import { TreeWave } from '../../components/Tree';
import { userFeatures } from '../../utils/context/users';

function Users() {
  return (
    <main id='users'>
      <section className='showcase'>
        <div className='container'>
          <p className='text-header-showcase text-center mb-5'>
            Soarchain <br /> offers users
          </p>
          <TreeWave context={userFeatures} />
        </div>
      </section>

      <section className='motus'>
        <div className='container'>
          <div className='row d-flex align-items-center justify-content-center'>
            <div className='col-md-6 order-2 order-md-1 mt-5 mt-md-0'>
              <p className='text-header text-center'>Upgrade your car with MOTUS</p>
              <div className='text-center mt-4'>
                <Btn dark href='/solutions/motus' text='explore more' />
              </div>
            </div>

            <div className='col-md-6 order-1 order-md-2'>
              <Image alt='motus' src='/motus/front.png' width={690} height={552} />
            </div>
          </div>
        </div>
      </section>

      <section className='applications'>
        <div className='container'>
          <p className='text-title'>Soarchain unlocks variety of applications</p>
          <div className='my-5 pt-5'>
            <Image alt='application' src='/fork-dark.png' width={1088} height={576} />
          </div>
          <div className='text-center mt-5'>
            <BtnOutline dark href='/solutions/application-ecosystem' text='explore more' />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Users;
