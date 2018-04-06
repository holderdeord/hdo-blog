import React from 'react';

export default class Footer extends React.PureComponent {
    render() {
        return (
            <footer className = "site-footer" >
                <div className = "container" >
                    <h5>Holder de ord © 2014 - {new Date().getFullYear()}</h5>
                    <div>
                        <a href="https://www.holderdeord.no/" title="Holder de ord">holderdeord.no</a> ·
                        <a href="https://twitter.com/holderdeord/" title="Holder de ord på Twitter">@holderdeord</a>
                    </div>
                </div>
            </footer>
        );
    }
}
