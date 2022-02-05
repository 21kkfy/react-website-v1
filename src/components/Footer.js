import React from 'react';
import '../styles/Footer.css';
//import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  //TODO: Add Youtube link VV
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              OS
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>OS © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link instagram'
              to={{ pathname: "https://www.instagram.com/os_nft/" }}
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link reddit'
              to={{ pathname: "https://www.reddit.com/r/ottersociety_nft/" }}
              target='_blank'
              aria-label='Reddit'
            >
              <i className='fab fa-reddit' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to={{ pathname: "https://twitter.com/os_nft" }}
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link discord'
              to={{ pathname: "https://discord.gg/xCxvB2U2JP" }}
              target='_blank'
              aria-label='Discord'
            >
              <i className='fab fa-discord' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
