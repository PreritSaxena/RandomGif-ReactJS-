import react from "react";
import Random from "./components/Random";
import Tags from "./components/Tags";

export default function App() {


  return (

     <div className="w-full flex flex-col background items-center">
      <h1 className= "  bg-white rounded-lg w-11/12 text-center mt-[40px] ml-[25px] mr-[25px] py-2 px-10 text-3xl font-bold mx-auto " >
        Random GIFS</h1>
        
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px] ">
        <Random/>
        <Tags/>
      </div>
     </div>
     
     );

}
