"use client"
import React, { useState } from "react";
import Image from "next/image"; 
import Cysk from "../public/img/projects/image.png";
import Jajo from "../public/img/projects/Jajo.png";
import mc from "../public/mcfox.png"
import ProjectCard from "./ProjectCard";

interface ModalState {
  [projectId: number]: boolean;
}

import { useLanguage } from "./LanguageContext"

interface Texts {
  name: string;
  about: string;
}

const texts: Record<string, Texts> = {
  en: {
    name: 'My projects',
    about:
      "Olivier (also known as cysk), 16 years old. Currently in the 2nd grade of a technical high school with a focus on programming. Passionate about creating bots for the Discord platform and websites. Enjoys playing games like Valorant, Fortnite, and Minecraft (using BlazingPack). Interested in graphic design, creating logos, and various types of graphics. Noteworthy traits include creativity, dedication to self-improvement, and active involvement in projects."
  },
  pl: {
    name: 'Moje Projekty',
    about:
      'Olivier (aka. cysk), 16-lat. Klasa 2 o profilu technik - programista. Pasjonat tworzenia botów na platformę Discord oraz stron internetowych. Gram w gry jak Valorant, Fortnite, Minecraft (BlazingPack). Zainteresowany grafiką, tworzę loga i różnego rodzaju grafiki. Moją cechą wartą uwagi jest przede wszystkim kreatywność jak i zaangażowanie w samorozwój iraz projekty w których biorę udział.'
  }
};

interface Project {
  id: number;
  title: string;
  linkdc: string;
  linkhub: string;
  len: string;
  des: string;
  img: any;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    linkdc: "",
    linkhub: "",
    len: "nextjs • tailwindcss ",
    des: "Strona została zrobiona przy użyciu nowoczesnych technologi, takich jak nextjs czy tailwindcss.  Formularz przedstawiony na stronie jest połączony wraz z discordem poprzez webhooka, dzieki czemu wysłane wiadomości bedą wysyłane na kanał na discordzie. Strona jest open-source dzieki czemu każdy ma dostęp. Strona została wykonana w pełni przez vulsa & .drozdzik. Strona nie posiada responsywności, przez co może słabo działac na telefonach. W celu uzyskania source strony zapraszam na mojego githuba, bądz na discord hell-deva gdzie na kanale premium jest wszystko dokładnie wyjaśnione.",
    img: Cysk,
    category: "Web",
  },
  {
    id: 2,
    title: "BOT dla gildi JAJO",
    linkdc: "",
    linkhub: "",
    len: "discord.py • mongodb ",
    des: "BOT dla gildii JAJO to zaawansowany i automatyczny bot. Zawiera on funkcje takie jak antyraid, centrum pomocy, antylink, antysłowo, propozycje oraz system konkursów. Bot posiada funkcję blacklisty połączoną z bazą danych MongoDB, dzięki czemu można zablokować komuś dostęp do składania podania do gildi na zawsze. Posiada także zautomatyzowany system ticketów, dzięki któremu można komuś odrzucić lub zaakceptować podanie dwoma kliknięciami. Bot dysponuje również zaawansowanym systemem weryfikacji, co w 100% uniemożliwia przeprowadzenie automatycznie raidu na serwer.",
    img: Jajo,
    category: "Bot",
  },
  {
    id: 3,
    title: "BOT dla McFox.pl",
    linkdc: "",
    linkhub: "",
    len: "discord.py • MongoDB • RCON  ",
    des: "Stworzyłem bota dla serwera McFox.pl, którego zadaniem jest monitorowanie chatu i nagradzanie graczy, którzy podają swój nick, przyznając im 1 klucz Foxa. Wykorzystałem bazę danych MongoDB do przechowywania nicków, zapobiegając powtórnym nagrodom dla tych samych nicków oraz zabezpieczając przed wykorzystaniem jednego konta Discord do podawania sobie nagród na różne nicki. Dodatkowo, bot posiada podstawowe funkcje bezpieczeństwa, uniemożliwiające graczom oszukiwanie. Dodatkowo, bota wyposażono w system wykrywania nowych kont na Discordzie, co skutecznie eliminuje możliwość odebrania nagrody przez potencjalne fałszywe konta, co zwiększa bezpieczeństwo i uczciwość procesu nagradzania graczy.",
    img: mc,
    category: "Bot",
  },
  
];

const Projects = () => {
  const { language } = useLanguage();
  const [modals, setModals] = useState<ModalState>({});
  const [selectedCategory, setSelectedCategory] = useState("All");

  const openModal = (project: Project) => {
    setModals((prevModals) => ({ ...prevModals, [project.id]: true }));
  };

  const closeModal = (project: Project) => {
    setModals((prevModals) => ({ ...prevModals, [project.id]: false }));
  };

  const filterProjects = () => {
    if (selectedCategory === "All") {
      return projects;
    } else {
      return projects.filter((project) => project.category === selectedCategory);
    }
  };

  return (
    <div className="wrapper" id="projects">
      <div>
        <div className="flex items-center gap-4 text-2xl group pb-8">
          <h3 className="font-semibold relative overflow-hidden">
          {texts[language].name}
            <span className="w-full h-[2px] absolute bottom-0 left-0 inline-block bg-red-600 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </h3>
          <span className="text-red-600">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center  gap-4 text-2xl group pb-8">
        <button
          className={`cursor-pointer hover:text-white focus:outline-none ${
            selectedCategory === "All" ? "text-red-600" : "text-gray-500"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button
          className={`cursor-pointer  hover:text-white focus:outline-none ${
            selectedCategory === "Bot" ? "text-red-600" : "text-gray-500"
          }`}
          onClick={() => setSelectedCategory("Bot")}
        >
          Boty
        </button>
        <button
          className={`cursor-pointer hover:text-white  focus:outline-none ${
            selectedCategory === "Web" ? "text-red-600" : "text-gray-500"
          }`}
          onClick={() => setSelectedCategory("Web")}
        >
          Web
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {filterProjects().map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isModalOpen={modals[project.id] ?? false}
            openModal={() => openModal(project)}
            closeModal={() => closeModal(project)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
