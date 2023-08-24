import React from "react";
import styles from "./card.module.css";
import {Chip,Tooltip} from '@mui/material';
const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title,songs } = data;
        return (
          <Tooltip  title={`${songs?.length} songs`} placement="top" arrow > 
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="img" />
              <div className={styles.banner}>
              <Chip label={`${follows} follows`} size="small" className={styles.chip} />
              </div>
            </div>
            <div className={styles.titlewrappe}>
              <p>{title}</p>
            </div>
          </div>
          </Tooltip>
        );
      }
case "song":{
const {image,title,likes}=data;
return(
  <div className={styles.wrapper}>
  <div className={styles.card}>
    <img src={image} alt="img" />
    <div className={styles.banner}>
    <Chip label={`${likes} likes`} size="small" className={styles.chip} />
    </div>
  </div>
  <div className={styles.titlewrappe}>
    <p>{title}</p>
  </div>
</div>
)  ;
}
default :
return <></>

    }
  };
  return getCard(type);
};

export default Card;
