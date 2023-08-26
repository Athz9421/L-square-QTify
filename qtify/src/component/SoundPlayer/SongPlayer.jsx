import React from 'react'
import styles from './songPlayer.module.css'
import LinearDeterminate from './LinearProgress/LinearProgress'
import { ReactComponent as SongImg } from '../../Assets/songImg.svg'
import playButton from '../../Assets/playbutton.png'

const SongPlayer = () => {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.songWrapper}> 
        <SongImg/>
        <div>
            <p>Song Name</p>
            <p>ALbum name</p>
        </div>
        </div>
        <div className={styles.progressWrapper}>
            <img src={playButton} alt="" />
         <LinearDeterminate />
        </div>
   
    </div>
  )
}

export default SongPlayer
