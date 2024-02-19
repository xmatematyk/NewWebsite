import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";
import { useLanguage } from "./LanguageContext"

interface Texts {
  name: string;
  about: string;
}

const texts: Record<string, Texts> = {
  en: {
    name: 'Skills',
    about:
      "Olivier (also known as cysk), 16 years old. Currently in the 2nd grade of a technical high school with a focus on programming. Passionate about creating bots for the Discord platform and websites. Enjoys playing games like Valorant, Fortnite, and Minecraft (using BlazingPack). Interested in graphic design, creating logos, and various types of graphics. Noteworthy traits include creativity, dedication to self-improvement, and active involvement in projects."
  },
  pl: {
    name: 'Moje umiejętności',
    about:
      'Olivier (aka. cysk), 16-lat. Klasa 2 o profilu technik - programista. Pasjonat tworzenia botów na platformę Discord oraz stron internetowych. Gram w gry jak Valorant, Fortnite, Minecraft (BlazingPack). Zainteresowany grafiką, tworzę loga i różnego rodzaju grafiki. Moją cechą wartą uwagi jest przede wszystkim kreatywność jak i zaangażowanie w samorozwój iraz projekty w których biorę udział.'
  }
};

const Skills = () => {
  const { language } = useLanguage();
  return (
    <div className="wrapper">
      <Title text={texts[language].name} icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="Javascript"
          link=""
        />
        <SkillsInput title="reactjs" link="" />
        <SkillsInput title="nextjs" link="" />

        <SkillsInput title="Python" link="" />
        <SkillsInput title="HTML" link="" />
        <SkillsInput title="CSS" link="" />
        <SkillsInput
          title="MongoDB"
          link=""
        />
        <SkillsInput title="Discord.py" link="" />
        <SkillsInput title="Discord.js" link="" />
        <SkillsInput
          title="TailWind CSS"
          link=""
        />
        <SkillsInput title="VS Code" link="" />
        <SkillsInput
          title="Netlify"
          link=""
        />
        <SkillsInput title="Github" link="" />
        <SkillsInput title="Trello" link="" />
        <SkillsInput title="GitLab" link="" />
        <SkillsInput title="Figma" link="" />
        <SkillsInput title="Canva" link="" />
        <SkillsInput title="CSS3" link="" />
        <SkillsInput title="Adobe Photoshop 2023" link="" />
        <SkillsInput title="VS Studio" link="" />
        <SkillsInput title="PyCharm" link="" />
        <SkillsInput title="Adobe Illustrator 2023" link="" />
        <SkillsInput title="UI Design" link="" />
        <SkillsInput title="Vegas PRO" link="" />
      </div>
    </div>
  );
};

export default Skills;
