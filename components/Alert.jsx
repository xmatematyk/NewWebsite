import React, { useState, useEffect } from 'react';

const Alert = ({ message, onClose }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
      setIsOpen(false);
    };
  return (
    <div className="fixed top-0 right-[0.1rem] w-[20rem] md:h-[115rem] animate-slideIn flex items-center justify-center ">
      <div className="relative bg-black border border-black p-3 z-50 flex items-center">
        {/* SVG */}
        <svg viewBox="0 0 24 24" width="9%" height="100%" fill="yellow">
          <path d="M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-6 absolute top-0 right-[0.5rem] m-2"
          viewBox="0 0 20 20"
          fill="white"
          onClick={onClose}
          style={{ transform: 'translate(50%, -50%)' }}
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <div className="absolute bottom-[-0.05rem] left-[-0.05rem] h-1.5 bg-orange-600" style={{ width: '100%', animation: 'progressBarAnimation 2s linear forwards' }} />
        <div className="absolute bottom-[-0.05rem] left-[-0.05rem] h-1.5 bg-orange-500" style={{ width: '100%', opacity: '0.3' }} />
        
        <p className="text-white font-bold ml-2">{message}</p>
      </div>
    </div>
    
);


};


export default Alert;