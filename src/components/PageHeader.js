import PropTypes from 'prop-types';
import React from 'react';

import '../styles/PageHeader.scss';
import '../styles/hdo.scss';

import HDOLogo from '../images/hdo_logo.svg';

import MainMenu from './MainMenu';

const Title = ({ title }) => (
  <a href="/">
    <h1>{title}</h1>
  </a>
);
Title.propTypes = {
  title: PropTypes.string.isRequired,
};

const PageHeader = ({
  title, subtitle, TitleComponent, sharingLinks,
}) => (
  <header className="page-header">
    <div className="page-header__inner">
      <div className="page-header__logo">
        <a href="https://www.holderdeord.no/portal">
          <HDOLogo />
        </a>
      </div>
      <div className="page-header__title">
        <TitleComponent title={title} />
        {subtitle && <span className="page-header__title__subtitle">{subtitle}</span>}
      </div>
      <div className="page-header__menu">
        <MainMenu sharingLinks={sharingLinks} />
      </div>
    </div>
  </header>
);
PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  TitleComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  sharingLinks: PropTypes.shape({
    facebookAppId: PropTypes.number.isRequired,
    shareText: PropTypes.string.isRequired,
  }),
};
PageHeader.defaultProps = {
  TitleComponent: Title,
  subtitle: '',
  sharingLinks: null,
};
export default PageHeader;
