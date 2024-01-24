import { IoHome } from "react-icons/io5";
import { ROUTES } from "../router/routesModel";
import { BoxIcons } from "../style/BoxIcons.styled";
import { MyDiv } from "../style/MyDiv.styled";
import { MyHeader } from "../style/MyHeader.styled";
import { LiaSignInAltSolid, LiaSignOutAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    // עדכון של מצב התחברות כאשר הטוקן משתנה
    setIsLogin(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    // מחיקה של הטוקן מתוך localStorage
    localStorage.removeItem("token");
    // עדכון של מצב התחברות
    setIsLogin(false);
  };

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
          <Link to={`${ROUTES.home}`} onClick={handleLogout}>
            <LiaSignOutAltSolid />
          </Link>
        ) : (
          <Link to={`${ROUTES.sign_up}`}>
            <LiaSignInAltSolid />
          </Link>
        )}
      </BoxIcons>
    </MyHeader>
  );
};

export default Header;
