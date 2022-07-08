import Image from 'next/image';

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar className='navbar' variant='dark' expand='md'>
      <Container>
        <Navbar.Brand href='/'>
          <Image src='/Logo.png' width={216} height={68} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavDropdown
              title={<span className='text-white'>Solutions</span>}
              id='solutions-dropdown'
            >
              <div className='d-md-flex gap-3 pe-3'>
                <div>
                  <NavDropdown.Header>Industries</NavDropdown.Header>
                  <NavDropdown.Item
                    className='text-capitalize'
                    href='/solutions/mobility-and-connectivity'
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
                    lightpaper (coming soon)
                  </NavDropdown.Item>
                </div>
                <div>
                  <NavDropdown.Header>Products</NavDropdown.Header>

                  <NavDropdown.Item className='text-capitalize' href='/solutions/soarchain'>
                    soarchain
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-uppercase' href='/solutions/motus'>
                    motus
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' href='/solutions/roadmap'>
                    roadmap (coming soon)
                  </NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>
            <NavDropdown title={<span className='text-white'>Explore</span>} id='explore-dropdown'>
              <div className='d-md-flex gap-3 pe-3'>
                <div>
                  <NavDropdown.Header>Quick Start</NavDropdown.Header>

                  <NavDropdown.Item className='text-capitalize' href='/explore/users'>
                    users
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' href='/explore/developers'>
                    Developers
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' href='/explore/business'>
                    Business
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' href='/explore/investors'>
                    Investors
                  </NavDropdown.Item>
                </div>
                <div>
                  <NavDropdown.Header>Soarchain</NavDropdown.Header>

                  <NavDropdown.Item className='text-capitalize' href='/explore/what-is-soarchain'>
                    what is soarchain
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' href='/explore/srx'>
                    soarcoin (coming soon)
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' href='/explore/buy-srx'>
                    buy soarcoin (coming soon)
                  </NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>
            <NavDropdown
              dir
              title={<span className='text-white'>Develop</span>}
              menuVariant='horizontal'
              id='develop-dropdown'
            >
              <div className='d-md-flex gap-3'>
                <div className='w-100'>
                  {/* <NavDropdown.Header>Connect</NavDropdown.Header> */}

                  <NavDropdown.Item className='text-capitalize' href='/develop/consensus'>
                    proof-of-availability
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' href='/connect/become-validator'>
                    become a validator
                  </NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>
            <NavDropdown
              dir
              title={<span className='text-white'>Connect</span>}
              menuVariant='horizontal'
              id='develop-dropdown'
            >
              <div className='d-md-flex gap-3'>
                <div className='w-100'>
                  {/* <NavDropdown.Header>Connect</NavDropdown.Header> */}

                  <NavDropdown.Item className='text-capitalize' href='/connect/team'>
                    team
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' href='/connect/community'>
                    community
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' href='/connect/business'>
                    socials
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' href='/connect/investors'>
                    partners
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-capitalize' href='/connect/news'>
                    news
                  </NavDropdown.Item>
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
