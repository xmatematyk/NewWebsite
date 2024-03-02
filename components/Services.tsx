"use client"
import React from 'react'
import Title from "./Title"
import Slider from "@/components/Slider"
import { FaSearch } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { useLanguage } from "./LanguageContext"

interface Texts {
  name: string;
  about: string;
  aboutone: string;
  abouttwo: string;
  aboutthree: string;
}

const texts: Record<string, Texts> = {
  en: {
    name: 'My Services',
    about:
      "I create fast, automated Discord bots, improving server management and user interaction. My solutions are precisely tailored to the clients needs, ensuring efficient server organization. - This is also a thesis.",
    aboutone:
      "When creating websites, I prioritize their aesthetics and intuitive navigation while maintaining full functionality. Additionally, I possess skills in integrating websites with consoles via RCON, contributing to the comprehensive quality of projects. ",
    abouttwo:
      "I can ensure the security of your project by implementing comprehensive protective measures to ensure that it is safeguarded against unwanted actions in 99% of cases.",
    aboutthree:
      "I possess programming skills in Python and can create diverse applications tailored to your needs. With experience in multiple areas, I can provide functional and efficient solutions based on Python."
  },
  pl: {
    name: 'Moje usługi',
    about:
    "Tworzę szybkie, zautomatyzowane boty na Discorda, usprawniając zarządzanie serwerami i interakcję użytkowników. Moje rozwiązania są precyzyjnie dopasowane do potrzeb klientów, zapewniając efektywną organizację serwera.",
    aboutone:
    "Tworząc strony internetowe, stawiam nacisk na ich estetykę i intuicyjną nawigację, przy zachowaniu pełnej funkcjonalności. Dodatkowo, posiadam umiejętności integrowania witryn z konsolą poprzez RCON, co przyczynia się do kompleksowej jakości projektów.",
    abouttwo:
    "Mogę zadbać o twój projekt pod kątem bezpieczeństwa, wdrażając kompleksowe środki ochronne, aby zapewnić, że będzie on chroniony przed niepożądanymi działaniami w 99% przypadków.",
    aboutthree:
    "Posiadam umiejętności programowania w Pythonie i mogę tworzyć różnorodne aplikacje dostosowane do Twoich potrzeb. Z doświadczeniem w wielu obszarach, mogę zapewnić funkcjonalne i efektywne rozwiązania oparte na Pythonie."
  }
};


const Recenzje = () => {
  const { language } = useLanguage();
  return (
    <div className="text-center ">
        <div className="container mx-auto h-full  flex flex-col justify-center"  id="services">
            <h2 className='h2 mb-8 xl:mb-[60px] py-12 ' >
            <Title text={texts[language].name} icon={<FaMoneyBill  />}  />
            </h2>
            <div className="xl:top-[0rem] xl:relative">
                <Slider /> 
            </div>
        </div>
        <div className="wrapper"></div>
    </div>
    
  )
}

export default Recenzje
