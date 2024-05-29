import React from "react";
import { FaCopyright, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
      <div className="">
      <div className='w-full py-16 text-white bg-gray-900'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
          <div className='sm:flex text-center justify-between items-center'>
            <h1><span className="text-sky-500">Go</span> Adventure</h1>
            <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
              <FaFacebook className='icon'/>
              <FaTwitter className='icon' />
              <FaYoutube className='icon' />
              <FaInstagram className='icon' />
            </div>
          </div>
          <div className='flex justify-between'>
            <ul className='lg:flex'>
              <li>About</li>
              <li>Partnerships</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Advertising</li>
            </ul>
            </div>
            <div>
              <p className="flex flex-row font-semibold "><FaCopyright className="icon"/><span className="px-2">Goadventure.com</span></p>
            </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default Footer;
  