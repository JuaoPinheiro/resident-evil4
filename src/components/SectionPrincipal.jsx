import * as C from "../styles/style";
import Trailer from "../assets/trailer.mp4";

const Section = () => {
  return (
    <C.Section>
      <C.TrailerBG>
        <video autoPlay loop muted>
          <source src={Trailer} />
        </video>
      </C.TrailerBG>
      <a href="#">Characters</a>
      <a href="#">Location</a>
      <a href="#">Gameplay</a>
      <button>Pre-Order</button>
    </C.Section>
  );
};

export default Section;
