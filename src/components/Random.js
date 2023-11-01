import React, { useEffect, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
 

const Random = () => {

    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
    // const[gif , setGif]= useState("")
    // const [loading ,setLoading] = useState('false');   

    // async function fetchData(){
    // setLoading(true)
    // const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    // const {data} = await axios.get(url);
    // // console.log(ans);
    // const imageSource = data.data.images.downsized_large.url;
    // setGif(imageSource);
    // setLoading(false)

    // }

    // useEffect(() =>{
    //  fetchData();
    // },[])

    const {gif , loading ,fetchData} = useGif();

    function clickHandler(tag){
     console.log("click ho chuka hai")
     fetchData();
    }

  return (
    <div className='w-1/2   bg-green-500
     rounded-lg border border-black flex flex-col items-center mt[15px] gap-y-5'>

       <h1 className='mt-[15px] text-2xl underline  uppercase font-bold'>A Random Gif</h1>

       {
        loading ? (<Spinner/>) : ( <img src={gif}/>)
       }

          {/* <img src={gif}/>  */}
      

       <button onClick={clickHandler}
       className='w-10/12 bg-yellow-500  mb-[15px] rounded-lg font-semibold py-2 '>Generate</button>
    </div>
  )
} 

export default Random
