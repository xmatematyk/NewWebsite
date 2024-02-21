"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa"
import { useLanguage } from "./LanguageContext"
import Kinny from "../public/KinnyZimmer.png"
import Many from "../public/many.png"
import Feskyy from "../public/Feskyy.png"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const texts = {
  en: {
    name: 'Customer',
    about:
      "The bot provided by olus proved to be extremely useful and revolutionized our Discord server. Thanks to it, the work of administrators has become much easier and more efficient. I am delighted with the functionality and professionalism of Cysk. I highly recommend his services to anyone looking for an excellent bot at the highest level!",
    aboutone:
      "When I first started communicating with olus, he seemed more introverted. However, after ordering a website from him, I completely changed my mind. He is understanding, patient, and executes everything according to the client's wishes. He can also provide helpful advice to ensure affordability and quality. I highly recommend him!",
    abouttwo:
      "olus provided us with a website connected to a Discord bot. Despite minor complications, he quickly fixed and improved them. The website is neat, beautiful, and user-friendly, while the bot operates flawlessly. His flexibility and readiness to address issues significantly facilitated the entire collaboration. I wholeheartedly recommend him!",
  },
  pl: {
    name: 'Klient',
    about:
      'Bot dostarczony przez Oliviera okazał się niezwykle przydatny i zrewolucjonizował nasz serwer Discord. Dzięki niemu praca administratorów stała się znacznie łatwiejsza i bardziej efektywna. Jestem zachwycony funkcjonalnością i profesjonalizmem Cyska. Gorąco polecam jego usługi wszystkim poszukującym doskonałego bota oraz na najwyższym poziomie!',
    aboutone:
      "Kiedy zaczałem pisac z  Olivierem, wydawało się, że jest on bardziej introwertyczny. Jednak po zamówieniu przeze mnie strony, całkowicie zmieniłem zdanie. Jest wyrozumiały, cierpliwy i wykonuje wszystko zgodnie z życzeniem klienta. Potrafi również udzielić przydatnych porad, aby było tanio i dobrze. Polecam go serdecznie!",
    abouttwo:
"Olivier dostarczył nam stronę internetową połączoną z botem na Discord. Mimo drobnych komplikacji szybko je naprawił i ulepszył. Strona jest schludna, ładna i przejrzysta, a bot działa bezbłędnie. Jego elastyczność i gotowość do rozwiązania problemów znacząco ułatwiły całą współpracę. Polecam go z całego serca!"  }
};

const TestimonialSlider = () => {
  const { language } = useLanguage();
  const testimonialSliderData = [
    {
      image: Kinny,
      name: 'KinnyZimmer_',
      position: texts[language].name,
      message: texts[language].about,
    },
    {
      image: Many,
      name: 'Hello Many',
      position: texts[language].name,
      message: texts[language].aboutone,
    },
    {
      image: Feskyy,
      name: 'Feskyy',
      position: texts[language].name,
      message: texts[language].abouttwo,
    },
  ];
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      loop={true}
      slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}

      navigation={{
        clickable: true,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className="md:h-[400px] h-[600px] "
    >
      {testimonialSliderData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col   relative items-center md:flex-row gap-x-8  h-full px-16 ">
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0 ">
              <div className="flex flex-col justify-center text-center ">
                <div className="mb-2 mx-auto  ">
                  <Image src={person.image} width={100} height={100} alt="" className='rounded-full' />
                </div>
                <div className="text-lg">{person.name}</div>
                <div className="text-[12px] uppercase font-extralight tracking-widest ">{person.position}</div>
              </div>
            </div>
            <div className=" flex-1 flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 ">
              <div className="mb-4 ">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"/>
              </div>
              <div className="xl:text-lg text-center sm:text-[1rem] h-full md:text-left ">{person.message}</div>
        
            </div>
          </div>
        </SwiperSlide>
        
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
