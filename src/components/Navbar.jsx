import styles from '../css/Navbar.module.css';
import React from 'react';
const Navbar = () => {
    return ( 
         <nav className={styles.navbar}>
      
      <ul className={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

     );
}
 
export default Navbar;
