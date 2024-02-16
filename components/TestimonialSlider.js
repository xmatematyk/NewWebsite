import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import Image from "next/image";
import Avatar from "../public/t-avt-1.png"
import Kinny from "../public/KinnyZimmer.png"
import Many from "../public/many.png"
import Feskyy from "../public/Feskyy.png"
const testimonialSliderData = [
  {
    image: Kinny,
    name: 'KinnyZimmer_',
    position: 'Klient',
    message:
      'Świetny bot i znakomita współpraca! Usprawnił nasz serwer Discord oraz ułatwił pracę administratorom. Serdecznie polecam!',
  },
  {
    image: Many,
    name: 'Hello Many',
    position: 'Klient',
    message:
      'Kiedy zaczałem pisac z  cysk-iem, wydawało się, że jest on bardziej introwertyczny. Jednak po zamówieniu przeze mnie strony, całkowicie zmieniłem zdanie. Jest wyrozumiały, cierpliwy i wykonuje wszystko zgodnie z życzeniem klienta. Potrafi również udzielić przydatnych porad, aby było tanio i dobrze. Polecam go serdecznie!',
  },
  {
    image: Feskyy,
    name: 'Feskyy',
    position: 'Klient',
    message:
      'Cysk dostarczył nam dedykowaną stronę internetową połączoną z botem na platformę Discord. Nie obyło się bez małych komplikacji, lecz Cysk od razu wszystko starał się naprawić i ulepszyć. Jeśli chodzi o wygląd strony, jest ona schludna, ładna oraz przejrzysta. Jeśli chodzi o bota, sprawdził się lepiej niż przypuszczałem - działa bezbłędnie i nie sprawia żadnych problemów. Jestem bardzo zadowolony z usług dostarczonych przez Cyska. Polecam!',
  },
];
import { Pagination, Navigation } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa"

const TestimonialSlider = () => {
    return (
        <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
            className="h-[400px]"
        >
            {testimonialSliderData.map((person, index) => (
                <SwiperSlide key={index}>
                  
                    <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16 ">
                      {/* avatar, name, position */}
                      <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0 ">
                        <div className="flex flex-col justify-center text-center ">
                          {/* avatar */}
                          <div className="mb-2 mx-auto  ">
                            <Image src={person.image} width={100} height={100} alt="" className='rounded-full' />
                          </div>
                          {/* name */}
                          <div className="text-lg">{person.name}</div>
                          {/* position */}
                          <div className="text-[12px] uppercase font-extralight tracking-widest ">{person.position}</div>
                        </div>
                      </div>
                      <div className=" flex-1 flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 ">
                      <div className="mb-4 ">
                        <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"/>
                      </div>
                      <div className="xl:text-lg text-center md:text-left ">{person.message}</div>
                    </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default TestimonialSlider;
