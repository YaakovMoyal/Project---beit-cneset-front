import styled from "styled-components";

interface BoxProps {
  $backgroundImage: string;
  $background_size: "cover" | "contain";
  $h?: string;
  $w?: string;
}

export const DivImage = styled.div<BoxProps>`
  height: ${(props) => (props.$h ? props.$h : "30vh")};
  width: ${(props) => (props.$w ? props.$w : "50%")};
  background-image: url(${(props) => props.$backgroundImage});
  background-size: ${(props) => props.$background_size};
  background-repeat: no-repeat;
`;
