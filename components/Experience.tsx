import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Doświadczenie" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="starify.tech"
          subTitle="BOT Developer 2023 - 2023"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="helldev.pl"
          subTitle="BOT Developer 2023 - 2023"
          icon={<SiToptal />}
        />
        <ExperienceCard
          title="WentMc.pl"
          subTitle="WEB & BOT Developer 2023 - 2023"
          icon={<SiFreelancer />}
        />

        <ExperienceCard
          title="FastCode.pl"
          subTitle="WEB & BOT Developer 2023-2023"
          icon={<SiFiverr />}
        />
      </div>
    </div>
  );
};

export default Experience;
