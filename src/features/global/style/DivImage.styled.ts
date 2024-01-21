import styled from "styled-components";

interface BoxProps {
  $backgroundImage: string;
  $h?: string;
}

export const DivImage = styled.div<BoxProps>`
  width: 100%;
  height: ${(props) => (props.$h ? props.$h : "30vh")};
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px 8px 0 0;
`;
