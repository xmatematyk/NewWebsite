import React, { useEffect, useState } from "react";
import { MdWork, MdClose } from "react-icons/md"; // Importujemy ikonę zamknięcia
import NextImage from 'next/image';
import Title from "./Title";
import { motion } from "framer-motion";

interface Props {
  project: {
    id: number;
    title: string;
    img: { src: string };
    len: string;
    des: string;
    linkdc: string;
    linkhub: string;
  };
  isModalOpen: boolean;
  openModal: (id: number) => void;
  closeModal: () => void;
}

const ProjectCard = ({ project, isModalOpen, openModal, closeModal }: Props) => {
  const { id, title, img, len, des, linkdc, linkhub } = project;
  const [titleWidth, setTitleWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const titleElement = document.getElementById('projectTitle');
    if (titleElement) {
      setTitleWidth(titleElement.offsetWidth);
    }
  }, [title]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <div
        className={`w-full h-50 border-[1px] border-red-600 overflow-hidden relative rounded-lg group transform transition-transform duration-300 ${isHovered ? 'hover:scale-110' : ''}`}
        onClick={() => openModal(id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <NextImage
          className={"object-fill h-[15rem] w-full translate-y-0 transition-transform duration-[3s] z-i"}
          width={500}
          height={350}
          src={img.src} 
          alt="Feskyy"
        />
      </div>

      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed top-[3rem] left-0 w-full text-auto text-responsive  px-1 py-10 bg-black backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="p-4 rounded-lg w-[50rem] h-[90rem] px-10 py-5  overflow-auto"
            onClick={(e) => e.stopPropagation()} 
          >
            
            <div className="h-50 border-[1px] border-red-600 overflow-hidden relative rounded-lg group">
              <div className="relative h-[25rem] w-full overflow-hidden border-[1px] border-red-600 rounded-lg">
                
                <NextImage
                  className="object-fill h-[30rem] translate-y-0 transition-transform duration-[3s] z-i"
                  width={800}
                  height={478}
                  src={img.src}
                  alt="Feskyy"
                />
                <div className="absolute top-4 right-4  hover:bg-gray-500 bg-gray-400  rounded-lg cursor-pointer text-white" onClick={closeModal}>
              <MdClose size={24} />
            </div>
              </div>
            </div>
            <h1 className="text-white  font-bold text-3xl p-2 relative text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              {title}
              <div className="">
              <div className="wrapper absolute top-[-8.3rem] md:w-[25rem] left-[18rem]"></div></div>
            </h1>
            <h2 className="text-red-600 text-responsive  font-normal text-base top-[-0.5rem] left-[0.5rem] relative text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              {len} 
            </h2>
            <h2 className="pl-[0.5rem] text-responsive   text-[1rem] top-[-.5rem] relative text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              {des}
            </h2>
            <h1 className="text-white  font-bold text-3xl top-[1rem] pl-[0.5rem] md:top-[0.5rem] h-auto  pl-[0.5rem] relative">
              Linki
              <div className="wrapper top-[-8.8rem]  md:w-[40rem]  left-[6rem] absolute"></div>
              <h2 className="text-red-600 font-normal text-base md:top-[0.5rem]  relative">
                <a href={linkhub}>Github</a> • <a href={linkdc}>My Discord</a>
              </h2>
            </h1>
          </motion.div>
        </motion.div>
      )}

    </>
  );
};

export default ProjectCard;
