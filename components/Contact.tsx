import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">Stworzmy razem niesamowite projekty!</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          Zawsze jestem otwarty na dyskusje na temat twojego projektu. Pomoge w ulepszeniu twojego serwera discord - Oczywiscie wszystko ma swoją cene
        </p>
        <a href="mailto:erfwwef45@outlook.com">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            Skontaktuj się
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/noorjsdivs" />
        <SocialLink title="Youtube" link="https://www.youtube.com/@reactjsBD" />
        <SocialLink
          title="Discord"
          link="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
        />
      </div>
    </div>
  );
};

export default Contact;
