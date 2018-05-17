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
      <div className="container">
        <Header location={this.props.location} site={siteMetadata} />
        <main>{children()}</main>
        <Footer site={siteMetadata} />
      </div>
    );
  }
}

export default Template;

Template.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.shape({}).isRequired,
};
