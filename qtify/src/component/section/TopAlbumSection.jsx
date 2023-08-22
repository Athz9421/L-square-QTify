import React from "react";
import { fetchTopAlbums } from "../../Api/Api";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Grid } from "@mui/material";
import styles from "./topAlbumSection.module.css";
import { register } from 'swiper/element/bundle';

const TopAlbumSection = () => {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [carouselToggle, setcarouselToggl] = useState(true);
  const generateTopAlbums = async () => {
    const data = await fetchTopAlbums();

    setTopAlbumsData(data);
  };
  useEffect(() => {
    generateTopAlbums();
    register();
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <p>Top Albums</p>
        <p onClick={() => setcarouselToggl((prev) => !prev)}>
          {carouselToggle ? "Show All" : "carouselToggl"}
        </p>
      </div>
      {/* <div className={styles.buttons}>
          <button>Prev</button>    
          <button>Next</button>
        </div> */}
      {carouselToggle
        ? topAlbumsData.length > 0 && (
          <> 
         
          <swiper-container slides-per-view="7" speed="500" loop="true" css-mode="true"   mousewheel-force-to-axis="true">
        
              {topAlbumsData.map((ele) => {
                return (
                   <swiper-slide key={ele.id}>
                    <Card data={ele} type="album" key={ele.id} />
                  </swiper-slide>
                );
              })}
          
            </swiper-container>
            </>
          )
        : topAlbumsData.length > 0 && (
            <div className={styles.container}>
              {topAlbumsData.map((ele) => {
                return (
                  <div className={styles.items}>
                    <Card data={ele} type="album" key={ele.id} />
                  </div>
                );
              })}
            </div>
          )}
    </div>
  );
};

export default TopAlbumSection;
