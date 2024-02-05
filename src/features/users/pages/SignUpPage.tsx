import React, { useState } from 'react';
import {
  StyledContainer,
  StyledForm,
  StyledInputField,
  StyledSubmitButton,
  StyledLink,
} from '../../global/style/Form.styled';
import { Gabai } from '../interfaces/usersIF';
import axios from 'axios';
import { ROUTES } from '../../global/router/routesModel';
import { useNavigate } from 'react-router-dom';
import {
  checkingValidEmail,
  checkingValidPassword,
  checkingValidPhone,
} from '../helpers/validations';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState<Gabai>({
    name: '',
    email: '',
    password: '',
    managementOf: '',
    phone: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Gabai
  ) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [field]: e.target.value,
    }));
  };

  const isValidForm =
    checkingValidEmail(userDetails.email) &&
    checkingValidPassword(userDetails.password) &&
    checkingValidPhone(userDetails.phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/users', userDetails);

      try {
        const loginResponse = await axios.post(
          'http://localhost:3000/users/login',
          userDetails
        );
        const token = loginResponse.data;

        localStorage.setItem('token', token);
        navigate(`${ROUTES.home}/${ROUTES.allBeitCneset}`);
      } catch (error) {
        console.error('Error Login:', error);
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <StyledContainer>
      <h2>SIGN UP</h2>
      <br />
      <StyledForm onSubmit={handleSubmit}>
        <StyledInputField
          placeholder="Name"
          type="text"
          required
          value={userDetails.name}
          onChange={(e) => handleInputChange(e, 'name')}
        />

        <StyledInputField
          placeholder="Email"
          type="text"
          value={userDetails.email}
          onChange={(e) => handleInputChange(e, 'email')}
        />

        <StyledInputField
          placeholder="Password"
          type="password"
          value={userDetails.password}
          onChange={(e) => handleInputChange(e, 'password')}
        />

        <StyledInputField
          placeholder=" Management Of"
          type="text"
          required
          value={userDetails.managementOf}
          onChange={(e) => handleInputChange(e, 'managementOf')}
        />

        <StyledInputField
          placeholder="Phone"
          type="text"
          value={userDetails.phone}
          onChange={(e) => handleInputChange(e, 'phone')}
        />
        <StyledSubmitButton disabled={!isValidForm} type="submit">
          Sign Up
        </StyledSubmitButton>
        <StyledLink to={`${ROUTES.home}/${ROUTES.login}`}>
          רשום כבר? התחבר{' '}
        </StyledLink>
      </StyledForm>
    </StyledContainer>
  );
};

export default SignUpPage;
