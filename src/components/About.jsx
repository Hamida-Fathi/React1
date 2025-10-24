import React, { useState } from 'react';
import styles from '../css/About.module.css';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>

      <p className={styles.intro}>
        Hi! I’m Hamida Fathi, a passionate Computer Programming student at George Brown College. 
        I’m currently learning JavaScript, React, and full-stack development to become a creative and skilled web developer.
      </p>

      <p className={styles.goals}>
        My goal is to design clean, user-friendly applications that make everyday life easier and more enjoyable.
      </p>

      <h3 className={styles.subheading}>Fun Facts & Hobbies</h3>
      <ul className={styles.list}>
        <li>I love going for peaceful morning walks in nature.</li>
        <li>I enjoy graphic design and creating visuals in Figma.</li>
        <li> I’m always exploring new technologies and coding tutorials.</li>
      </ul>

      
      {showMore && (
        <div className={styles.more}>
          <p>
            I’m especially interested in building restaurant order systems (POS and online ordering) 
            and improving user experiences through thoughtful design. 
            In the future, I hope to work as a full-stack developer and contribute to real-world projects 
            that help communities and small businesses grow.
          </p>
        </div>
      )}

      <button 
        className={styles.toggleBtn}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show Less ▲' : 'Show More ▼'}
      </button>
    </section>
  );
};

export default About;
