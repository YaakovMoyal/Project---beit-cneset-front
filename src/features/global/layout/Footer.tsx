import { MyFooter } from "../style/MyFooter.styled";
import { BoxIcons } from "../style/BoxIcons.styled";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <MyFooter>
      <BoxIcons>
        <Link to="">
          <FaFacebook />
        </Link>
        <Link to="">
          <FaInstagram />
        </Link>
        <Link to="">
          <FaTwitter />
        </Link>
      </BoxIcons>
    </MyFooter>
  );
};

export default Footer;
