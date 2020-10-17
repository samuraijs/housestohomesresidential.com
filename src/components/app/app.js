import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import styles from  './app.module.scss';

function App() {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const onMenuExpand = () => {
    setMenuExpanded(true);
  };
  const onMenuCollapse = () => {
    setMenuExpanded(false);
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Houses to Homes</h1>
        {!menuExpanded ? <FontAwesomeIcon className={styles['menu-icon']} icon={faBars} onClick={onMenuExpand}></FontAwesomeIcon> : ''}
          {menuExpanded ? <div className={styles['menu-overlay']}>
            <FontAwesomeIcon className={styles['menu-icon']} icon={faTimes} onClick={onMenuCollapse}></FontAwesomeIcon>
            <ul className={styles['menu-list']}>
              <li><a className={styles['menu-link']} href="/contact">Contact Info</a></li>
            </ul>
          </div> : ''}
        
        
        <aside className={styles.contact}>
          <p>Begin your Design</p>
          <a className={styles['contact-link']} href="mailto:andrea@housestohomesresidential.com">andrea@housestohomesresidential.com</a>
          <a className={styles['contact-link']} href="tel:(503) 410-1829">(503) 410-1829</a>
        </aside>
        <span className={styles.arrow}></span>
      </header>
      <section className={styles.content}>
        <h2 className={styles.title}>Who are we</h2>
        <p className={styles.description}>This is our story</p> 
      </section>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}

export default App;
