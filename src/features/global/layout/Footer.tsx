import { MyFooter } from "../style/MyFooter.styled";
import { BoxIcons } from "../style/BoxIcons.styled";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <MyFooter>
      <BoxIcons>
        <a href="">
          <FaFacebook />
        </a>
        <a href="">
          <FaInstagram />
        </a>
        <a href="">
          <FaTwitter />
        </a>
      </BoxIcons>
    </MyFooter>
  );
};

export default Footer;
