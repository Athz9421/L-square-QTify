import React from 'react'
import styles from './card.module.css'
const Card = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
      <div className={styles.cardImg}> <img src="https://images.pexels.com/photos/8197559/pexels-photo-8197559.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" /> </div>
     <div className={styles.cardFollowers}> 100 followers</div>
      </div>
    <div className={styles.cardTitle}>New bollywood songs</div>
    </div>
  )
}

export default Card
