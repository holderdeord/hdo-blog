import React from 'react';
import classnames from 'classnames';
import ScrollLock from 'react-scrolllock';

import IconBars from '../images/icon-bars.svg';
import IconTimes from '../images/icon-times.svg';

import HDOServices from './HDOServices';

export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
  }

  onClick = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  render() {
    const { hidden } = this.state;

    const triggerClasses = classnames('main-menu__trigger', { hidden: !hidden });
    const modalClasses = classnames('main-menu__modal', { hidden });

    return (
      <div className="main-menu">
        <button className={triggerClasses} type="button" onClick={this.onClick}>
          <IconBars aria-hidden={!hidden} />
        </button>
        <div
          id="main-menu"
          className={modalClasses}
          tabIndex="-1"
          role="dialog"
          aria-label="Main menu"
          aria-hidden={hidden}
        >
          {!hidden && <ScrollLock />}
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
            <nav className="main-menu__nav">
              <h2 className="hdo-nav-title">Holder de ord</h2>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link main-menu__nav-link"
                    href="https://www.holderdeord.no/portal/om-oss"
                  >
                    Om oss
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link main-menu__nav-link"
                    href="https://www.holderdeord.no/portal/stott-oss"
                  >
                    Støtt oss
                  </a>
                </li>
              </ul>
            </nav>
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
