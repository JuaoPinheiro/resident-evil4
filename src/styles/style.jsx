import styled from "styled-components";
import Pattern from "../assets/pattern.png";

export const Section = styled.section`
  display: flex;
  justify-content: end;
  gap: 30px;
  align-items: center;
  margin-right: 50px;
  margin-top: 20px;

  button {
    width: 90px;
    height: 40px;
    border: none;
    color: #fff;
    font-family: "Teko", sans-serif;
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
    background: red;

    &:hover {
      background-image: url(${Pattern});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
      opacity: 0.8;
    }
  }

  a {
    text-decoration: none;
    color: #fff;
    font-family: "Teko", sans-serif;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;

    &:hover {
      color: red;
    }
  }
`;

export const SectionText = styled.section`
  padding-top: 300px;
  padding-left: 80px;
  display: flex;
  flex-direction: column;

  img {
    height: 120px;
    width: 810px;
  }

  h1 {
    color: #fff;
    font-family: "Teko", sans-serif;
    font-size: 41px;
    line-height: 62px;
    font-weight: 400;
    padding-left: 90px;
    padding-top: 15px;
    padding-bottom: 30px;
  }

  .logos-console {
    display: flex;
    gap: 33px;
    margin-left: 90px;
    img {
      width: 110px;
      height: 43px;
    }
  }
`;

export const SectionTrailers = styled.section`
  margin-left: 100px;
  margin-top: 230px;

  .h1Trailer {
    color: red;
    font-family: "Teko", sans-serif;
    font-size: 41px;
    line-height: 62px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .carrousel-trailer1 {
    margin-left: 70px;
    img {
      width: 530px;
      height: 300px;
      border-bottom: 1px solid red;
      border-radius: 2px;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const TrailerBG = styled.div`
  video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

export const SectionAbout = styled.section`
  position: relative;
`;

export const AboutImage = styled.div`
  position: relative;
  margin-top: 250px;
  height: 100vh;
  width: 100vw;

  .image-principal {
    padding-left: 50px;
    padding-right: 50px;
    position: relative;
    background-size: cover;
    display: block;
    top: 50%;
    left: 50%;
    width: 99%;
    transform: translate(-50%, -50%);
  }

  .div-text-about {
    position: absolute;
    top: 0;
    left: 200px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;

    h2 {
      color: red;
      font-family: "Teko", sans-serif;
      font-size: 51px;
      line-height: 65px;
      font-weight: 400;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    h1 {
      color: #fff;
      font-family: "EB Garamond", sans-serif;
      font-size: 80px;
      line-height: 97px;
      font-weight: 500;
      margin-bottom: 20px;
    }

    p {
      color: #fff;
      font-family: "EB Garamond", sans-serif;
      font-size: 13px;
      line-height: 25px;
      font-weight: 600;
    }
  }
`;

export const SecondaryImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100vw;

  .div-background-secondary {
    position: absolute;
  }

  img {
    width: 30vw;
    z-index: 1;
  }
`;

export const StoryImageSection = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  img {
    padding-left: 50px;
    padding-right: 50px;
    position: relative;
    background-size: cover;
    display: block;
    top: 50%;
    left: 50%;
    width: 99%;
    height: 100%;
    margin-top: -100px;
    transform: translate(-50%, -50%);
  }

  .div-story-text {
    position: absolute;
    top: 0;
    left: 200px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    h2 {
      color: red;
      font-family: "Teko", sans-serif;
      font-size: 51px;
      line-height: 65px;
      font-weight: 400;
      text-transform: uppercase;
    }

    p {
      color: #fff;
      font-family: "EB Garamond", sans-serif;
      font-size: 13px;
      line-height: 25px;
      font-weight: 600;
    }
  }
`;

export const SectionCharacters = styled.section`
  color: #fff;
  .div-characters {
    display: flex;

    align-items: center;

    h2 {
      color: red;
      font-family: "Teko", sans-serif;
      font-size: 51px;
      line-height: 65px;
      font-weight: 400;
      text-transform: uppercase;
      margin-left: 17%;
    }
  }

  .div-all-characters {
    display: flex;
    justify-content: end;
    flex-wrap: wrap;
    margin-left: 10%;
    margin-right: 50px;

    p {
      position: absolute;
      text-align: end;
      top: 30px;
      left: 0;
      width: 100%;
      padding: 10px;
      color: #fff;
      z-index: 1;
      font-family: "Teko", sans-serif;
      font-size: 13px;
      line-height: 11px;
      font-weight: 400;
    }

    img {
      display: block;
      width: 100%;
    }
  }

  .person {
    position: relative;
    flex: 0 0 calc(100% / 7);
    cursor: pointer;
    border: 1px solid gray;

    img {
      filter: grayscale(100%);
      transition: all 0.3s ease-in-out;
    }

    img:hover {
      filter: grayscale(0%);
      border-bottom: 3px solid red;
    }
  }

  .item:nth-child(n + 8) {
    flex-basis: calc(100% / 6);
  }
`;

export const Carousel = styled.div`
  margin-top: 50px;
  .swiper-button-prev,
  .swiper-button-next {
    background-color: red;
    color: #fff;
    width: 32px;
    height: 32px;
  }

  img {
    width: 100%;
    height: 500px;
    padding-left: 50px;
    padding-right: 50px;
    position: relative;
  }

  .carousel-text {
    position: absolute;
    top: 50%;
    left: 63%;
    transform: translateY(-50%);
    border-radius: 5px;
    h1 {
      color: red;
      font-family: "Teko", sans-serif;
      font-size: 76px;
      line-height: 77px;
      font-weight: 400;
    }

    p {
      color: #fff;
      font-family: "EB Garamond", sans-serif;
      font-size: 14px;
      line-height: 28px;
      font-weight: 500;
    }
  }
`;
