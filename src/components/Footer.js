import React from 'react';

export default class Footer extends React.PureComponent {
    render() {
        const {site} = this.props;
        return (
            <footer className="site-footer">
                <div className="container">
                    <h5>Holder de ord © 2014 - {new Date().getFullYear()}</h5>
                    <div>
                        <a href={site.siteUrl} title={site.title}>blog.holderdeord.no</a> ·
                        <a href={`https://twitter.com/${site.twitter}`} title={`${site.title} på Twitter`}>@{site.twitter}</a>
                    </div>
                </div>
            </footer>
        );
    }
}
