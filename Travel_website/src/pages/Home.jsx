import React from "react";
import Navbar from "../components/Navbar";
import BeachVid from "../components/vid";
import Dest from "../components/Dest";
import Carousel from "../components/Carousel";
import Model from "../components/Model3";
import ParaPic from "../components/Pase4";


const Home=()=>{


    return(
        <> 
        <div>       
          
         <div className="bg-blue-400/75 "> 
        
        <BeachVid/> 
        <Dest/>  
        <Model/>
        <ParaPic/>
        <Carousel/>  
        </div> 
        </div>

     
      </>

    )
}

export default Home