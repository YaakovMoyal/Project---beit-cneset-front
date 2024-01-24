import { IoHome } from "react-icons/io5";
import { ROUTES } from "../router/routesModel";
import { BoxIcons } from "../style/BoxIcons.styled";
import { MyDiv } from "../style/MyDiv.styled";
import { MyHeader } from "../style/MyHeader.styled";
import { LiaSignInAltSolid, LiaSignOutAltSolid } from "react-icons/lia";

const Header = () => {
  const isLogin = false;
  return (
    <MyHeader>
      <BoxIcons>
        <a
          style={{ border: "none" }}
          href={`${ROUTES.home}/${ROUTES.allBeitCneset}`}
        >
          <IoHome />
        </a>
      </BoxIcons>

      <MyDiv>
        <h2>האתר המרכזי לזמני תפילות</h2>
      </MyDiv>

      <BoxIcons>
        {isLogin ? (
          <a href={`${ROUTES.home}/${ROUTES.allBeitCneset}`}>
            <LiaSignOutAltSolid />
          </a>
        ) : (
          <a href={`${ROUTES.sign_up}`}>
            <LiaSignInAltSolid />
          </a>
        )}
      </BoxIcons>
    </MyHeader>
  );
};

export default Header;
