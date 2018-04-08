import React from 'react'

import '../styles/hdo.scss'
import Footer from "../components/Footer";
import Header from "../components/Header";
import get from "lodash/get";


class Template extends React.Component {
    render() {
        const { children } = this.props;
        const site = get(this, 'props.data.site.siteMetadata');

        return (
            <div className='container'>
                <Header location={this.props.location} />
                <main>
                    {children()}
                </main>
                <Footer site={site} />
            </div>

        )
    }
}

export default Template

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
