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
              title={<span className='text-purple'>Solutions</span>}
              id='solutions-dropdown'
            >
              <NavDropdown.Header>Products</NavDropdown.Header>

              <NavDropdown.Item className='text-capitalize' href='/solutions/soarchain'>
                soarchain
              </NavDropdown.Item>
              <NavDropdown.Item className='text-capitalize' href='/solutions/motus'>
                MOTUS
              </NavDropdown.Item>
              <NavDropdown.Item className='text-capitalize' href='/solutions/roadmap'>
                roadmap
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<span className='text-purple'>Explore</span>} id='explore-dropdown'>
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
              <NavDropdown.Divider className='rotate-90' />

              <NavDropdown.Header>Soarchain</NavDropdown.Header>

              <NavDropdown.Item className='text-capitalize' href='/explore/what-is-soarchain'>
                what is soarchain
              </NavDropdown.Item>
              <NavDropdown.Item className='text-capitalize' href='/explore/srx'>
                SRX
              </NavDropdown.Item>
              <NavDropdown.Item className='text-capitalize' href='/explore/buy-srx'>
                buy SRX
              </NavDropdown.Item>
              <NavDropdown.Item className='text-capitalize' href='/explore/motus'>
                MOTUS
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              dir
              title={<span className='text-purple'>Develop</span>}
              menuVariant='horizontal'
              id='develop-dropdown'
            >
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
              <NavDropdown.Divider dir='vertical' />

              <NavDropdown.Header>Soarchain</NavDropdown.Header>

              <NavDropdown.Item className='text-capitalize' href='/explore/what-is-soarchain'>
                what is soarchain
              </NavDropdown.Item>
              <NavDropdown.Item className='text-capitalize' href='/explore/srx'>
                SRX
              </NavDropdown.Item>
              <NavDropdown.Item className='text-capitalize' href='/explore/buy-srx'>
                buy SRX
              </NavDropdown.Item>
              <NavDropdown.Item className='text-capitalize' href='/explore/motus'>
                MOTUS
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
