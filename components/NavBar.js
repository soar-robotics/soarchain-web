import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Navbar, Nav, Container, NavDropdown, NavLink } from 'react-bootstrap';

const NavBar = () => {
  const router = useRouter();

  const dark = router.pathname !== '/solutions/motus';

  return (
    <Navbar className={`navbar ${!dark ? 'navbar-light' : ''}`} variant='dark' expand='md'>
      <Container>
        <Navbar.Brand href='/'>
          <Image
            alt='soarchain'
            src={`/logo/text-solid${!dark ? '-dark' : ''}.png`}
            width={216}
            height={68}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavDropdown
              align='end'
              title={<span className='text-white'>Solutions</span>}
              id='solutions-dropdown'
            >
              <div className='d-md-flex gap-3 pe-3'>
                <div>
                  <NavDropdown.Header>Industries</NavDropdown.Header>
                  <NavDropdown.Item className='text-capitalize'>
                    <Link href='/solutions/mobility-connectivity'>
                      <span className='d-block'>mobility and connectivity </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-uppercase'>
                    <Link href='/solutions/cv2x'>
                      <span className='d-block'>cv2x</span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize'>
                    <Link href='/solutions/application-ecosystem'>
                      <span className='d-block'>application ecosystem </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className='text-capitalize'
                    href='/Soarchain_lightpaper.pdf'
                    target='_blank'
                  >
                    lightpaper
                  </NavDropdown.Item>
                </div>
                <div
                  className='my-auto d-none d-md-block'
                  style={{
                    borderLeft: '3px solid #f5f6fe',
                    height: '150px',
                  }}
                />
                <div>
                  <NavDropdown.Header>Products</NavDropdown.Header>

                  <NavDropdown.Item className='text-capitalize'>
                    <Link href='/solutions/soarchain'>
                      <span className='d-block'>soarchain </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-uppercase'>
                    <Link href='/solutions/motus'>
                      <span className='d-block'>motus </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' disabled>
                    <Link href='/solutions/roadmap'>
                      <span className='d-block'>
                        roadmap <span className='text-secondary'>(coming soon)</span>
                      </span>
                    </Link>
                  </NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>
            <NavDropdown
              align='end'
              title={<span className='text-white'>Explore</span>}
              id='explore-dropdown'
            >
              <div className='d-md-flex gap-3 pe-3'>
                <div>
                  <NavDropdown.Header>Quick Start</NavDropdown.Header>

                  <NavDropdown.Item className='text-capitalize'>
                    <Link href='/explore/users'>
                      <span className='d-block'>users </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' disabled>
                    <Link href='/explore/developers'>
                      <span className='d-block'>
                        Developers <span className='text-secondary'>(coming soon)</span>
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize'>
                    <Link href='/explore/business'>
                      <span className='d-block'>Business </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize'>
                    <Link href='/explore/investors'>
                      <span className='d-block'>Investors </span>
                    </Link>
                  </NavDropdown.Item>
                </div>
                <div
                  className='my-auto d-none d-md-block'
                  style={{
                    borderLeft: '3px solid #f5f6fe',
                    height: '150px',
                  }}
                />
                <div>
                  <NavDropdown.Header>Soarchain</NavDropdown.Header>

                  <NavDropdown.Item className='text-capitalize' disabled>
                    <Link href='/explore/srx'>
                      <span className='d-block'>
                        Soar Mobility Token <span className='text-secondary'>(coming soon)</span>
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' disabled>
                    <Link href='/explore/buy-srx'>
                      <span className='d-block'>
                        buy SRMT <span className='text-secondary'>(coming soon)</span>
                      </span>
                    </Link>
                  </NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>
            <NavDropdown
              align='end'
              dir
              title={<span className='text-white'>Develop</span>}
              menuVariant='horizontal'
              id='develop-dropdown'
            >
              <div className='d-md-flex gap-3'>
                <div className='w-100'>
                  {/* <NavDropdown.Header>Connect</NavDropdown.Header> */}

                  <NavDropdown.Item className='text-capitalize' disabled>
                    <Link href='/develop/consensus'>
                      <span className='d-block'>
                        proof-of-availability <span className='text-secondary'>(coming soon)</span>
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' disabled>
                    <Link href='/connect/become-validator'>
                      <span className='d-block'>
                        become a validator <span className='text-secondary'>(coming soon)</span>
                      </span>
                    </Link>
                  </NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>
            <NavDropdown
              align='end'
              dir
              title={<span className='text-white'>Connect</span>}
              menuVariant='horizontal'
              id='develop-dropdown'
            >
              <div className='d-md-flex gap-3'>
                <div className='w-100'>
                  {/* <NavDropdown.Header>Connect</NavDropdown.Header> */}

                  {/* <NavDropdown.Item className='text-capitalize' href='/connect/team'>
                    team
                  </NavDropdown.Item> */}
                  {/* <NavDropdown.Item className='text-capitalize' href='/connect/community'>
                    community
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' href='/connect/business'>
                    socials
                  </NavDropdown.Item>  */}
                  <NavDropdown.Item className='text-capitalize'>
                    <Link href='/connect/about-us'>
                      <span className='d-block'>About Us </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize'>
                    <Link href='/connect/contact'>
                      <span className='d-block'>Contact Us </span>
                    </Link>
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item className='text-capitalize' href='/connect/news'>
                    news
                  </NavDropdown.Item> */}
                </div>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
