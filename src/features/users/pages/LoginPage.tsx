// export default function LoginPage() {
//   return <div>loginPage</div>;
// }

import { useState } from "react";
import { MyDiv } from "../../global/style/MyDiv.styled";
import { Gabai } from "../interfaces/usersIF";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../global/router/routesModel";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Gabai
  ) => {
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:3000/users/login", loginDetails)
        .then((response) => {
          const token = response.data;

          // שמירת הטוקן ב-localStorage
          localStorage.setItem("token", token);

          navigate(`${ROUTES.home}/${ROUTES.allBeitCneset}`);
        });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <MyDiv $h="80vh">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            value={loginDetails.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
        </label>{" "}
        <br />
        <label>
          Password:
          <input
            type="password"
            value={loginDetails.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

      <Link to={ROUTES.sign_up}>אין לך חשבון? הירשם</Link>
    </MyDiv>
  );
};

export default LoginPage;
