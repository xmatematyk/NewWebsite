import React from 'react';
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
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

const texts = {
  en: {
    name: 'Customer',
    about:
      "Great bot and excellent cooperation! It improved our Discord server and made it easier for administrators to work. Highly recommended!",
    aboutone:
      "When I started talking to cysk, it seemed like he was more introverted. However, after ordering a website from him, I completely changed my mind. He is understanding, patient, and does everything according to the client's wishes. He can also provide useful advice to make it cheap and good. I highly recommend him!",
    abouttwo:
      "Cysk provided us with a dedicated website connected to a bot on the Discord platform. There were some minor complications, but Cysk immediately tried to fix and improve everything. As for the appearance of the website, it is neat, nice, and clear. As for the bot, it performed better than I expected - it works flawlessly and doesn't cause any problems. I am very satisfied with the services provided by Cysk. I recommend!",
  },
  pl: {
    name: 'Klient',
    about:
      'Świetny bot i znakomita współpraca! Usprawnił nasz serwer Discord oraz ułatwił pracę administratorom. Serdecznie polecam!',
    aboutone:
      "'Kiedy zaczałem pisac z  cysk-iem, wydawało się, że jest on bardziej introwertyczny. Jednak po zamówieniu przeze mnie strony, całkowicie zmieniłem zdanie. Jest wyrozumiały, cierpliwy i wykonuje wszystko zgodnie z życzeniem klienta. Potrafi również udzielić przydatnych porad, aby było tanio i dobrze. Polecam go serdecznie!",
    abouttwo:
      "Cysk dostarczył nam dedykowaną stronę internetową połączoną z botem na platformę Discord. Nie obyło się bez małych komplikacji, lecz Cysk od razu wszystko starał się naprawić i ulepszyć. Jeśli chodzi o wygląd strony, jest ona schludna, ładna oraz przejrzysta. Jeśli chodzi o bota, sprawdził się lepiej niż przypuszczałem - działa bezbłędnie i nie sprawia żadnych problemów. Jestem bardzo zadowolony z usług dostarczonych przez Cyska. Polecam!"
  }
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
      navigation
      pagination={{ clickable: true }}
      className="h-[400px]"
    >
      {testimonialSliderData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16 ">
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
              <div className="xl:text-lg text-center md:text-left ">{language === 'en' ? person.message : texts.pl.about}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
