"use client"
import React, { useEffect } from 'react';
import { useState } from "react";
import Alert from './Alert.jsx'; 
import { useLanguage } from './LanguageContext.js';
import Image from "next/image"
import PolandSVG from "@/public/Poland.png";
import EnSVG from "@/public/En.png";
import useSmoothScrollToTarget  from "./SmoothScroll.jsx"
import { Link } from 'react-scroll';




export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertEn, setShowAlertEn] = useState(false);
    const [showAlertjestpl, setShowAlertjestpl] = useState(false);
    const [showAlertjesten, setShowAlertjesten] = useState(false);
    const { language, changeLanguage } = useLanguage(); 
    const [activeLanguage, setActiveLanguage] = useState(language)
    const [activeSection, setActiveSection] = useState('');
    
    const texts = {
      en: {
        name: "pl", 
        home: 'Home',
          about: 'About me',
          services: 'Services',
          skills: 'Skills',
          projects: 'My Projects',
          reviews: 'Reviews',
      },
      pl: {
        name: "en", 
        home: 'Home',
        about: 'O mnie',
        services: 'Moje usługi',
        skills: 'Umiejętności',
        projects: 'Projekty',
        reviews: 'Recenzje',
      },
    };
    
    const handleEnglishLanguageChange = () => {
        if (activeLanguage !== 'en') {
          changeLanguage('en');
          setActiveLanguage('en');
          setShowAlertEn(true); 
          setShowAlert(false); 
        } else {
          setShowAlertjesten(true);
          setShowAlertEn(false); 
          setShowAlert(false); 
        }
      };
      
      const handlePolishLanguageChange = () => {
        if (activeLanguage !== 'pl') {
          changeLanguage('pl');
          setActiveLanguage('pl');
          setShowAlert(true); 
          setShowAlertEn(false);
          setShowAlertjestpl(false);
        } else {
          setShowAlertjestpl(true);
          setShowAlertEn(false);
          setShowAlert(false);
        }
      };
    
    useEffect(() => {
        if (showAlert || showAlertEn || showAlertjestpl || showAlertjesten) {
            const timer = setTimeout(() => {
                setShowAlert(false);
                setShowAlertEn(false);
                setShowAlertjestpl(false);
                setShowAlertjesten(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showAlert, showAlertEn, showAlertjestpl, showAlertjesten]);
    useEffect(() => {
        if (navbar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [navbar]);
      const handlePanelClick = (event) => {
        event.preventDefault();
        setShowAlert(true);
    };

    const handlePanelClickEn = (event) => {
        event.preventDefault();
        setShowAlertEn(true);
    };
    
      const closeAlert = () => {
        setShowAlert(false);
        setShowAlertEn(false);
        setShowAlertjestpl(false);  
        setShowAlertjesten(false);
      };

    return (
        
        <nav className="w-full navbar bg-gray-950 shadow  ">
            <div className="justify-between px-8 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block"> 
                        <a href="">
                            <h2 className="text-2xl text-red-500 font-semibold">olus.pl</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                    
                        className={`flex-1 justify-self-center full-height-nav  pb-3 mt-8 md:block md:pb-0 md:mt-0   ${
                            navbar ? "block" : "hidden" 
                        }`}
                        
                    >
                        
                        <ul className="items-center justify-center  cursor-pointer space-y-8 md:flex md:space-x-6 md:left-[-14rem] relative md:space-y-0 full-width-ul">
                            <li className="text-white hover:text-red-500 transition-all duration-500 ">
                            <Link to="home" smooth={true} duration={700}>{texts[language].home}</Link>
                            </li>
                            <li className="text-white hover:text-red-500 transition-all duration-500">
                            <Link to="about" smooth={true} duration={700}>{texts[language].about}</Link>
                            </li>
                            <li className="text-white hover:text-red-500 transition-all duration-500">
                            <Link to="services" smooth={true} duration={700}>{texts[language].services}</Link>
                            </li>
                            <li className="text-white hover:text-red-500 transition-all duration-500">
                            <Link to="skills" smooth={true} duration={700}>{texts[language].skills}</Link>
                            </li>
                            <li className="text-white hover:text-red-500 cursor-pointer transition-all duration-500">
                            <Link to="projects" smooth={true} duration={700}>{texts[language].projects}</Link>
                            </li>
                            <li className="text-white hover:text-red-500 transition-all duration-500">
                            <Link to="reviews" smooth={true} duration={700}>{texts[language].reviews}</Link>
                            </li>
                            <div className="flex relative md:left-[30rem] sm:text-center  hover:text-orange-500">
                                <div className={`flex w-[3rem] h-[3rem] mr-5 rounded-lg overflow-hidden ${activeLanguage === 'pl' ? 'active transition-all duration-300' : ''}`} >
                                    <button className="p-0 bg-transparent hover:active border-none"  onClick={handlePolishLanguageChange} >
                                    <Image src={PolandSVG} alt="" className="w-[3rem] rounded-full h-[2rem]" onClick={() => {
                                        handlePanelClick(); 
                                    }}  />
                                    </button>
                                </div>
                                <div className={`flex rounded-full overflow-hidden  ${activeLanguage === 'en' ? 'active transition-all duration-300' : ''}`} >
                                    <button className="w-full h-full p-0 bg-transparent border-none" onClick={handleEnglishLanguageChange}>
                                    <Image src={EnSVG} alt="" className="w-[3rem] rounded-full h-[2rem]" onClick={handlePanelClickEn} />
                                    </button>
                                </div>
                                </div>
    
                        </ul>
                        {showAlert && (
                            <Alert message="Zmieniono Język na Polski" onClose={closeAlert}
                            />
                        )}
                        {showAlertEn && (
                            <Alert message="Changed Language to English" onClose={closeAlert}
                            />
                        )}
                        {showAlertjestpl && (
                            <Alert message="Ten język jest już ustawiony" onClose={closeAlert} 
                            />
                        )}
                        {showAlertjesten && (
                            <Alert message="This language is already set" onClose={closeAlert}
                            />     
                        )}

                        
                        

                    </div>
                </div>
            </div>
            {/* Overlay z rozmytym tłem */}
        {navbar && window.innerWidth <= 768 && (
    <div className="fixed  left-0 w-screen  backdrop-filter backdrop-blur-md z-50"></div>
    )}

            </nav>
    );
}
