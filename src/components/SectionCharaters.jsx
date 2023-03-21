import * as C from "../styles/style";
import { useState } from "react";
import ImageLeon from "../assets/characterLeon.jpg";
import ImageAshley from "../assets/characterAshley.jpg";
import ImageLuis from "../assets/characterLuis.jpg";
import ImageAda from "../assets/characterAda.jpg";
import ImageGanado from "../assets/characterGanado.jpg";
import ImageSerra from "../assets/characterSerra.jpg";
import ImageBitores from "../assets/characterBitores.jpg";
import ImageSalazar from "../assets/characterSalazar.jpg";
import ImageIngrid from "../assets/characterIngrid.jpg";
import ImageMerchant from "../assets/characterMerchant.jpg";
import ImageKrauser from "../assets/characterKrauser.jpg";
import ImageSaddler from "../assets/characterSaddler.jpg";
import ImageZealot from "../assets/characterZealot.jpg";

const Characters = () => {
  const [activeCharacter, setActiveCharacter] = useState(null);

  const handleCharacterClick = (index) => {
    setActiveCharacter(index);
  };

  return (
    <C.SectionCharacters>
      <div className="div-characters">
        <h2>Charaters</h2>
        <div className="div-all-characters">
          <div className="person">
            <div>
              <img
                src={ImageLeon}
                alt=""
                onClick={() => handleCarouselChange("carousel-1")}
              />
            </div>
            <p>Leon S. Kennedy</p>
          </div> 
          <div className="person">
            {characters.map((character, index) => (
              <div
                key={index}
                onClick={() => handleCarouselChange("carousel-2")}
              >
                <img src={ImageAshley} alt="" />
              </div>
            ))}
            <p>Ashley Graham</p>
          </div>
          <div className="person">
            <div>
              <img
                src={ImageLuis}
                alt=""
                onClick={() => handleCarouselChange("carousel-3")}
              />
            </div>
            <p>Luis Serra</p>
          </div>{" "}
          <div className="person">
            <div>
              <img
                src={ImageAda}
                alt=""
                onClick={() => handleCarouselChange("carousel-4")}
              />
            </div>
            <p>Ada Wang</p>
          </div>{" "}
          <div className="person">
            <div>
              <img
                src={ImageGanado}
                alt=""
                onClick={() => handleCarouselChange("carousel-5")}
              />
            </div>
            <p>Villagers(Ganado)</p>
          </div>{" "}
          <div className="person">
            <div>
              <img
                src={ImageSerra}
                alt=""
                onClick={() => handleCarouselChange("carousel-6")}
              />
            </div>
            <p>Chainsaw Villager</p>
          </div>{" "}
          <div className="person">
            <div>
              <img
                src={ImageBitores}
                alt=""
                onClick={() => handleCarouselChange("carousel-7")}
              />
            </div>
            <p>Bitores Méndez</p>
          </div>{" "}
          <div className="person">
            <div>
              <img
                src={ImageSalazar}
                alt=""
                onClick={() => handleCarouselChange("carousel-8")}
              />
            </div>
            <p>Ramón Salazar</p>
          </div>{" "}
          <div className="person">
            <div>
              <img
                src={ImageIngrid}
                alt=""
                onClick={() => handleCarouselChange("carousel-9")}
              />
            </div>
            <p>Ingrid Hunnigan</p>
          </div>{" "}
          <div className="person">
            <div>
              <img
                src={ImageMerchant}
                alt=""
                onClick={() => handleCarouselChange("carousel-10")}
              />
            </div>
            <p>Merchant</p>
          </div>{" "}
          <div className="person">
            <div>
              <img
                src={ImageKrauser}
                alt=""
                onClick={() => handleCarouselChange("carousel-11")}
              />
            </div>
            <p>Jack Krauser</p>
          </div>{" "}
          <div className="person">
            <div>
              <img
                src={ImageSaddler}
                alt=""
                onClick={() => handleCarouselChange("carousel-12")}
              />
            </div>
            <p>Osmund Saddler</p>
          </div>{" "}
          <div className="person">
            <div>
              <img
                src={ImageZealot}
                alt=""
                onClick={() => handleCarouselChange("carousel-13")}
              />
            </div>
            <p>Zealot</p>
          </div>
        </div>
      </div>
    </C.SectionCharacters>
  );
};

export default Characters;
