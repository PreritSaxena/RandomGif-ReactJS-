import React, { useEffect, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import axios from 'axios';
import Spinner from './Spinner';
 import useGif from '../hooks/useGif'

const Tags = () => {

    const [tag, setTag] = useState("");
    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
    // const[gif , setGif]= useState("")
    // const [loading ,setLoading] = useState('false');    

    // async function fetchData(){
    // setLoading(true)
    // const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    // const {data} = await axios.get(url);
    // // console.log(ans);
    // const imageSource = data.data.images.downsized_large.url;
    // setGif(imageSource);
    // setLoading(false)

    // }

    // useEffect(() =>{
    //  fetchData();
    // },[])

    const {gif , loading ,fetchData} = useGif(tag);

    function clickHandler(tag){
     console.log("click ho chuka hai")
     fetchData();
    }

    function changeHandler(event){
        setTag(event.target.value);
    }

  return (
    <div className='w-1/2  bg-blue-500
     rounded-lg border border-black flex flex-col items-center mt[15px] gap-y-5'>

       <h1 className='mt-[15px] text-2xl underline  uppercase font-bold'>Random {tag} Gif</h1>

       {
        loading ? (<Spinner/>) : ( <img src={gif}/>)
       }
      
      <input 
      type="text" className='w-10/12  mb-[2px] rounded-lg font-semibold py-2 text-center'
      onChange={changeHandler}
      value={tag}
       
      />
       <button onClick={clickHandler}
       className='w-10/12 bg-yellow-500  mb-[15px] rounded-lg font-semibold py-2 '>Generate</button>
    </div>
  )
} 

export default Tags
