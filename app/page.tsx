"use client"
import { useState } from 'react';
import { useLanguage, LanguageProvider } from "@/components/LanguageContext"
import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Image from "next/image"
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Recenzje from "@/components/Recenzje";
import PolandSVG from "@/public/Poland.png";
import EnSVG from "@/public/En.png";
export default function Home() {
  return (
    <LanguageProvider> 
      <HomeContent />
    </LanguageProvider>
  );
}

function HomeContent() {
  const { language, changeLanguage } = useLanguage(); 
  const [activeLanguage, setActiveLanguage] = useState(language);
  interface Texts {
    name: string;
    
  }
  // Definiuj teksty w zależności od języka
  const texts: Record<string, Texts> = {
    en: {
      name: "pl", 
    },
    pl: {
      name: "en", 
    },
  };
  
  // Obsługa zmiany języka
  const handleEnglishLanguageChange = () => {
    if (activeLanguage !== 'en') {
      changeLanguage('en');
      setActiveLanguage('en');
    }
  };
  
  const handlePolishLanguageChange = () => {
    if (activeLanguage !== 'pl') {
      changeLanguage('pl'); 
      setActiveLanguage('pl');
    }
  };

  return (
    <main className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
      <div className="flex justify-start md:justify-end">
  <div className={`flex w-[3rem] h-[3rem] mr-5 rounded-lg overflow-hidden ${activeLanguage === 'pl' ? 'active transition-all duration-300' : ''}`}>
    <button className="p-0 bg-transparent hover:active border-none" onClick={handlePolishLanguageChange}>
      <Image src={PolandSVG} alt="" className="w-[3rem] rounded-full h-[2rem]" />
    </button>
  </div>
  <div className={`flex rounded-full overflow-hidden ${activeLanguage === 'en' ? 'active transition-all duration-300' : ''}`}>
    <button className="w-full h-full p-0 bg-transparent border-none" onClick={handleEnglishLanguageChange}>
      <Image src={EnSVG} alt="" className="w-[3rem] rounded-full h-[2rem]" />
    </button>
  </div>
</div>

        <Banner />
        <Aboutme />
        <Services />
        <Skills />
        <Projects />
        <Recenzje />
        <Contact />
        <Footer />
      </div>
    </main>
  );
  }  