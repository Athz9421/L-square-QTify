import axios from 'axios';

export const BACKEND_ENDPOINT="https://qtify-backend-labs.crio.do";

export const  fetchTopAlbums= async ()=>{

try {
  const res= await axios.get(`${BACKEND_ENDPOINT}/albums/top`) ; 
  console.log("inside API.js");
    return res.data;
    
} catch (error) {
    console.error(error);
}


}
export const  fetchNewAlbums= async ()=>{

try {
  const res= await axios.get(`${BACKEND_ENDPOINT}/albums/new`) ; 
 
    return res.data;
    
} catch (error) {
    console.error(error);
}


}