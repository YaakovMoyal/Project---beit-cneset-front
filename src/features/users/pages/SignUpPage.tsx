import { useState } from "react";
import { MyDiv } from "../../global/style/MyDiv.styled";
import { Gabai } from "../interfaces/usersIF";
import axios from "axios";
import { Link } from "react-router-dom";
import { ROUTES } from "../../global/router/routesModel";

const SignUpPage: React.FC = () => {
  const [loginDetails, setLoginDetails] = useState<Gabai>({
    name: "",
    email: "",
    password: "",
    managementOf: "",
    phone: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/users",
        loginDetails
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <MyDiv $h="80vh">
      <form onSubmit={handleSubmit}>
        <label>
          Name: <br />
          <input
            type="text"
            value={loginDetails.name}
            onChange={(e) => handleInputChange(e, "name")}
          />
        </label>
        <br />
        <label>
          Email: <br />
          <input
            type="text"
            value={loginDetails.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
        </label>
        <br />
        <label>
          Password: <br />
          <input
            type="password"
            value={loginDetails.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
        </label>
        <br />
        <label>
          Management Of: <br />
          <input
            type="text"
            value={loginDetails.managementOf}
            onChange={(e) => handleInputChange(e, "managementOf")}
          />
        </label>
        <br />
        <label>
          Phone: <br />
          <input
            type="text"
            value={loginDetails.phone}
            onChange={(e) => handleInputChange(e, "phone")}
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>

      <Link to={ROUTES.login}>רשום כבר? התחבר </Link>
    </MyDiv>
  );
};

export default SignUpPage;
