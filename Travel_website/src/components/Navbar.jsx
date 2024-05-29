import React,{useState} from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaInstagram,FaTwitter, FaYoutube } from "react-icons/fa";
import {Link} from 'react-router-dom'

const Navbar=()=>{
    const [nav,setNav]=useState(false);
    const[logo,setLogo]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
        setLogo(!logo)
    }
    return(
        <>
        <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
            <div>
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}><span className="text-sky-500">Go</span> Adventure</h1>
            
            </div>
            <div className="hidden md:flex ">
                <Link to='/' className="px-4">Home</Link>
                <Link to='/dest'className="px-4">Destination</Link>
                <Link>Packages</Link>
                </div>
                <div className="flex flex-row  ">
                    <p className="px-4">login</p>
                    <p>Register</p>
                </div>
         {/* <ul className="hidden md:flex">
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>Packages</li>
            <li>Book</li>
         </ul> */}
         <div className="hidden md:flex">
            <BsPerson size={30} className="mr-3"/>
            <BiSearch size={30}/>

         </div>
         <div onClick={handleNav} className="md:hidden z-10">
            {nav ? <AiOutlineClose size={20}/> : <HiOutlineMenuAlt4 size={20}/>}
         </div >
         <div className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100 px-4 py-7 flex flex-col' :'absolute left-[-100%]' }>
            <ul>
            <h1>GO Adventure</h1>
            <li className="border-b">Home</li>
            <li className="border-b">Destination</li>
            <li className="border-b">Travel</li>
            <li className="border-b">Packages</li>
            <li className="border-b">Book</li>
            <div className="flex flex-col">
                <button className="my-6">Search</button>
                <button>Account</button>
            </div>
            <div className="flex justify-between my-6 ">
                <FaFacebook className="icon"/>
                <FaTwitter className="icon"/>
                <FaYoutube className="icon"/>
                <FaInstagram className="icon"/>
            </div>
            </ul>

         </div>
        </div>

      </>
    )
}


export default Navbar