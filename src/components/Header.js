import React from 'react';
// import Link from 'gatsby-link';
// import PropTypes from 'prop-types';

import PageHeader from './PageHeader';

export default class Header extends React.PureComponent {
  render() {
    // const { site } = this.props;
    //     return (
    //       <h1>
    //         <Link to="/">{site.title}</Link>
    //       </h1>
    //     );
    // TODO: Pass in Link component
    return <PageHeader title="Blogg" />;
  }
}

// Header.propTypes = {
//   site: PropTypes.shape({}).isRequired,
// };
