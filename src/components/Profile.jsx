import React from 'react';
import styles from '../css/Profile.module.css';

const Profile = ({ photo, title, bio }) => {
  return (
    <section className={styles.profile}>
      <div className={styles.container}>
        <img src={photo} alt="Profile" className={styles.photo} />
        <div className={styles.text}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.bio}>{bio}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
