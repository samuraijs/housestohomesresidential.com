import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.scss';

export default function Header() {
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
  return (
    <header className={styles.header}>
      <h1>Houses to Homes</h1>
      {!menuExpanded ? (
        <FontAwesomeIcon
          className={styles['menu-icon']}
          icon={faBars}
          onClick={onMenuExpand}
        ></FontAwesomeIcon>
      ) : (
        ''
      )}
      {menuExpanded ? (
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
      ) : (
        ''
      )}
    </header>
  );
}
