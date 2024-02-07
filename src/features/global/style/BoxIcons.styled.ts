import styled from "styled-components";

interface BoxIconsProps {
  $height?: string;
  $width?: string;
  $border?: "none";
}

export const BoxIcons = styled.div<BoxIconsProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    border: ${({ $border }) => $border || "1.4px solid gray"};
    border-radius: 40%;
    color: gray;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: ${({ $height }) => $height || "40px"};
    width: ${({ $width }) => $width || "40px"};
    text-decoration: none;
    margin: 15px;
  }

  a:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  a:active {
    transform: scale(0.99);
  }
`;
