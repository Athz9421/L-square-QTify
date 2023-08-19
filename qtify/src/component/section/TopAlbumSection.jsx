import React from "react";
import { fetchTopAlbums } from "../../Api/Api";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Grid } from "@mui/material";
import styles from "./topAlbumSection.module.css";

const TopAlbumSection = () => {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const generateTopAlbums = async () => {
    const data = await fetchTopAlbums();

    setTopAlbumsData(data);
  };
  useEffect(() => {
    generateTopAlbums();
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <p>Top Albums</p>
        <p>Collapes</p>
      </div>
      {topAlbumsData.length > 0 && (
        <div className={styles.container}>
          {topAlbumsData.map((ele) => {
            return(
              <div className={styles.items}><Card data={ele} type="album" key={ele.id} /></div>
    
            )
          })}
        </div>
      )}
    </div>
  );
};

export default TopAlbumSection;
