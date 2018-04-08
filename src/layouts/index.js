import React from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';

import '../styles/hdo.scss';
import '../styles/syntax.scss'; // FIXME: Replace with remark thing
import Footer from '../components/Footer';
import Header from '../components/Header';

class Template extends React.Component {
  render() {
    const { children } = this.props;
    const site = get(this, 'props.data.site.siteMetadata');

    return (
      <div className="container">
        <Header location={this.props.location} site={site} />
        <main>{children()}</main>
        <Footer site={site} />
      </div>
    );
  }
}

export default Template;

// eslint-disable-next-line no-undef
export const templateQuery = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
        siteUrl
        twitter
      }
    }
  }
`;
Template.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.shape({}).isRequired,
};
