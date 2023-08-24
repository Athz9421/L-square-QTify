import { useEffect, useLayoutEffect, useState } from "react";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import TopAlbumSection from "./component/section/TopAlbumSection";
import MainAlbumSection from "./component/section/MainAlbumSection";
import Section from "./component/section/Section";
import styles from './app.module.css'
import { fetchCategory, fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./Api/Api";


const App =()=> {

  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [NewAlbumsData, setNewAlbumsData] = useState([]);
  const [filteredDataValue, setfilteredData] = useState([]);
  const [value, setValue] = useState(0);
  const [songsData, setSongsData] = useState([]);
  const [genresData, setgenresData] = useState([]);

  const handleChange = (event, newValue) => {
   
    setValue(newValue);
  
  };
  
  
  const generateGenres = async () => {
    const data = await fetchCategory();

    setgenresData(data);
 
  };
 

const generateSongData=(value)=>{
let key;
console.log(value);
if(value===0){
  setfilteredData(songsData);
return;
}
else{
  key=genresData[value-1].key;
}
let filter= songsData.filter((ele)=>ele.genre.key===key);
setfilteredData(filter);


}
  const generateTopAlbums = async () => {
    const data = await fetchTopAlbums();

    setTopAlbumsData(data);
  };
  const generateNewAlbums = async () => {
    const data = await fetchNewAlbums();

    setNewAlbumsData(data);
  };
  const generateAllSongs = async () => {
    const data = await fetchSongs();
    setfilteredData(data);
    setSongsData(data);

  };

  useEffect(() => {
    generateTopAlbums();
    generateNewAlbums();
    generateAllSongs();
    generateGenres();
    
    
  }, []);

  useEffect(()=>{
    generateSongData(value);
  },[value]);
  
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className={styles.sectionWrapper}> 

<Section title="Top Albums" data={topAlbumsData} type="album" />
<Section title="New Albums" data={NewAlbumsData} type="album" />
<Section title="New Songss" data={filteredDataValue} type="song" value={value} handleChange={handleChange} genresData={genresData} />

    </div>

    </>
  );
}

export default App;
