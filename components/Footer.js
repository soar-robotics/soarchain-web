import Link from 'next/link';
import Image from 'next/image';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { ArrowRight } from 'react-feather';

const Footer = () => {
  return (
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col col-md-4 d-flex flex-column'>
          <div>
            <Link href={'/'}>
              <Image src='/Logo.png' width={216} height={68} />
            </Link>
          </div>
          <div className='d-flex flex-column mt-auto'>
            <span className='title'>Address</span>
            <span>Soarchain</span>
            <span>Pappelallee 78/79</span>
            <span>10437 Los Angeles</span>
            <span>USA</span>
          </div>
        </div>

        <div className='col col-md-4 d-flex flex-column '>
          <div className='d-flex'>
            <div className='d-flex flex-column pe-4 me-4 border-end'>
              <span className='title'>quick start</span>
              <Link href='/explore/users'>Users</Link>
              <Link href='/explore/developers'>Developers</Link>
              <Link href='/explore/business'>Business</Link>
              <Link href='/explore/investors'>Investors</Link>
            </div>
            <div className='d-flex flex-column'>
              <span className='title'>soarchain</span>
              <Link href='/explore/what-is-soarchain'>What is Soarchain</Link>
              <Link href='/explore/srx'>SRX</Link>
              <Link href='/explore/buy-srx'>Buy SRX</Link>
              <Link href='/explore/motus'>MOTUS</Link>
            </div>
          </div>
          <small className='mt-auto'>
            Copyright © 2010-2022 Soarchain. <br /> All rights reserved.
          </small>
        </div>
        <div className='col col-md-4 d-flex flex-column align-items-end'>
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
                className='btn-dark-blue rounded-0'
                variant='outline-secondary'
                id='newsletter-email'
              >
                <ArrowRight size={20} />
              </Button>
            </InputGroup>
          </div>
          <div className='mt-auto'>
            <Link href={'https://twitter.com/soarrobotics'}>
              <Image src='/twitter.png' width={32} height={27} className='cursor-pointer' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
