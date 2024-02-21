import { SiInformatica } from "react-icons/si";
import Title from "./Title";
import { useLanguage } from "./LanguageContext"

interface Texts {
  name: string;
  about: string;
}

const texts: Record<string, Texts> = {
  en: {
    name: 'About Me',
    about:
      "Olivier (also known as cysk or olus), 16 years old. Currently in the 2nd grade of a technical high school with a focus on programming. Passionate about creating bots for the Discord platform and websites. Enjoys playing games like Valorant, Fortnite, and Minecraft (using BlazingPack). Interested in graphic design, creating logos, and various types of graphics. Noteworthy traits include creativity, dedication to self-improvement, and active involvement in projects."
  },
  pl: {
    name: 'O mnie',
    about:
      'Olivier (aka. cysk, olus), 16-lat. Klasa 2 o profilu technik - programista. Pasjonat tworzenia botów na platformę Discord oraz stron internetowych. Gram w gry jak Valorant, Fortnite, Minecraft (BlazingPack). Zainteresowany grafiką, tworzę loga i różnego rodzaju grafiki. Moją cechą wartą uwagi jest przede wszystkim kreatywność jak i zaangażowanie w samorozwój oraz projekty w których biorę udział.'
  }
};


const Aboutme = () => {
  const { language } = useLanguage();
  return (
    <div className="wrapper" id="about">
      <Title text={texts[language].name} icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6" >
        <p>
        {texts[language].about}
        </p>
        
        <p>
           
        </p>
      </div>
     
    </div>
    
  );
};

export default Aboutme;
