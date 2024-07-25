import React from 'react'
import styles from './Snacks.module.css';
const Snacks = () => {
  return (
    <div id="snacks" className={styles.container}>
        <h1 className={styles.title}>Snacks</h1>
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img className={styles.sweet} src="/snacks/circle.png" alt="" />
                <h2>Crispy thin Manugupulu</h2>
            </div>
            <div className={styles.card}>
                <img className={styles.sweet} src="/snacks/smallcricle.png" alt="" />
                <h2>Chekodilu</h2>
            </div>
            <div className={styles.card}>
                <img className={styles.sweet} src="/snacks/madrasmixture.png" alt="" />
                <h2>Special Madras Mixture</h2>
            </div>
        </div>
    </div>
  )
}

export default Snacks