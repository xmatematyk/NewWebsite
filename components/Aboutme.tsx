import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="O mnie" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          Siema! Jestem Olivier (aka. Feskyy, cysk), i mam 16 lat. Jestem na drugim roku technikum o profilu techniczno-programistycznym. 
          <p></p>Moje główne zainteresowania koncentrują się wokół tworzenia botów na komunikator Discord i tworzenia stron internetowych.
          Gram również w gry takie jak Valorant, Fortnite czy nawet minecraft, przez całe dziecinstwo grałem w minecraft&aposa na community blazingpack&aposa,
          przez co jestem dosyc toksyczną osobą. Odkąd poznałem swiat tworzenia botów Discord wciągnałem sie w tworzenie własnych botów, które są  wstanie
          zautoamtyzowac cały serwer. Od jakiegos czasu uczę się tworzyc grafiki - głownie loga i grafiki dla botów do embeda.
        </p>
        
        <p>
           
        </p>
      </div>
     
    </div>
    
  );
};

export default Aboutme;
