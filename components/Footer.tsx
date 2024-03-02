import React from "react";
import { useLanguage } from "./LanguageContext"

interface Texts {
  name: string;
  about: string;
  aboutone: string;
  abouttwo: string;
}

const texts: Record<string, Texts> = {
  en: {
    name: 'All rights reserved.',
    about:
      "I am always open to discussing your project. I can help improve your Discord server - Of course, everything has its price.",
    aboutone:
      'Contact with me',
    abouttwo:
      'Created by:',
  },
  pl: {
    name: 'Wszelkie prawa zastrzeżone.',
    about:
      'Zawsze jestem otwarty na dyskusje na temat twojego projektu. Pomoge w ulepszeniu twojego serwera discord - Oczywiscie wszystko za swoją cene',
    aboutone:
      'Skontaktuj się',
    abouttwo:
      'wykonanie:',
  }

};


const Footer = () => {
  const { language } = useLanguage();
  return (
    <p className="text-sm py-2 bg-gray-950 md:h-full h-[4rem]">
      © 2024 dehss {texts[language].name} <span className="" style={{ float: "right" }}>{texts[language].abouttwo}  <a href="" target="_blank">dehss </a></span>
    </p>
  );
};

export default Footer;
