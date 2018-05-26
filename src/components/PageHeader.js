import PropTypes from 'prop-types';
import React from 'react';

import HDOLogo from '../images/hdo_logo.svg';

const Logo = () => <HDOLogo />;

const MainMenu = ({ open, onClick }) => (
  <a href="#" className={open ? 'open' : ''} onClick={onClick}>
    Menu
  </a>
);
MainMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const PageHeader = ({ title, onMenuClick }) => (
  <header className="page-header">
    <div className="page-header__logo">
      <Logo />
    </div>
    <div className="page-header__title">
      <h1 className="title-h2">{title}</h1>
    </div>
    <div className="page-header__menu">
      <MainMenu onClick={onMenuClick} open={false} />
    </div>
  </header>
);
PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};
export default PageHeader;
