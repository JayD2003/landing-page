import React from 'react'
import styles from './Contact.module.css';
import { stackTraceLimit } from 'postcss/lib/css-syntax-error';

const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.wrapper}>
          <h1 className={styles.title}>Contact Us      </h1>
          <div>
              <h2>
                  Looking to Contact Us or place a Bulk Order? Call to us <br />& we'll get back to you soonly!
              </h2>
              <h3>+91 1234567890</h3>
          </div>
        </div>
    </div>
  )
}

export default Contact