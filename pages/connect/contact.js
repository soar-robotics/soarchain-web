import Image from 'next/image';
import { ArrowRight } from 'react-feather';

function Contact() {
  return (
    <main id='contact'>
      <section className='showcase'>
        <div className='container'>
          <div className='text-center mb-5'>
            <span className='text-header-showcase'>Contact Us</span>
          </div>
          <div className='social row'>
            <div className='social-item col-md-6 d-flex gap-3 align-items-center'>
              <div>
                <Image alt='soarchain' src='/icon/twitter.png' width={80} height={80} />
              </div>
              <div className='d-flex flex-column gap-2'>
                <span>Twitter page</span>
                <a href='https://twitter.com/soar_chain' target='_blank' rel='noreferrer'>
                  <span className='text-pink d-flex gap-5'>
                    Visit <ArrowRight />{' '}
                  </span>
                </a>
              </div>
            </div>
            <div className='social-item col-md-6 d-flex gap-3 align-items-center'>
              <div>
                <Image alt='soarchain' src='/icon/linkedin.png' width={80} height={80} />
              </div>
              <div className='d-flex flex-column gap-2'>
                <span>Linkedin page</span>
                <a
                  href='https://www.linkedin.com/company/soar-robotics'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='text-pink d-flex gap-5'>
                    Visit <ArrowRight />{' '}
                  </span>
                </a>
              </div>
            </div>
            <div className='social-item col-md-6 d-flex gap-3 align-items-center'>
              <div>
                <Image alt='soarchain' src='/icon/discord.png' width={80} height={80} />
              </div>
              <div className='d-flex flex-column gap-2'>
                <span>Discord channel</span>
                <span className='text-pink'>Coming soon!</span>
              </div>
            </div>
            <div className='social-item col-md-6 d-flex gap-3 align-items-center'>
              <div>
                <Image alt='soarchain' src='/icon/youtube.png' width={80} height={80} />
              </div>
              <div className='d-flex flex-column gap-2'>
                <span>Youtube channel</span>
                <span className='text-pink'>Coming soon!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
