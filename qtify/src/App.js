import { useEffect, useState } from "react";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import TopAlbumSection from "./component/section/TopAlbumSection";


const App =()=> {


  return (
    <>
    <Navbar/>
    <Hero/>
   <TopAlbumSection/>

    </>
  );
}

export default App;
