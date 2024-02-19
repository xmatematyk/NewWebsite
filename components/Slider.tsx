import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useLanguage } from "./LanguageContext"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FaMoneyBill } from "react-icons/fa";
import Discord from "../public/discord-logo.svg"
import { Pagination, Navigation } from 'swiper/modules';

interface Texts {
    name: string;
    about: string;
    name2: string;
    name3: string;
    name4: string;
    aboutone: string;
    abouttwo: string;
    aboutthree: string;
  }
  
  const texts: Record<string, Texts> = {
    en: {
      name: 'Discord BOTs',
      name2: 'Websites',
      name3: 'Security',
      name4: 'Apss/Programs',
      about:
        "I create fast, automated Discord bots, improving server management and user interaction. My solutions are precisely tailored to the clients needs, ensuring efficient server organization. - This is also a thesis.",
      aboutone:
        "When creating websites, I prioritize their aesthetics and intuitive navigation while maintaining full functionality. Additionally, I possess skills in integrating websites with consoles via RCON, contributing to the comprehensive quality of projects. ",
      abouttwo:
        "I can ensure the security of your project by implementing comprehensive protective measures to ensure that it is safeguarded against unwanted actions in 99% of cases.",
      aboutthree:
        "I possess programming skills in Python and can create diverse applications tailored to your needs. With experience in multiple areas, I can provide functional and efficient solutions based on Python."
    },
    pl: {
      name: 'Discord BOT',
      name2: 'Strony internetowe',
      name3: 'Bezpieczenstwo',
      name4: 'Aplikacje / programy',
      about:
      "Tworzę szybkie, zautomatyzowane boty na Discorda, usprawniając zarządzanie serwerami i interakcję użytkowników. Moje rozwiązania są precyzyjnie dopasowane do potrzeb klientów, zapewniając efektywną organizację serwera.",
      aboutone:
      "Tworząc strony internetowe, stawiam nacisk na ich estetykę i intuicyjną nawigację, przy zachowaniu pełnej funkcjonalności. Dodatkowo, posiadam umiejętności integrowania witryn z konsolą poprzez RCON, co przyczynia się do kompleksowej jakości projektów.",
      abouttwo:
      "Mogę zadbać o twój projekt pod kątem bezpieczeństwa, wdrażając kompleksowe środki ochronne, aby zapewnić, że będzie on chroniony przed niepożądanymi działaniami w 99% przypadków.",
      aboutthree:
      "Posiadam umiejętności programowania w Pythonie i mogę tworzyć różnorodne aplikacje dostosowane do Twoich potrzeb. Z doświadczeniem w wielu obszarach, mogę zapewnić funkcjonalne i efektywne rozwiązania oparte na Pythonie."
    }
  };

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
    const { language } = useLanguage();
    const serviceData = [
        {
          icon: <RxDiscordLogo />,
          title: texts[language].name,
          description: texts[language].about,
        },
        {
          icon: <RxGlobe />,
          title: texts[language].name,
          description: texts[language].aboutone,
        },
        {
          icon: <GiPadlock />,
          title: texts[language].name,
          description: texts[language].abouttwo,
        },
        {
            icon: <MdOutlineSettingsApplications />,
            title: "Apps/programs",
            description: texts[language].aboutthree
        }
      ];

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
                  className="md:h-[400px] h-[400px] "
              
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
