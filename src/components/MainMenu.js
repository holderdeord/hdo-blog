import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ScrollLock from 'react-scrolllock';

import IconBars from '../images/icon-bars.svg';
import IconTimes from '../images/icon-times.svg';

import HDOServices from './HDOServices';
import GlobalNavigation from './GlobalNavigation';
import SharingLinks from './SharingLinks';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
  }

  onClick = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  render() {
    const { hidden } = this.state;
    const { sharingLinks } = this.props;

    const triggerClasses = classnames('main-menu__trigger', { hidden: !hidden });
    const modalClasses = classnames('main-menu__modal', { hidden });

    return (
      <div className="main-menu">
        {/* TODO: You are here. Add configurable sharing links */}
        {sharingLinks && <SharingLinks />}
        <button
          className={triggerClasses}
          type="button"
          onClick={this.onClick}
          aria-label="Open menu"
        >
          <IconBars aria-hidden={!hidden} />
        </button>
        <div
          id="main-menu"
          className={modalClasses}
          tabIndex="-1"
          role="dialog"
          aria-label="Main menu"
          aria-hidden={hidden}
          ref={el => {
            this.modalRef = el;
          }}
        >
          {!hidden && <ScrollLock touchScrollTarget={this.modalRef} />}
          <button
            type="button"
            className="close main-menu__modal-close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={this.onClick}
          >
            <IconTimes aria-hidden={hidden} />
          </button>
          <div className="main-menu__nav-wrap">
            <GlobalNavigation modal />
            <nav className="main-menu__nav">
              <h2 className="our-services-title">Våre tjenester</h2>
              <HDOServices />
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

MainMenu.defaultProps = {
  sharingLinks: null,
};

MainMenu.propTypes = {
  sharingLinks: PropTypes.shape({
    facebookAppId: PropTypes.number.isRequired,
    shareText: PropTypes.string.isRequired,
  }),
};

export default MainMenu;
