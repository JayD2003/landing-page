import React from 'react';
import styles from './Hero.module.css'
const Hero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Fresh, local, &<br />oh-so-delicious!</h1>
            <button className={styles.button}><a href="#sweets">Explore Now</a></button>
        </div>
    </div>
  )
}

export default Hero