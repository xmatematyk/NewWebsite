import React, { useState } from "react";
import { FaProjectDiagram } from "react-icons/fa";
import Image from "../public/img/projects/image.png";
import Jajo from "../public/img/projects/Jajo.png";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    link: "",
    len: "next.js • tailwindcss ",
    des: "Strona została zrobiona przy użyciu nowoczesnych technologi, takich jak next.js czy tailwindcss.  Formularz przedstawiony na stronie jest połączony wraz z discordem poprzez webhooka, dzieki czemu wysłane wiadomości bedą wysyłane na kanał na discordzie. Strona jest open-source dzieki czemu każdy ma dostęp. Strona została wykonana w pełni przez vulsa & .drozdzik. Strona nie posiada responsywności, przez co może słabo działac na telefonach. W celu uzyskania source strony zapraszam na mojego githuba, bądz na discord hell-deva gdzie na kanale premium jest wszystko dokładnie wyjaśnione.",
    img: Image,
    category: "Web",
  },
  {
    id: 2,
    title: "BOT Discord JAJO",
    len: "discord.py • MongoDB ",
    des: "BOT dla gildii JAJO to zaawansowane narzędzie z funkcją weryfikacji dla skutecznej kontroli dostępu. Innowacyjny system powitalny tworzy przyjemne przyjęcie dla nowych członków, wzmacniając więzi społeczności. Dodatkowo, bot posiada zautomatyzowany system ticketów, eliminujący opóźnienia w reakcji na pytania i problemy. Funkcje antyraid, antysłowa i antylinki skutecznie zabezpieczają serwer przed niepożądanymi zdarzeniami. Cel to stworzenie kompleksowego i łatwego w obsłudze narzędzia, co sprawia, że bot jest w pełni zautomatyzowany. Niestety, ze względów bezpieczeństwa, kod źródłowy nie jest dostępny publicznie.",
    link: "",
    img: Jajo,
    category: "Bot",
  },
];

interface ModalState {
  [projectId: number]: boolean;
}

interface Project {
  id: number;
  title: string;
  link: string;
  len: string;
  des: string;
  category: string;
}

const Projects = () => {
  const [modals, setModals] = useState<ModalState>({});
  const [selectedCategory, setSelectedCategory] = useState("All");

  const openModal = (project: Project) => {
    setModals((prevModals) => ({ ...prevModals, [project.id]: true }));
  };
  
  const closeModal = (project: Project) => {
    setModals((prevModals) => ({ ...prevModals, [project.id]: false }));
  };

  return (
    <div className="wrapper">
      <div>
        <div className="flex items-center gap-4 text-2xl group pb-8">
          <h3 className="font-semibold relative overflow-hidden">
            Moje projekty
            <span className="w-full h-[2px] absolute bottom-0 left-0 inline-block bg-blue-600 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </h3>
          <span className="text-blue-600">
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
          className={`cursor-pointer focus:outline-none ${
            selectedCategory === "All" ? "text-blue-600" : "text-gray-500"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button
          className={`cursor-pointer focus:outline-none ${
            selectedCategory === "Bot" ? "text-blue-600" : "text-gray-500"
          }`}
          onClick={() => setSelectedCategory("Bot")}
        >
          Boty
        </button>
        <button
          className={`cursor-pointer focus:outline-none ${
            selectedCategory === "Web" ? "text-blue-600" : "text-gray-500"
          }`}
          onClick={() => setSelectedCategory("Web")}
        >
          Web
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isModalOpen={modals[project.id] ?? false} // Dodano ?? false, aby uniknąć undefined
            openModal={() => openModal(project)}
            closeModal={() => closeModal(project)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
