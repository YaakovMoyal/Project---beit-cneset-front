import styled from "styled-components";

interface DivProps {
  $flex_direction?: "row";
  $align_content?:
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between"
    | "stretch";
  $justify_content?:
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between"
    | "space-evenly";
  $align_items?: "flex-start" | "flex-end" | "stretch" | "baseline";
  $h?: string;
  $w?: string;
  $min_width?: string;
  $min_height?: string;
  $max_width?: string;
  $max_height?: string;
  $margin?: string | number;
  $padding?: string | number;
  $border?: string;
  $border_radius?: string;
}

export const MyDiv = styled.div<DivProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ $flex_direction }) => $flex_direction || "column"};
  align-content: ${({ $align_content }) => $align_content || "center"};
  justify-content: ${({ $justify_content }) => $justify_content || "center"};
  align-items: ${({ $align_items }) => $align_items || "center"};
  height: ${({ $h }) => $h};
  width: ${({ $w }) => $w};
  min-width: ${({ $min_width }) => $min_width};
  min-height: ${({ $min_height }) => $min_height};
  max-width: ${({ $max_width }) => $max_width};
  max-height: ${({ $max_height }) => $max_height};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  border: ${({ $border }) => $border};
  border-radius: ${({ $border_radius }) => $border_radius};
`;
