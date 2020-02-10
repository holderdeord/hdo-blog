/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconTwitterSquare from '../images/icon-twitter-square.svg';
import IconFacebookSquare from '../images/icon-facebook-square.svg';

function open(url, title) {
  const w = 600;
  const h = 400;

  /* Center window */
  const left = window.screen.width / 2 - w / 2;
  const top = window.screen.height / 2 - h / 2;

  window.open(url, title, `width=${w},height=${h},left=${left},top=${top},toolbar=0,menubar=0`);
}

function getUrl() {
  return encodeURIComponent(window.location.toString());
}

class SharingLinks extends Component {
  handleFacebookShare = (event) => {
    event.preventDefault();

    const { facebookAppId } = this.props;

    const shareUrl = `https://www.facebook.com/dialog/share
                               ?app_id=${facebookAppId}
                               &display=popup
                               &redirect_uri=${getUrl()}
                               &href=${getUrl()}`.replace(/\s+/g, '');

    open(shareUrl, 'Facebook');
  };

  handleTwitterShare = (event) => {
    event.preventDefault();

    const { shareText } = this.props;

    const shareUrl = `https://twitter.com/intent/tweet
                            ?text=${encodeURIComponent(shareText)}
                            &url=${getUrl()}
                            &via=holderdeord`.replace(/\s+/g, '');

    open(shareUrl, 'Twitter');
  };

  render() {
    return (
      <div className="sharing-links">
        <span>
          <a href="#" onClick={this.handleFacebookShare} title="Del på Facebook">
            <IconFacebookSquare />
          </a>
        </span>

        <span>
          <a href="#" onClick={this.handleTwitterShare} title="Del på Twitter">
            <IconTwitterSquare />
          </a>
        </span>
      </div>
    );
  }
}

SharingLinks.propTypes = {
  facebookAppId: PropTypes.number.isRequired,
  shareText: PropTypes.string.isRequired,
};

export default SharingLinks;
