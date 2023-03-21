import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectFade } from "swiper";

SwiperCore.use([Navigation]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import * as C from "../styles/style";

import BgLeon from "../assets/leonbg.jpg";
import BgAshley from "../assets/ashleybg.jpg";
import BgLuis from "../assets/luisbg.jpg";
import BgAda from "../assets/adabg.jpg";
import BgGanado from "../assets/ganadobg.jpg";
import BgSerra from "../assets/serrabg.jpg";
import BgBitores from "../assets/bitoresbg.jpg";
import BgSalazar from "../assets/salazarbg.jpg";
import BgIngrid from "../assets/ingridbg.jpg";
import BgMerchant from "../assets/merchantbg.jpg";
import BgKrauser from "../assets/krauserbg.jpg";
import BgSaddler from "../assets/saddlerbg.jpg";
import BgZealot from "../assets/zealotbg.jpg";

const CarouselCharacters = () => {
  return (
    <C.Carousel>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        modules={[EffectFade, Navigation]}
        className="mySwiper"
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide id="carousel-1">
          <img src={BgLeon} alt="" />
          <div className="carousel-text">
            <h1>Leon S. Kennedy</h1>
            <p>
              Leon S. Kennedy, a rookie cop when the Raccoon City Incident{" "}
              <br /> took br place six years ago, has become an agent working
              directly <br /> under the President. Having gone through many
              different missions <br /> since the incident, Leon has matured
              significantly.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide id="carousel-2">
          <img src={BgAshley} alt="" />
          <div className="carousel-text">
            <h1>Ashley Graham</h1>
            <p>
              The missing daughter of the US president. Leon sets out to a{" "}
              <br />
              secluded European village in search for her.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide id="carousel-3">
          <img src={BgLuis} alt="" />
          <div className="carousel-text">
            <h1>Luis Serra</h1>
            <p>
              Leon comes across this mysterious man in the village. He seems to{" "}
              <br />
              know something about the whereabouts of the US president's <br />
              daughter, but can he be trusted...?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide id="carousel-4">
          <img src={BgAda} alt="" />
          <div className="carousel-text">
            <h1>Ada Wong</h1>
            <p>
              Teamed up with Leon during the Raccoon City Incident, but went
              <br />
              missing during the destruction of Umbrella's underground
              <br />
              laboratory. She suddenly shows up again, but her true purpose
              <br />
              remains a mystery.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide id="carousel-5">
          <img src={BgGanado} alt="" />
          <div className="carousel-text">
            <h1>Villagers(Ganado)</h1>
            <p>
              Once human, the Ganado worship the leader of a religious cult, and
              <br />
              now there is only madness in their eyes…
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide id="carousel-6">
          <img src={BgSerra} alt="" />
          <div className="carousel-text">
            <h1>Chainsaw Villager</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide id="carousel-7">
          <img src={BgBitores} alt="" />
          <div className="carousel-text">
            <h1>Bitores Méndez</h1>
            <p>
              The chief of the village into which Leon ventures. Like the other
              <br />
              locals, he worships the leader of a religious cult.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide id="carousel-8">
          <img src={BgSalazar} alt="" />
          <div className="carousel-text">
            <h1>Ramón Salazar</h1>
            <p>
              The eighth head of the Salazar family, who have been rulers of the
              <br />
              region where Ashley seems to have gone missing.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide id="carousel-9">
          <img src={BgIngrid} alt="" />
          <div className="carousel-text">
            <h1>Ingrid Hunnigan</h1>
            <p>
              A mission coordinator who supports US government agents. She
              <br /> will be aiding Leon on this mission.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide id="carousel-10">
          <img src={BgMerchant} alt="" />
          <div className="carousel-text">
            <h1>Merchant</h1>
            <p>
              A mysterious weapons merchant that appears in various locations.
              <br />
              Not only does he buy and sell weapons and items, but he is also
              able
              <br /> to tune up weapons already in Leon's possession as well as
              trade for
              <br /> special wares.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide id="carousel-11">
          <img src={BgKrauser} alt="" />
          <div className="carousel-text">
            <h1>Jack Krauser</h1>
            <p>
              A former member of the US military.
              <br />
              He and Leon developed a bond after the latter became an agent.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide id="carousel-12">
          <img src={BgSaddler} alt="" />
          <div className="carousel-text">
            <h1>Osmund Saddler</h1>
            <p>
              The current leader of Los Iluminados, a powerful religious cult
              that
              <br /> has long existed in the region.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide id="carousel-13">
          <img src={BgZealot} alt="" />
          <div className="carousel-text">
            <h1>Zealot(Ganado)</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </C.Carousel>
  );
};

export default CarouselCharacters;
