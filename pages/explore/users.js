import Image from 'next/image';

import { Btn, BtnOutline } from '../../components/Btn';
import Tree, { TreeWave } from '../../components/Tree';
import { userFeatures } from '../../utils/context/users';

function Users() {
  return (
    <main id='users'>
      <section className='showcase'>
        <div className='container'>
          <p className='text-title text-center mb-5'>
            Soarchain <br /> offers users
          </p>
          <TreeWave context={userFeatures} />
        </div>
      </section>

      <section className='motus'>
        <div className='container'>
          <div className='row d-flex align-items-center justify-content-center'>
            <div className='col col-md-6'>
              <h5 className='text-center text-title text-uppercase fw-bold'>
                Upgrade your <br /> car with MOTUS
              </h5>
              <div className='text-center mt-5'>
                <Btn href='/solutions/motus' text='explore more' />
              </div>
            </div>

            <div className='col col-md-6'>
              <Image alt='motus' src='/motus/front-white.png' width={690} height={552} />
            </div>
          </div>
        </div>
      </section>

      <section className='applications'>
        <div className='container'>
          <h3 className='text-center fw-bold'>Soarchain unlocks variety of applications</h3>
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
