import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import connectWallet from './pages/ConnectWallet';

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
  <li className='nav-item'>
              <Link
                to='/road-map'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Road Map
              </Link>
            </li>
    <li className='nav-item'>
              <Link
                to='/#mint'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Mint
              </Link>
            </li>
    <li>
              <Link
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Wallet
              </Link>
            </li>
          {button && <Button onClick={connectWallet()} buttonStyle='btn--outline'>Wallet</Button>}
   */
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <h1>OS</h1>
            <i className='fa-solid fa-otter' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
