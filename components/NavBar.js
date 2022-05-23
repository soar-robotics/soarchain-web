import React from 'react';
import Image from 'next/image';

const NavBar = () => {
  return (
    <header>
      <nav
        id="navbar"
        className="navbar-dark navbar navbar-expand-lg navbar-light"
      >
        <div className="container container-fluid">
          <a href="/">
            <Image src="/Logo.png" width={216} height={68} />
          </a>
          <button
            aria-controls="navbarCollapse"
            className="navbar-toggler collapsed"
            type="button"
            aria-label="Toggle navigation"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navbarCollapse" className="navbar-collapse collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  On-Chair Data Infrastructure
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Secure Data Access Layer
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  KoZMITO Coin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
