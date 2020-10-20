import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header/header.component';
import styles from './home.module.scss';

export default function Home() {
  const whoareweRef = useRef(null);
  const servicesRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (location.hash !== '') {
      if (location.hash === '#whoarewe') {
        whoareweRef.current.scrollIntoView();
      } else if (location.hash === '#services') {
        servicesRef.current.scrollIntoView();
      }
    }
  });

  return (
    <div className={styles.container}>
      <section className={styles.fold}>
        <Header />
        <aside className={styles.contact}>
          <p>Begin your Design</p>
          <a
            className={styles['contact-link']}
            href="mailto:andrea@housestohomesresidential.com"
          >
            andrea@housestohomesresidential.com
          </a>
          <a className={styles['contact-link']} href="tel:(503) 410-1829">
            (503) 410-1829
          </a>
        </aside>
        <span className={styles.arrow}></span>
      </section>
      <section className={styles.content}>
        <div className={styles.area}>
          <h2 className={styles.title} id="whoweare" ref={whoareweRef}>
            Who are we
          </h2>
          <p className={styles.description}>
            At Houses to Homes PNW LLC, our passion work is actualizing the
            transformations of buildings into a space that is unique and feels
            like home. We specialize in renovation and design consulting of
            residential homes.
          </p>
        </div>
        <div className={styles.area}>
          <h2 className={styles.title} id="services" ref={servicesRef}>
            Our Services
          </h2>
          <div className={styles.blurb}>
            <label className={styles.label}>Hourly Consulting</label>
            <p className={styles['blurb-content']}>
              "I just need to run through some ideas."
            </p>
          </div>
          <div className={styles.blurb}>
            <label className={styles.label}>Design Project</label>
            <p className={styles['blurb-content']}>
              "I have a team of contractors, I need someone to work with me to
              pull it together."
            </p>
          </div>
          <div className={styles.blurb}>
            <label className={styles.label}>Design & Manage Project</label>
            <p className={styles['blurb-content']}>
              "I want you to do it all; I have no idea where to start"
            </p>
          </div>
        </div>
      </section>
      <footer className={styles.footer}></footer>
    </div>
  );
}
