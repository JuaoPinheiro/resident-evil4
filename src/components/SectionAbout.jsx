import * as C from "../styles/style";
import PrincipalImage from "../assets/bgabout.jpg";
import Secondary1 from "../assets/secondary1.jpg";
import Secondary2 from "../assets/secondary2.jpg";
import Secondary3 from "../assets/secondary3.jpg";
import StoryImage from "../assets/story.png";

const About = () => {
  return (
    <C.SectionAbout>
      <C.AboutImage>
        <img className="image-principal" src={PrincipalImage} alt="" />
        <div className="div-text-about">
          <h2>About</h2>
          <h1>
            Survival is <br /> just the beginning
          </h1>
          <p>
            Resident Evil 4 is a remake of the 2005 original Resident Evil 4.
            <br />
            Reimagined for 2023 to bring state-of-the-art survival horror.
            <br />
            Resident Evil 4 preserves the essence of the original game, while
            introducing modernized gameplay, a reimagined storyline,
            <br /> and vividly detailed graphics to make this the latest
            survival horror game where life and death, terror and catharsis
            intersect.
          </p>
        </div>
      </C.AboutImage>

      <C.SecondaryImages>
        <img src={Secondary1} alt="" />
        <img src={Secondary2} alt="" />
        <img src={Secondary3} alt="" />
      </C.SecondaryImages>

      <C.StoryImageSection>
        <img src={StoryImage} alt="" />
        <div className="div-story-text">
          <h2>Story</h2>
          <p>
            6 years have passed since the biological disaster in Raccoon City.br{" "}
            <br />
            <br />
            Leon S. Kennedy, one of the survivors of the incident, <br /> has
            been recruited as an agent reporting directly to the president of
            the United States. <br />
            <br />
            With the experience of multiple missions on his back, <br /> Leon is
            sent to rescue the president's kidnapped daughter. <br />
            <br /> He tracks her to a secluded European village, <br /> where
            there is something terribly wrong with the villagers. <br />
            <br /> And the curtain rises on this story of daring rescue and
            grueling horror.
          </p>
        </div>
      </C.StoryImageSection>
    </C.SectionAbout>
  );
};

export default About;
