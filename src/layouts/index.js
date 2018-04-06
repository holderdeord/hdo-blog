import React from 'react'

import '../styles/hdo.scss'
import Footer from "../components/Footer";
import Header from "../components/Header";


class Template extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <div className='container'>
                <Header/>
                <main>
                    {children()}
                </main>
                <Footer/>
            </div>

        )
    }
}

export default Template
