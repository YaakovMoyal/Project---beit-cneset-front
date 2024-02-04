import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../global/router/routesModel';
import {
  StyledContainer,
  StyledForm,
  StyledInputField,
  StyledSubmitButton,
  StyledLink,
} from '../../global/style/Form.styled';
import { LoginIF } from '../interfaces/loginIF';
import {
  checkingValidEmail,
  checkingValidPassword,
} from '../helpers/validations';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof LoginIF
  ) => {
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [field]: e.target.value,
    }));
  };

  const isValidForm =
    checkingValidEmail(loginDetails.email) &&
    checkingValidPassword(loginDetails.password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3000/users/login',
        loginDetails
      );

      const token = response.data;
      localStorage.setItem('token', token);

      navigate(`${ROUTES.home}/${ROUTES.allBeitCneset}`);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <StyledContainer>
      <h2>LOGIN</h2>
      <br />
      <StyledForm onSubmit={handleSubmit}>
        <StyledInputField
          placeholder="Email"
          type="text"
          required
          value={loginDetails.email}
          onChange={(e) => handleInputChange(e, 'email')}
        />

        <StyledInputField
          placeholder="Password"
          type="password"
          required
          value={loginDetails.password}
          onChange={(e) => handleInputChange(e, 'password')}
        />

        <StyledSubmitButton disabled={!isValidForm} type="submit">
          Login
        </StyledSubmitButton>
        <StyledLink to={`${ROUTES.home}/${ROUTES.sign_up}`}>
          אין לך חשבון? הירשם
        </StyledLink>
      </StyledForm>
    </StyledContainer>
  );
};

export default LoginPage;
