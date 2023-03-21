import * as C from "../styles/style";
import Logo from "../assets/logo.svg";
import Ps4Logo from "../assets/ps4Logo.svg";
import Ps5Logo from "../assets/ps5Logo.svg";
import SteamLogo from "../assets/steamLogo.svg";
import XboxLogo from "../assets/xboxLogo.svg";

const SectionText = () => {
  return (
    <C.SectionText>
      <img src={Logo} alt="" />
      <h1>
        Available <font color="red">March 24, 2023</font>
      </h1>

      <div className="logos-console">
        <img src={Ps5Logo} alt="" />
        <img src={Ps4Logo} alt="" />
        <img src={XboxLogo} alt="" />
        <img src={SteamLogo} alt="" />
      </div>
    </C.SectionText>
  );
};

export default SectionText;
