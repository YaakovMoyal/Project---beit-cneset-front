import styled from "styled-components";

export const MyCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 0 16px 0;
  margin: 6px 0;
  width: -webkit-fill-available;
  height: 100vh;
  // max-height: 400px;

  p {
    margin: 8px 0;
  }

  h1 {
    font-size: 2.8em;
    margin: 10px 0;
    color: #3498db;
  }

  h2 {
    font-size: 1.5em;
    margin: 8px 0;
  }

  span {
    font-size: 1.1em;
    margin: 5px 0;
  }

  h5 {
    margin: 0;
    padding: 5px;
  }
`;
