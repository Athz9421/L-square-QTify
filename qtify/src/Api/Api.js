import axios from 'axios';

export const BACKEND_ENDPOINT="https://qtify-backend-labs.crio.do";

export const  fetchTopAlbums= async ()=>{

try {
  const res= await axios.get(`${BACKEND_ENDPOINT}/albums/top`) ; 

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
export const fetchSongs=async()=>{
  
try {
  const res= await axios.get(`${BACKEND_ENDPOINT}/songs`) ; 
 
    return res.data;
    
} catch (error) {
    console.error(error);
}


}
export const fetchCategory=async()=>{
  
try {
  const res= await axios.get(`${BACKEND_ENDPOINT}/genres`) ; 
 
    return res.data.data;
    
} catch (error) {
    console.error(error);
}


}


export const faqQuestions=[
  {
      question:"Is QTify free to use?",
      answer:"Yes! It is 100% free, and has 0% ads!"
  },
  {
      question:"Can I download and listen to songs offline?",
      answer:"Sorry, unfortunately we don't provide the service to download any songs."
  }
]