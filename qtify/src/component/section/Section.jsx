import React, { useState } from "react";
import styles from "./section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Crousel from "../Crousel/Crousel";
import BasicTabs from "../BasicTabsMUI/BasicTabs";

const Section = ({ title, data, type ,handleChange,value,genresData}) => {
    const [carouselToggle, setcarouselToggl] = useState(true);
    const handalToggle=()=>{
setcarouselToggl(!carouselToggle);

    }
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
         <h4 className={styles.toggleText} onClick={handalToggle}>{type!=="song" && (carouselToggle?"Show All" :"Collapes")}</h4>
      </div>
      {type==="song" && <BasicTabs handleChange={handleChange} value={value} genresData={genresData}/>}
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
