import React from 'react';
import PropTypes from 'prop-types';

import '../styles/hdo.scss';
import '../styles/syntax.scss'; // FIXME: Replace with remark thing

import Footer from './Footer';
import Header from './Header';
import siteMetadata from '../siteMetadata';

const Layout = ({ children, location }) => (
  <div>
    <Header location={location} site={siteMetadata} />
    <div className="container">
      <main>{children}</main>
      <Footer site={siteMetadata} />
    </div>
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.shape({}).isRequired,
};
