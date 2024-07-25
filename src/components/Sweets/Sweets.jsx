import React from 'react'
import styles from './Sweets.module.css';
const Sweets = () => {
  return (
    <div id="sweets" className={styles.container}>
        <h1 className={styles.title}>Authentic South Indian Sweets😋</h1>
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img className={styles.sweet} src="/sweets/mysorepak.webp" alt="" />
                <h2>Mysore Pak</h2>
            </div>
            <div className={styles.card}>
                <img className={styles.sweet} src="/sweets/athirasam.png" alt="" />
                <h2>Athirasam</h2>
            </div>
            <div className={styles.card}>
                <img className={styles.sweet} src="/sweets/doodpeda.png" alt="" />
                <h2>Dood Peda</h2>
            </div>
            <div className={styles.card}>
                <img className={styles.sweet} src="/sweets/pootharekulu.png" alt="" />
                <h2>Pootharekulu</h2>
            </div>
            <div className={styles.card}>
                <img className={styles.sweet} src="/sweets/kajukatli.png" alt="" />
                <h2>Kaju Katli</h2>
            </div>
            <div className={styles.card}>
                <img className={styles.sweet} src="/sweets/kova.png" alt="" />
                <h2>Kova</h2>
            </div>
        </div>
    </div>
  )
}

export default Sweets