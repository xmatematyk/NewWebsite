import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import Discord from "../public/discord-logo.svg"
import { Pagination, Navigation } from 'swiper/modules';
const serviceData = [
    {
      icon: <RxDiscordLogo />,
      title: 'Boty Discord',
      description: 'Tworzę szybkie, zautomatyzowane boty na Discorda, usprawniając zarządzanie serwerami i interakcję użytkowników. Moje rozwiązania są precyzyjnie dopasowane do potrzeb klientów, zapewniając efektywną organizację serwera.',
    },
    {
      icon: <RxGlobe />,
      title: 'Strony internetowe',
      description: 'Tworząc strony internetowe, stawiam nacisk na ich estetykę i intuicyjną nawigację, przy zachowaniu pełnej funkcjonalności. Dodatkowo, posiadam umiejętności integrowania witryn z konsolą poprzez RCON, co przyczynia się do kompleksowej jakości projektów.',
    },
    {
      icon: <GiPadlock />,
      title: 'Bezpieczenstwo',
      description: 'Mogę zadbać o twój projekt pod kątem bezpieczeństwa, wdrażając kompleksowe środki ochronne, aby zapewnić, że będzie on chroniony przed niepożądanymi działaniami w 99% przypadków.',
    },
    {
        icon: <MdOutlineSettingsApplications />,
        title: "Aplikacje / programy",
        description: "Posiadam umiejętności programowania w Pythonie i mogę tworzyć różnorodne aplikacje dostosowane do Twoich potrzeb. Z doświadczeniem w wielu obszarach, mogę zapewnić funkcjonalne i efektywne rozwiązania oparte na Pythonie."
    }
  ];
  import { MdOutlineSettingsApplications } from "react-icons/md";
  import { GiPadlock } from "react-icons/gi";
import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxGlobe,
    RxRocket,
    RxArrowTopRight,
    RxDiscordLogo,
} from  'react-icons/rx'

const ServiceSlider = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                }
            }}
            pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
                  className="md:h-[400px] h-[590px] "
              
        >
            {serviceData.map((item, index) => {
                return <SwiperSlide key={index}>
                    <div className="bg-gray-950 md:h-max rounded-lg px-6 py-8 flex sm:flex-col gap-y-4 gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                        <div className="text-4xl text-white  mb-4">{item.icon}</div>
                        <div className="mb-8">
                            <div className="mb-2 text-lg">{item.title}</div>
                            <p className=" leading-normal  text-center">{item.description}</p>
                        </div>
                        <div className="text-3xl">
                            <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-white transition-all duration-300" />
                        </div>
                    </div>
                </SwiperSlide>
            })}
        </Swiper>
    )
}

export default ServiceSlider;
