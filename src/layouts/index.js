import React from 'react';
import PropTypes from 'prop-types';

import '../styles/hdo.scss';
import '../styles/syntax.scss'; // FIXME: Replace with remark thing

import Footer from '../components/Footer';
import Header from '../components/Header';
import siteMetadata from '../siteMetadata';

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header location={this.props.location} site={siteMetadata} />
        <figure className="maingraphic">
          <img
            src="https://files.holderdeord.no/images/stortingssalen.jpg"
            alt="Illustrasjonsfoto: Stortingssalen"
          />
        </figure>
        <div className="container">
          <main>{children()}</main>
          <Footer site={siteMetadata} />
        </div>
      </div>
    );
  }
}

export default Template;

Template.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.shape({}).isRequired,
};
