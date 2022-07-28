import Image from 'next/image';
import { motusUseCases } from '../../utils/context/motusContext';

function ApplicationEcosystem() {
  return (
    <main id='application-ecosystem'>
      <section className='showcase'>
        <div className='container'>
          <p className='text-header-showcase text-center'>
            Soarchain unlocks a huge <br /> variety of applications <br />
            and use cases
          </p>

          <div className='showcase-image'>
            <Image
              alt='applications'
              src='/pages/solutions/application-ecosystem/fork.png'
              width={1088}
              height={536}
            />
          </div>
        </div>
      </section>

      <section className='features'>
        <div className='container'>
          <div className='tree-list mt-5'>
            {motusUseCases.map((item, index) => (
              <div key={index} className={`tree-list-item-${index % 2 === 0 ? 'left' : 'right'}`}>
                <p className='text-medium fw-bold'>{item.title}</p>
                <small>{item.description}</small>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ApplicationEcosystem;
