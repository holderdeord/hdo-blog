import React from 'react';

import IconTwitterSquare from '../images/icon-twitter-square.svg';
import IconFacebookSquare from '../images/icon-facebook-square.svg';

const GlobalNavigation = () => (
  <nav className="global-nav main-menu__nav">
    <h2 className="hdo-nav-title">Holder de ord</h2>
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link main-menu__nav-link" href="https://www.holderdeord.no/portal/om-oss">
          Om oss
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link main-menu__nav-link"
          href="https://www.holderdeord.no/portal/stott-oss"
        >
          Støtt oss
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link main-menu__nav-social" href="https://twitter.com/holderdeord">
          <IconTwitterSquare /> <span>Twitter</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link main-menu__nav-social" href="https://www.facebook.com/holderdeord">
          <IconFacebookSquare /> <span>Facebook</span>
        </a>
      </li>
    </ul>
  </nav>
);
export default GlobalNavigation;
