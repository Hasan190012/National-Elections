import React from 'react'
import styles from './timer.module.scss';

const Time = ({ days, hours, minutes, seconds}) => {
  return (
    <>
        <h1>VOTING ENDS IN</h1>
    <div className={styles.time}>
        <div className={styles.digit_text}>
            <span className={styles.digit}>{days}:</span>
            <span className={styles.text}>Days</span>
        </div>
        <div className={styles.digit_text}>
            <span className={styles.digit}>{hours}:</span>
            <span className={styles.text}>Hours</span>
        </div>
        <div className={styles.digit_text}>
            <span className={styles.digit}>{minutes}:</span>
            <span className={styles.text}>Minutes</span>
        </div>
        <div className={styles.digit_text}>
            <span className={styles.digit}>{seconds}</span>
            <span className={styles.text}>Seconds</span>
        </div>
    </div>
    </>
  )
}

export default Time