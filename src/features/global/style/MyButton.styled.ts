import styled from "styled-components";

export const MyButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 16px; /* שינוי רווחים פנימיים */
  font-size: 12px; /* שינוי גודל גופן */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 15px;

  &:hover {
    transform: scale(1.01);
    opacity: 0.8;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.99);
  }
`;
