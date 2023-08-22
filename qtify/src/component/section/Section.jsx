import React, { useState } from "react";
import styles from "./section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Crousel from "../Crousel/Crousel";

const Section = ({ title, data, type }) => {
    const [carouselToggle, setcarouselToggl] = useState(true);
    const handalToggle=()=>{
setcarouselToggl(!carouselToggle);

    }
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handalToggle}>{carouselToggle?"Show All" :"Collapes"}</h4>
      </div>
      {data.length == 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle? (  
           <div className={styles.wrapper}> {data.map((ele) => (
           <Card data={ele} type="album" key={ele.id} />
          ))}
          </div>
          )
          :<Crousel data={data} RenderCardCompoent={(data)=><Card data={data} type={type}  />}/>}
        </div>
      )}
    </div>
  );
};


export default Section;
