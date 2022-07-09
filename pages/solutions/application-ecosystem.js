import Image from 'next/image';
import { motusUseCases } from '../../utils/context/motusContext';

function ApplicationEcosystem() {
  return (
    <section id='application-ecosystem'>
      <div className='showcase'>
        <div className='container'>
          <p className='text-title text-center'>
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

          <div className='tree-list mt-5'>
            {motusUseCases.map((item, index) => (
              <div key={index} className={`tree-list-item-${index % 2 === 0 ? 'left' : 'right'}`}>
                <h4 className='fw-bold'>{item.title}</h4>
                <small>{item.description}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplicationEcosystem;
