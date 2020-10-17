import React, {useState} from 'react';
import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import styles from  './home.module.scss';

export default function Home() {
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
        {/* {!menuExpanded ? <FontAwesomeIcon className={styles['menu-icon']} icon={faBars} onClick={onMenuExpand}></FontAwesomeIcon> : ''}
          {menuExpanded ? <div className={styles['menu-overlay']}>
            <FontAwesomeIcon className={styles['menu-icon']} icon={faTimes} onClick={onMenuCollapse}></FontAwesomeIcon>
            <ul className={styles['menu-list']}>
              <li><Link className={styles['menu-link']} to="/contact">Contact Info</Link></li>
            </ul>
          </div> : ''} */}
        
        
        <aside className={styles.contact}>
          <p>Begin your Design</p>
          <a className={styles['contact-link']} href="mailto:andrea@housestohomesresidential.com">andrea@housestohomesresidential.com</a>
          <a className={styles['contact-link']} href="tel:(503) 410-1829">(503) 410-1829</a>
        </aside>
        <span className={styles.arrow}></span>
      </header>
      <section className={styles.content}>
        <div className={styles.area}>
          <h2 className={styles.title}>Who are we</h2>
          <p className={styles.description}>At Houses to Homes PNW LLC, our passion work is actualizing the transformations of buildings into a space that is unique and feels like home. We specialize in renovation and design consulting of residential homes. </p> 
        </div>
        <div className={styles.area}>
          <h2 className={styles.title}>Our Services</h2>
          <div className={styles.blurb}>
            <label className={styles.label}>Hourly Consulting</label>
            <p className={styles['blurb-content']}>"I just need to run through some ideas."</p>
          </div>
          <div className={styles.blurb}>
            <label className={styles.label}>Design Project</label>
            <p className={styles['blurb-content']}>"I have a team of contractors, I need someone to work with me to pull it together."</p>
          </div>
          <div className={styles.blurb}>
            <label className={styles.label}>Design & Manage Project</label>
            <p className={styles['blurb-content']}>"I want you to do it all; I have no idea where to start"</p>
          </div>
          
        </div>
      </section>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
