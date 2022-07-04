import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-md-5'>
          <Link href={'/'}>
            <Image src='/Logo.png' width={216} height={68} />
          </Link>
        </div>

        <div className='col-md-6'>Copyright © 2010-2022 Soarchain. All rights reserved.</div>
        <div className='col-md-1 py-md-5'>
          <Link href={'https://twitter.com/soarrobotics'}>
            <Image src='/twitter.png' width={32} height={27} className='cursor-pointer' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
