import React from 'react';
import PropTypes from 'prop-types';
import Disqus from 'disqus-react';
import siteMetadata from '../siteMetadata';

const Comments = ({ post }) => {
  const shortname = siteMetadata.disqusShortname;
  const url = `${siteMetadata.siteUrl}${post.fields.slug}`;
  const disqusConfig = {
    url,
    identifier: url,
    title: post.fields.title,
  };
  return <Disqus.DiscussionEmbed shortname={shortname} config={disqusConfig} />;
};
Comments.propTypes = {
  post: PropTypes.shape({}).isRequired,
};
export default Comments;
