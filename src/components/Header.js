import React from 'react';
import Link from 'gatsby-link'

export default class Header extends React.PureComponent {
    render() {
        const { location, site } = this.props;
        /* Home header */
        if (location.pathname === this.rootPath()) {
            return (
                <h1>
                    <Link to={'/'}>{site.title}</Link>
                </h1>
            );
        }

        return (
            <h3>
                <Link to={'/'}>{site.title}</Link>
            </h3>
        )
    }

    rootPath() {
        return typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__ ? __PATH_PREFIX__ + `/` : '/'
    }
}
