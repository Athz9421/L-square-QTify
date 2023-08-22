import { useEffect, useState } from "react";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import TopAlbumSection from "./component/section/TopAlbumSection";
import MainAlbumSection from "./component/section/MainAlbumSection";
import Section from "./component/section/Section";
import styles from './app.module.css'
import { fetchNewAlbums, fetchTopAlbums } from "./Api/Api";


const App =()=> {

  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [NewAlbumsData, setNewAlbumsData] = useState([]);
  const generateTopAlbums = async () => {
    const data = await fetchTopAlbums();

    setTopAlbumsData(data);
  };
  const generateNewAlbums = async () => {
    const data = await fetchNewAlbums();

    setNewAlbumsData(data);
  };
  useEffect(() => {
    generateTopAlbums();
    generateNewAlbums();
  }, []);

  return (
    <>
    <Navbar/>
    <Hero/>
    <div className={styles.sectionWrapper}> 

<Section title="Top Albums" data={topAlbumsData} type="album" />
<Section title="New Albums" data={NewAlbumsData} type="album" />

    </div>

    </>
  );
}

export default App;
