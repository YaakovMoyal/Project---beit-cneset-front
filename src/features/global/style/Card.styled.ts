import styled from "styled-components";

export const MyCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #3498db;
  padding: 0 0 16px 0;
  margin: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: max-content;
  min-width: 300px;
  max-height: 700px;

  p {
    margin: 8px 0;
  }

  h2 {
    font-size: 2em;
    margin-bottom: 5px;
    color: #3498db;
  }

  h5 {
    margin: 0;
    padding: 5px;
  }

  &:hover {
    transform: scale(1.01);
    opacity: 0.8;
    cursor: pointer;
    background-color: #f0f0f0;
  }

  &:active {
    transform: scale(0.99);
  }
`;
