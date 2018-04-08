import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

function rootPath() {
  /* eslint-disable no-undef */
  return typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__
    ? `${__PATH_PREFIX__}/`
    : '/';
  /* eslint-enable no-undef */
}

export default class Header extends React.PureComponent {
  render() {
    const { location, site } = this.props;
    /* Home header */
    if (location.pathname === rootPath()) {
      return (
        <h1>
          <Link to="/">{site.title}</Link>
        </h1>
      );
    }

    return (
      <h3>
        <Link to="/">{site.title}</Link>
      </h3>
    );
  }
}

Header.propTypes = {
  site: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
};
