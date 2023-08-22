
import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react';
import styles from '../crousel.module.css'
import { ReactComponent as RightArrow } from '../../../Assets/RightArrow.svg';
const CrouselRightNavigation = () => {
    const swiper = useSwiper();
    const[isEnd ,setIsEnd]=useState(swiper.isEnd);
  useEffect(()=>{
    swiper.on("slideChange",()=>{
        setIsEnd(swiper.isEnd);
    })
  })
    return (
    <div className={styles.rightnavigation}>
      {!isEnd  && <RightArrow onClick={()=> swiper.slideNext()}/>}
    </div>
  )
}

export default CrouselRightNavigation
