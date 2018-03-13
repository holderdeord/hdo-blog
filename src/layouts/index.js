import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import '../styles/hdo.scss'


class Template extends React.Component {
    render() {
        const { location, children } = this.props;
        let header;

        let rootPath = `/`;
        if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
            rootPath = __PATH_PREFIX__ + `/`
        }

        /* Home header */
        if (location.pathname === rootPath) {
            header = (
                <h1>
                    <Link
                        style={{
                            boxShadow: 'none',
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                        to={'/'}
                    >
                        Holder de ord
                    </Link>
                </h1>
            )
        } else {
            header = (
                <h3>
                    <Link
                        style={{
                            boxShadow: 'none',
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                        to={'/'}
                    >
                        Holder de ord
                    </Link>
                </h3>
            )
        }
        return (
            <div className='container'>
                {header}
                <main>
                    {children()}
                </main>
            </div>
        )
    }
}

export default Template
