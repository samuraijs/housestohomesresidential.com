import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import styles from './menu.module.scss';

export default function Menu({ entry }) {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const onMenuExpand = () => {
    setMenuExpanded(true);
  };
  const onMenuCollapse = () => {
    setMenuExpanded(false);
  };
  const onLinkClicked = () => {
    onMenuCollapse();
  };
  const onWhoareweClicked = () => {
    onMenuCollapse();
  };
  const onServicesClicked = () => {
    onMenuCollapse();
  };
  const containerClass = () =>
    entry
      ? classNames([styles.container, styles.entry])
      : classNames([styles.container]);
  return (
    <div className={containerClass()}>
      {!menuExpanded ? (
        <FontAwesomeIcon
          className={styles['menu-icon']}
          icon={faBars}
          onClick={onMenuExpand}
        />
      ) : (
        <div className={styles['menu-overlay']}>
          <FontAwesomeIcon
            className={styles['menu-icon']}
            icon={faTimes}
            onClick={onMenuCollapse}
          ></FontAwesomeIcon>
          <ul className={styles['menu-list']}>
            <li className={styles['list-item']}>
              <Link
                className={styles['menu-link']}
                to="/"
                onClick={onLinkClicked}
              >
                Home
              </Link>
            </li>
            <li className={styles['list-item']}>
              <Link
                className={styles['menu-link']}
                to="/contact"
                onClick={onLinkClicked}
              >
                Contact Info
              </Link>
            </li>
            <li className={styles['list-item']}>
              <Link
                className={styles['menu-link']}
                to="/#whoarewe"
                onClick={onWhoareweClicked}
              >
                Who are we
              </Link>
            </li>
            <li className={styles['list-item']}>
              <Link
                className={styles['menu-link']}
                to="/#services"
                onClick={onServicesClicked}
              >
                Our Services
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
