import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { ArrowRight } from 'react-feather';
import { Btn } from './Btn';

const Footer = () => {
  return (
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col col-12 col-md-4 d-flex flex-column'>
          <div className='w-50'>
            <Link href={'/'}>
              <Image alt='soarchain' src='/logo/text-hollow.png' width={216} height={68} />
            </Link>
          </div>
          <div className='d-flex flex-column mt-auto'>
            <span className='title'>Address</span>
            <span>Soarchain</span>
            <span>8605 Santa Monica Boulevard</span>
            <span>West Hollywood, CA</span>
            <span>USA</span>
          </div>
        </div>

        <div className='col col-12 col-md-4 d-flex flex-column '>
          <div className='d-flex'>
            <div className='d-flex flex-column pe-4 me-4 border-end'>
              <span className='title'>quick start</span>
              <Link href='/explore/users'>Users</Link>
              {/*               <Link href='/explore/developers'>Developers</Link>
               */}{' '}
              <Link href='/explore/business'>Business</Link>
              <Link href='/explore/investors'>Investors</Link>
            </div>
            <div className='d-flex flex-column'>
              <span className='title'>soarchain</span>
              <Link href='/solutions/soarchain'>What is Soarchain</Link>
              {/*               <Link href='/explore/srx'>SRX</Link>
              <Link href='/explore/buy-srx'>Buy SRX</Link> */}
              <Link href='/solutions/motus'>MOTUS</Link>
            </div>
          </div>

          <div className='mt-4 mt-md-auto'>
            <Link href={'https://www.soarrobotics.com/'}>www.soarrobotics.com</Link>
          </div>
          <small className='mt-4 mt-md-auto'>
            Copyright © 2010-2022 Soarchain. <br /> All rights reserved.
          </small>
        </div>
        <div className='col col-12 col-md-4 d-flex flex-column align-items-md-end'>
          <div className='d-flex flex-column'>
            <span className='title'>subscribe to newsletter</span>
            <a
              className='mt-2'
              href='https://www.getdrip.com/forms/647267939/submissions/new'
              data-drip-show-form='647267939'
            >
              <Button
                className='btn-dark px-4 rounded-4   '
                variant='outline-secondary'
                id='newsletter-email'
              >
                <small className='me-2 text-uppercase'>Click to subscribe</small>
                <ArrowRight size={20} />
              </Button>
            </a>
          </div>
          <div className='mt-4 mt-md-auto'>
            <Link href={'https://twitter.com/soar_chain'}>
              <Image
                alt='soarchain-twitter'
                src='/icon/twitter.png'
                width={32}
                height={27}
                className='cursor-pointer'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
