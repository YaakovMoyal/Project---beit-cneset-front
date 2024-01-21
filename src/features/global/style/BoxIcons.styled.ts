import styled from "styled-components";

export const BoxIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    border: 1.4px solid gray;
    border-radius: 40%;
    color: gray;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    text-decoration: none;
    margin: 20px;
  }

  a:hover {
    transform: scale(1.1);
    cursor: pointer;
    opacity: 0.6;
  }
`;
