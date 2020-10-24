import React from 'react';
import Header from '../header/header.component';
import Menu from '../menu/menu.component';
import ProfileCard from '../profile-card/profile-card.component';
import styles from './contact.module.scss';

export default function Contact() {
  const profiles = [
    {
      image: '/images/andrea.jpg',
      email: 'andrea@housestohomesresidential.com',
      name: 'Andrea Sunada',
      role: 'Founding Partner',
      phone: '(503) 410-1829',
    },
    {
      image: '/images/andrew.jpg',
      email: 'andrew@housestohomesresidential.com',
      name: 'Andrew Sunada',
      role: 'Founding Partner',
      phone: '(503) 475-9019',
    },
  ];
  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <h2 className={styles.header}>Contact Info</h2>
      <section className={styles.content}>
        {profiles.map((profile, i) => (
          <ProfileCard profile={profile} key={i} />
        ))}
      </section>
    </div>
  );
}
