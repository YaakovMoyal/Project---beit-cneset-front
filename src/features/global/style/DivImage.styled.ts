import styled from "styled-components";

interface BoxProps {
  $backgroundImage: string;
  $background_size: "cover" | "contain";
  $h?: string;
  $w?: string;
  $max_h?: string;
}

export const DivImage = styled.div<BoxProps>`
  height: ${(props) => (props.$h ? props.$h : "30vh")};
  max-height: ${({ $max_h }) => $max_h};
  width: ${(props) => (props.$w ? props.$w : "50%")};
  background-image: url(${(props) => props.$backgroundImage});
  background-size: ${(props) => props.$background_size};
  background-repeat: no-repeat;
`;
