import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";
import { useLanguage } from "./LanguageContext"

interface Texts {
  name: string;
  about: string;
  aboutone: string;

}

const texts: Record<string, Texts> = {
  en: {
    name: 'Lets collaborate and create some amazing projects together!',
    about:
      "I am always open to discussing your project. I can help improve your Discord server - Of course, everything has its price.",
    aboutone:
      'Contact with me',
  },
  pl: {
    name: 'Stworzmy razem niesamowite projekty!',
    about:
      'Zawsze jestem otwarty na dyskusje na temat twojego projektu. Pomoge w ulepszeniu twojego serwera discord - Oczywiscie wszystko za swoją cene',
    aboutone:
      'Skontaktuj się'
  }
};

const Contact = () => {
  const { language } = useLanguage();
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold bg-clip-text text-center text-transparent  bg-gradient-to-r from-red-300 to-red-600">{texts[language].name}</h2>
        <p className="text-lg tracking-wide font-medium text-center">
        {texts[language].about}
        </p>
        <a href="mailto:erfwwef45@outlook.com">
          <button className="w-52 h-14 bg-gradient-to-r from-red-600  text-xl font-bold text-white rounded-lg hover:from-black  hover:to-red-600 duration-300">
          {texts[language].aboutone}
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/itscysk" />
        <SocialLink title="Youtube" link="https://www.youtube.com/@cyskofficial_" />
        <SocialLink
          title="Discord"
          link="https://discord.com/users/358595322148290562"
        />
      </div>
    </div>
  );
};

export default Contact;
