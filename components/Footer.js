import Link from 'next/link';
import Image from 'next/image';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { ArrowRight } from 'react-feather';

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
          <small className='mt-4 mt-md-auto'>
            Copyright © 2010-2022 Soarchain. <br /> All rights reserved.
          </small>
        </div>
        <div className='col col-12 col-md-4 d-flex flex-column align-items-md-end'>
          <div className='d-flex flex-column'>
            <span className='title'>subscribe to newsletter</span>
            <InputGroup className='mt-2'>
              <FormControl
                className='rounded-0'
                placeholder='Enter Your Email'
                aria-label='email'
                aria-describedby='newsletter-email'
              />
              <Button
                className='btn-dark rounded-0'
                variant='outline-secondary'
                id='newsletter-email'
              >
                <ArrowRight size={20} />
              </Button>
            </InputGroup>
          </div>
          <div className='mt-4 mt-md-auto'>
            <Link href={'https://twitter.com/soarrobotics'}>
              <Image
                alt='soarchain-twitter'
                src='/twitter.png'
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
