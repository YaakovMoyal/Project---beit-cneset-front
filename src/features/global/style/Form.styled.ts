import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3em;
    color: #3498db;
  }

  h2 {
    font-size: 2em;
    margin-bottom: 5px;
    color: #3498db;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 15px;
  border: 3px solid #e5e6e5;
  padding: 40px 90px;
`;

// export const StyledInputLabel = styled.label`
//   margin-bottom: 10px;
//   font-size: 17px;
//   margin: 10px;
// `;

export const StyledInputField = styled.input`
  padding: 8px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #bfdfbf;
`;

export const StyledSubmitButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? '#888' : '#4caf50')};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin: 30px 15px;

  &:active {
    cursor: progress;
    transform: scale(0.96);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
`;
