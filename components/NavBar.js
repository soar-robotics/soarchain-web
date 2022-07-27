import Image from 'next/image';
import { useState } from 'react';

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  // const [styles, setStyles] = useState('');

  // if (typeof window !== 'undefined') {
  //   const navItemWidth = document.querySelector('.show');

  //   console.log(navItemWidth);

  //   setStyles(`.navbar {
  //   background: red !important;
  // }`);
  // }

  return (
    <Navbar className='navbar' variant='dark' expand='md'>
      {/* <style>{styles}</style> */}
      <Container>
        <Navbar.Brand href='/'>
          <Image alt='soarchain' src='/logo/text-solid.png' width={216} height={68} />
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
                  <NavDropdown.Item
                    className='text-capitalize'
                    href='/solutions/mobility-connectivity'
                  >
                    mobility and connectivity
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-uppercase' href='/solutions/cv2x'>
                    cv2x
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className='text-capitalize'
                    href='/solutions/application-ecosystem'
                  >
                    application ecosystem
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' href='/solutions/lightpaper'>
                    lightpaper <span className='text-secondary'>(coming soon)</span>
                  </NavDropdown.Item>
                </div>
                <div
                  className='my-auto'
                  style={{
                    borderLeft: '3px solid #f5f6fe',
                    height: '150px',
                  }}
                />
                <div>
                  <NavDropdown.Header>Products</NavDropdown.Header>

                  <NavDropdown.Item className='text-capitalize' href='/solutions/soarchain'>
                    soarchain
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-uppercase' href='/solutions/motus'>
                    motus
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' href='/solutions/roadmap'>
                    roadmap <span className='text-secondary'>(coming soon)</span>
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

                  <NavDropdown.Item className='text-capitalize' href='/explore/users'>
                    users
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' href='/explore/developers'>
                    Developers <span className='text-secondary'>(coming soon)</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' href='/explore/business'>
                    Business
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' href='/explore/investors'>
                    Investors
                  </NavDropdown.Item>
                </div>
                <div
                  className='my-auto'
                  style={{
                    borderLeft: '3px solid #f5f6fe',
                    height: '150px',
                  }}
                />
                <div>
                  <NavDropdown.Header>Soarchain</NavDropdown.Header>

                  <NavDropdown.Item className='text-capitalize' href='/explore/srx'>
                    soar coin <span className='text-secondary'>(coming soon)</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' href='/explore/buy-srx'>
                    buy soar coin <span className='text-secondary'>(coming soon)</span>
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

                  <NavDropdown.Item className='text-capitalize' href='/develop/consensus'>
                    proof-of-availability <span className='text-secondary'>(coming soon)</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' href='/connect/become-validator'>
                    become a validator <span className='text-secondary'>(coming soon)</span>
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
                  <NavDropdown.Item className='text-capitalize' href='/connect/about-us'>
                    About Us
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
