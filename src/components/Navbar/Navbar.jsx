import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
        <img className={styles.logo} src="/logo.png" alt="" />
        <ul className={styles.list}>
          <li> 
            <a href="#sweets">Sweets</a>
            </li>
          <li>
            <a href="#chikkis">Bites & Chikkis</a>
            </li>
          <li>
            <a href="#snacks">Snacks</a>
            </li>
          <li>
            <a href="#contact">Bulk Orders</a>
            </li>
        </ul>
        <button>
          <a href="#contact">Contact Us</a>
          </button>
    </div>
    
  )
}

export default Navbar