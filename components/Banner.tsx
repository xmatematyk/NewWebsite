import Image from "next/image";
import ProfileImg from "../public/img/profileImg.jpg";



const Banner = () => {
  return (
    <div className="wrapper flex  flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 md:top-[-1.5rem] relative rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full  border-[1px] border-indigo-700 p-2 object-cover"
          src={ProfileImg}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-5xl font-bold text-white">Feskyy</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          FRONT-END Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          Czesc! jestem Olivier, oraz mam 16 lat. W wolnym czasie lubie pograc w gry komputerowe oraz programowac, jednak te programowanie zdobyło moje serce. Programuje od 2021 (3 lata) i nadal sprawia mi to dużo zabawy.
          <div className="top-[2rem] relative">
        <img src="https://discord.c99.nl/widget/theme-4/551123399834075137.png" alt="" />
      </div>
        </p>
        
      </div>
      
    </div>
    
  );
};

export default Banner;
