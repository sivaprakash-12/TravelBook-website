import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import imgMon from "../assets/nat2.avif"
import Mesut from '../assets/mesut-kaya-eOcyhe5-9sQ-unsplash.jpg'
import Savvas from '../assets/savvas-kalimeris-hO3do8FKJkQ-unsplash.jpg'
import Luca from '../assets/luca-bravo-O453M2Liufs-unsplash.jpg'
import Soro from '../assets/soroush-karimi--_sqg5n-i54-unsplash.jpg'
import Thaj from '../assets/sylwia-bartyzel-eU4pipU_8HA-unsplash.jpg'
import Jere from '../assets/jeremy-bishop-_CFv3bntQlQ-unsplash.jpg'


const sliderData=[
    {
        url: Mesut
    },
    {
        url:Savvas
    },
    {
        url:Luca
    },
    {
      url:imgMon
    },
    {
      url:Soro
    },
    {
      url:Thaj
    },
    {
      url:Jere
    },
];
const Carousel = () => {
    const [slide, setSlide] = useState(0);
    const length = sliderData.length;
    // console.log(length)
  
    const prevSlide = () => {
      setSlide(slide === length - 1 ? 0 : slide + 1);
    };
    const nextSlide = () => {
      setSlide(slide === 0 ? length - 1 : slide - 1);
    };
  
    return (
      <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center itmes-center '>
        <BsArrowLeftSquareFill
          onClick={prevSlide}
          className='absolute top-[50%] text-3xl text-gray-800 cursor-pointer left-8'
        />
        <BsArrowRightSquareFill
          onClick={nextSlide}
          className='absolute top-[50%] text-3xl text-gray-800 cursor-pointer right-8'
        />
        {sliderData.map((item, index) => (
          <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
            {index === slide && (
              <img className='w-[1200px] h-[600px] object-cover rounded-md' src={item.url} alt='/' />
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default Carousel;
  

