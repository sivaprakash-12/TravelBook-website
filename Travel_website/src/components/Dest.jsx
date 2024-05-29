import React from "react";
import Maldives from '../assets/maldives.jpg'
import Fermin from '../assets/fermin-rodriguez-penelas-b8kEUZqMNoQ-unsplash.jpg'
import florence from '../assets/bailey-zindel-NRQV-hBF10M-unsplash.jpg'
import Robert from '../assets/robert-lukeman-_RBcxo9AU-U-unsplash.jpg'
import Pietro from '../assets/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg'




const Dest=()=>{
    return(
        <div className="max-w-[1240px] mx-auto py-16 px-4 text-center text-white">
            <h1>All-Inclusive Resorts</h1>
            <p className="py-4 font-semibold"> on the Advertising's Best</p>
            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                <img  className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Robert} alt="/" />
                <img  className="w-full h-full object-cover" src={Fermin} alt="/" />
                <img className="w-full h-full object-cover" src={Maldives} alt="" />
                <img className="w-full h-full object-cover" src={florence} alt="" />
                <img className="w-full h-full object-cover" src={Pietro} alt="" />
            </div>

        </div>
    )
}

export default Dest