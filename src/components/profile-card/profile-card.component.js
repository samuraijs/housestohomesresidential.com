import React from 'react';
import styles from './profile-card.module.scss';

export default function ProfileCard({ profile }) {
  const { image, email, name, role, phone } = profile;
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt="Profile" />
      <section className={styles.info}>
        <span className={styles.arrow}></span>
        <p className={styles.title}>{name}</p>
        <p className={styles.subtitle}>{role}</p>
        <p className={styles['info-primary']}>{phone}</p>
        <p className={styles['info-secondary']}>
          https://housestohomesresidential.com
        </p>
        <p className={styles['info-tertiary']}>{email}</p>
      </section>
    </div>
  );
}
