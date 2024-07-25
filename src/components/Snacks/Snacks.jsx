import React from 'react'
import styles from './Snacks.module.css';
const Snacks = () => {
  return (
    <div id="snacks" className={styles.container}>
        <h1 className={styles.title}>Bites & Chikkis</h1>
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img className={styles.sweet} src="/chikkis/coconutburfi.png" alt="" />
                <h2>Coconut Burfi</h2>
            </div>
            <div className={styles.card}>
                <img className={styles.sweet} src="/chikkis/dryfruit.png" alt="" />
                <h2>Dry Fruit Chikki</h2>
            </div>
            <div className={styles.card}>
                <img className={styles.sweet} src="/chikkis/groundnut.png" alt="" />
                <h2>Ground Nut Chikki</h2>
            </div>
            <div className={styles.card}>
                <img className={styles.sweet} src="/chikkis/sesame.png" alt="" />
                <h2>Sesame Chikki</h2>
            </div>
            <div className={styles.card}>
                <img className={styles.sweet} src="/chikkis/soanpapdi.png" alt="" />
                <h2>Soan Papdi</h2>
            </div>
        </div>
    </div>
  )
}

export default Snacks