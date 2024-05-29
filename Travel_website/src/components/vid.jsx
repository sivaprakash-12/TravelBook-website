import React from "react";
// import beachVid from "../assets/beachVid.mp4"
import travel from '../assets/Travelvid.mp4'
import { AiOutlineSearch } from "react-icons/ai";


const BeachVid= ()=>{
    return(
        <div className="w-full h-screen relative">
            <video className="w-full h-full object-cover" src={travel} autoPlay loop muted></video>
            <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white">
                <h1 className="p-2">UP TO 60% OFF ADVENTURE TRAVEL</h1>
                <h2 className="p-2">Go AND ENJOY YOUR TRIP</h2>
                <h3 className="p-2">Get exclusive access to members only deals on</h3>
                <h3 className="p-2">amazing adventure holidays by email-it's free.</h3>
                <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90">
          <div>
            <input className="bg-transparent w-[300px] sm:w-[400px] font-sans focus:outline-none " type="text"  placeholder="Seach Destination" />
          </div>
          <div>
            <button>
                <AiOutlineSearch size={20} className="icon" style={{color:'#ffffff'}}/>
            </button>
          </div>
          </form>
            </div>
        </div>
    )
}


export default BeachVid