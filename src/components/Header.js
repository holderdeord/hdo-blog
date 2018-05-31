import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import PageHeader from './PageHeader';

export default class Header extends React.PureComponent {
  render() {
    const { site } = this.props;
    const titleComponent = props => (
      <Link to="/">
        <h1>{props.title}</h1>
      </Link>
    );

    return <PageHeader title="Blogg" subtitle={site.subtitle} TitleComponent={titleComponent} />;
  }
}

Header.propTypes = {
  site: PropTypes.shape({}).isRequired,
};
