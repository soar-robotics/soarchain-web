import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar variant='dark' expand='lg' style={{ zIndex: '1000' }}>
      <Container>
        <Navbar.Brand href='#home'>
          <Image src='/Logo.png' width={216} height={68} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavDropdown dir title='Explore' id='explore-dropdown'>
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
              <NavDropdown.Item className='text-capitalize' href='/explore/scobu'>
                SCOBU
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown dir title='Develop' id='develop-dropdown'>
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
              <NavDropdown.Item className='text-capitalize' href='/explore/scobu'>
                SCOBU
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <header>
    //   <nav id='navbar' className='navbar-dark navbar navbar-expand-lg navbar-light'>
    //     <div className='container'>
    //       <Link href={'/'}>
    //         <Image src='/Logo.png' width={216} height={68} />
    //       </Link>

    //       <button
    //         aria-controls='navbarCollapse'
    //         className='navbar-toggler collapsed'
    //         type='button'
    //         aria-label='Toggle navigation'
    //         data-bs-toggle='collapse'
    //         data-bs-target='#navbarCollapse'
    //       >
    //         <span className='navbar-toggler-icon'></span>
    //       </button>

    //       <div id='navbarCollapse' className='navbar-collapse collapse'>
    //         <ul className='navbar-nav ms-auto'>
    //           <li className='nav-item'>
    //             <Link href='/'>
    //               <a className='nav-link'>On-Chair Data Infrastructure</a>
    //             </Link>
    //           </li>
    //           <li className='nav-item'>
    //             <Link href='/'>
    //               <a className='nav-link'>Secure Data Access Layer</a>
    //             </Link>
    //           </li>
    //           <li className='nav-item'>
    //             <Link href='/'>
    //               <a className='nav-link'>KoZMITO Coin</a>
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
};

export default NavBar;
