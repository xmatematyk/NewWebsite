"use client"
import React from 'react'
import Title from "./Title"
import TestimonialSlider from "@/components/TestimonialSlider"
import { FaSearch } from "react-icons/fa";
import { useLanguage } from "./LanguageContext"

interface Texts {
  name: string;
  about: string;
}

const texts: Record<string, Texts> = {
  en: {
    name: 'Reviews',
    about:
      "Olivier (also known as cysk or olus), 16 years old. Currently in the 2nd grade of a technical high school with a focus on programming. Passionate about creating bots for the Discord platform and websites. Enjoys playing games like Valorant, Fortnite, and Minecraft (using BlazingPack). Interested in graphic design, creating logos, and various types of graphics. Noteworthy traits include creativity, dedication to self-improvement, and active involvement in projects.",
  },
  pl: {
    name: 'Recenzje',
    about:
      'Olivier (aka. cysk, olus), 16-lat. Klasa 2 o profilu technik - programista. Pasjonat tworzenia botów na platformę Discord oraz stron internetowych. Gram w gry jak Valorant, Fortnite, Minecraft (BlazingPack). Zainteresowany grafiką, tworzę loga i różnego rodzaju grafiki. Moją cechą wartą uwagi jest przede wszystkim kreatywność jak i zaangażowanie w samorozwój iraz projekty w których biorę udział.',
  }
};

const Recenzje = () => {
  const { language } = useLanguage();
  return (
    <div className="text-center   " id="reviews">
        <div className="container  mx-auto  py-10 flex flex-col justify-center">
            <h2 className='h2 top-[5rem]  relative mb-0 xl:mb-0'>
            <Title text={texts[language].name} icon={<FaSearch />}  />
            </h2>
            <div className="">
                <TestimonialSlider /> 
            </div>
        </div>
       
    </div>
    
  )
}

export default Recenzje
