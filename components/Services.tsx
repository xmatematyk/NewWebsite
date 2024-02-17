import React from 'react'
import Title from "./Title"
import Slider from "@/components/Slider"
import { FaSearch } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";

const Recenzje = () => {
  return (
    <div className="text-center ">
        <div className="container mx-auto h-full py-32 flex flex-col justify-center">
            <h2 className='h2 mb-8 xl:mb-0'>
            <Title text="Moje usługi" icon={<FaMoneyBill  />}  />
            </h2>
            <div className="">
                <Slider /> 
            </div>
        </div>
        <div className="wrapper"></div>
    </div>
    
  )
}

export default Recenzje
