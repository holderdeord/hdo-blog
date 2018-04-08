import React from 'react';
import { Helmet } from "react-helmet";

export default class HeadMeta extends React.Component {
    /** Site meta for Faceebook, Twitter, etc
     * Ref: https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started
     * */
    render() {
        const { site, articleTitle} = this.props;
        const twitterMetas = {

        }
        const title = articleTitle ? `${articleTitle} · ${site.title}` : site.title;
        return <Helmet title={title} />;
    }
}
