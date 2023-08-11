import React from 'react'
import styles from './hero.module.css'
import HeroText from './HeroText'
import { ReactComponent as HeroImg } from '../../Assets/headphoneImg.svg'
const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <HeroText text1="100 Thousand Songs, ad-free" text2="Over thousands podcast episodes"/>
      <HeroImg/>
    </div>
  )
}

export default Hero
