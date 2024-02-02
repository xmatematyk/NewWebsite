import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Umiejętności" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="Javascript"
          link=""
        />
        <SkillsInput title="ReactJs" link="" />
        <SkillsInput title="NextJs" link="" />

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
