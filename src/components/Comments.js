import React from 'react';
import PropTypes from 'prop-types';
import ReactDisqusThread from 'react-disqus-thread';

export default class Comments extends React.Component {
  render() {
    const { shortname, url } = this.props;
    return <ReactDisqusThread shortname={shortname} url={url} />;
  }
}
Comments.propTypes = {
  shortname: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
