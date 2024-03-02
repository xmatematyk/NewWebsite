
import Image from "next/image";
import Typewriter from "typewriter-effect";
import ProfileIMG from "@/public/img/profileImg.jpg"
import { useLanguage } from "./LanguageContext"
import Avatar from "@/public/avatarr.png"
interface Texts {
  name: string;
  titles: string[];
  about: string;
}

const texts: Record<string, Texts> = {
  en: {
    name: 'dehss',
    titles: [
      'BOT Developer',
      'WEB Developer',
      'Nextjs Developer',
      'Python Developer'
    ],
    about:
      "Hi there! I'm Sebastian, and I'm 16 years old. In my free time, I enjoy playing computer games and programming, although programming has really captured my heart. I've been programming since 2022 (2 years), and it still brings me a lot of joy."
  },
  pl: {
    name: 'dehss',
    titles: [
      'BOT Developer',
      'WEB Developer',
      'Nextjs Developer',
      'Python Developer'
    ],
    about:
      'Cześć! Jestem Sebastian, mam 16 lat. W wolnym czasie lubię grać w gry komputerowe i programować, choć programowanie naprawdę mnie urzekło. Programuję od 2022 roku (2 lata) i nadal sprawia mi to dużo radości.'
  }
};



const Banner = () => {
  const { language } = useLanguage();
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10" id="home">
      {/* Image */}
      <div className="w-44 h-44 md:top-[-1.5rem] relative rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full z-[1] border-[1px] border-red-600 p-2 object-cover"
          src={Avatar}
          alt="ProfileImg"
        />
      </div>
      <div className="w-3/4 flex flex-col items-center md:items-start gap-2">
        <h1 className="text-5xl font-bold text-white">{texts[language].name}</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-red-600 tracking-wide">
          <Typewriter
            options={{
              strings: texts[language].titles,
              autoStart: true,
              loop: true,
              delay: 20,
              deleteSpeed: 10,
            }}
          />
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">{texts[language].about}</p>

      </div>
    </div>
  );
};

export default Banner;
