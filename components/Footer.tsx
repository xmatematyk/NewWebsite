import React from "react";
import { useLanguage } from "./LanguageContext"

interface Texts {
  name: string;
  about: string;
  aboutone: string;

}

const texts: Record<string, Texts> = {
  en: {
    name: 'All rights reserved.',
    about:
      "I am always open to discussing your project. I can help improve your Discord server - Of course, everything has its price.",
    aboutone:
      'Contact with me',
  },
  pl: {
    name: 'Wszelkie prawa zastrzeżone.',
    about:
      'Zawsze jestem otwarty na dyskusje na temat twojego projektu. Pomoge w ulepszeniu twojego serwera discord - Oczywiscie wszystko za swoją cene',
    aboutone:
      'Skontaktuj się'
  }
};


const Footer = () => {
  const { language } = useLanguage();
  return <p className="text-sm py-2">© 2024 cysk {texts[language].name}</p>;
};

export default Footer;
