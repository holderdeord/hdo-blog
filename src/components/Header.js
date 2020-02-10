import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import PageHeader from './PageHeader';

export default class Header extends React.PureComponent {
  render() {
    const { site } = this.props;
    // TODO: Get post title into shareText
    const sharingLinks = { facebookAppId: site.facebookAppId, shareText: site.subtitle };
    const titleComponent = (props) => (
      <Link to="/">
        <h1>{props.title}</h1>
      </Link>
    );

    return (
      <PageHeader
        title="Blogg"
        subtitle={site.subtitle}
        TitleComponent={titleComponent}
        sharingLinks={sharingLinks}
      />
    );
  }
}

Header.propTypes = {
  site: PropTypes.shape({}).isRequired,
};
