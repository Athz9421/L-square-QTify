import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import styles from './crousel.module.css';
import CrouselLeftNavigation from './CrouselLeftNavigation/CrouselLeftNavigation';
import CrouselRightNavigation from './CrouselRightNavigation/CrouselRightNavigation';

const Controls=({data})=>{
const swiper = useSwiper();
useEffect(()=>{
  swiper.slideTo(0,500);
},[data])
return <></>
}

const Crousel = ({data,RenderCardCompoent}) => {
  return (
    <div className={styles.wrapper}>
      <Swiper initialSlide={0} modules={{Navigation} } slidesPerView={7} spaceBetween={40} allowTouchMove>
      <Controls data={data}/> 
      <CrouselLeftNavigation/>
      <CrouselRightNavigation/>
      {
        data.map((ele)=>(<SwiperSlide>{RenderCardCompoent(ele)}</SwiperSlide>))
      }
      </Swiper>
    </div>
  )
}

export default Crousel
