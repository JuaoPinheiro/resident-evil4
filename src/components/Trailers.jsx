import * as C from "../styles/style";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css/free-mode";

import BgTrailer1 from "../assets/bgtrailer1.jpg";
import BgTrailer2 from "../assets/bgtrailer2.jpg";
import BgTrailer3 from "../assets/bgtrailer3.jpg";
import BgTrailer4 from "../assets/bgtrailer4.jpg";
import BgTrailer5 from "../assets/bgtrailer5.jpg";

const Trailers = () => {
  return (
    <C.SectionTrailers>
      <h1 className="h1Trailer">Trailer</h1>

      <Swiper
        // install Swiper modules
        modules={[FreeMode]}
        spaceBetween={50}
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="carrousel-trailer1">
            <a
              href="https://www.youtube.com/watch?v=XrgTFWJHUWI&ab_channel=capcomasia"
              target="_blank"
            >
              <img src={BgTrailer1} alt="" />
            </a>
        </SwiperSlide>

        <SwiperSlide className="carrousel-trailer1">
          <a
            href="https://www.youtube.com/watch?v=xxjm8t7aHBY&ab_channel=capcomasia"
            target="_blank"
          >
            <img src={BgTrailer2} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide className="carrousel-trailer1">
          <a
            href="https://www.youtube.com/watch?v=XrgTFWJHUWI&ab_channel=capcomasia"
            target="_blank"
          >
            <img src={BgTrailer3} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide className="carrousel-trailer1">
          <a href="https://www.youtube.com/watch?v=0MMQRKfnVb4" target="_blank">
            <img src={BgTrailer5} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide className="carrousel-trailer1">
          <a
            href="https://www.youtube.com/watch?v=cXXahCfJPA8&t=388s"
            target="_blank"
          >
            <img src={BgTrailer4} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </C.SectionTrailers>
  );
};

export default Trailers;
