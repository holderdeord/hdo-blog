import PropTypes from 'prop-types';
import React from 'react';

import '../styles/PageHeader.scss';
import '../styles/hdo.scss';

import HDOLogo from '../images/hdo_logo.svg';

import MainMenu from './MainMenu';

const PageHeader = ({ title }) => (
  <header className="page-header">
    <div className="page-header__logo">
      <a href="/">
        <HDOLogo />
      </a>
    </div>
    <div className="page-header__title">
      <a href="/">
        <h1>{title}</h1>
      </a>
    </div>
    <div className="page-header__menu">
      <MainMenu />
    </div>
  </header>
);
PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
export default PageHeader;
