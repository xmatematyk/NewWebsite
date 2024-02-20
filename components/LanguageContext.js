// LanguageContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      const storedLanguage = localStorage.getItem('language');
      return storedLanguage ? storedLanguage : 'pl'; 
    } else {
      return 'pl'; // Fallback in case localStorage is not available
    }
  });

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('language', newLanguage); 
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
