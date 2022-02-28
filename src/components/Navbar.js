import React, { useState, useEffect } from 'react';
import { Button } from './Button';
//Added HashLink as Link in-roder to be able to use "anchor 
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Navbar.css';

function Navbar() {
  //const [currentAccount, setCurrentAccount] = useState("");
  //const walletAddress = "Connect Wallet"
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };



  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  /*
  <li className='nav-item'>
    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
      Home
    </Link>
  </li>
   */
  /*
    
    <li>
              <Link
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Wallet
              </Link>
            </li>
          {button && <Button onClick={connectWallet()} buttonStyle='btn--outline'>Wallet</Button>}
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
   */
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link smooth to='#' className='navbar-logo' onClick={closeMobileMenu}>
            <h1>OS</h1>
            <i className='fa-solid fa-otter' />
          </Link>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                smooth
                to='#road-map'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Road Map
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth
                to='#mint'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Mint
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth
                to='#faq'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth
                to='#team'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Team
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
