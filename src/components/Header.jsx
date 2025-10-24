import { useEffect, useState } from 'react';
import styles from '../css/Header.module.css';

function Header({ name, message }) {
   const quotes = [
    "Believe you can and you're halfway there.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Success is not in what you have, but who you are.",
    "Dream big. Work hard. Stay humble."
  ]
    const [quote, setQuote] = useState('');
   const randomIndex=Math.floor(Math.random()* quotes.length)
 useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);
  
   

  return (
  <header className={styles.header}>
      <h1 className={styles.name}>Hi, I'm {name} 👋</h1>
      <p className={styles.message}>{message}</p>
      <p className={styles.quote}>"{quote}"</p>
    </header>
  );
}

export default Header;