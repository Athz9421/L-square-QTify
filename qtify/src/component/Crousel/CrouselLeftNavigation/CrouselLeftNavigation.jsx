import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react';
import styles from '../crousel.module.css'
import { ReactComponent as LeftArrow } from '../../../Assets/LeftArrow.svg';
const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning,setIsBeginning] = useState(swiper.isBeginning);
 
    useEffect(()=>{
        swiper.on("slideChange",()=>{
          
            setIsBeginning(swiper.isBeginning)
        })
    })
  return (
    <div className={styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={()=> swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNavigation