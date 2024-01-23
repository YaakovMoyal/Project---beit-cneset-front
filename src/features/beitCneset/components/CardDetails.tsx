import { BeitCneset } from "../interfaces/beitCnesetIF";
import { MyCardDetails } from "../../global/style/CardDetails.styled";
import { MyBox } from "../../global/style/MyBox.styled";
import { FC } from "react";
import { MyDiv } from "../../global/style/MyDiv.styled";
import OpenLayersMap from "../../global/components/Map";
import ImageForDetails from "./ImageForDetails";
import InfoForDetails from "./InfoForDetails";
import TfilotForDetails from "./TfilotForDetails";

const CardDetails: FC<BeitCneset> = ({
  name,
  community,
  address,
  gabai,
  tfilot,
  image,
}) => {
  return (
    <MyCardDetails>
      <MyDiv
        $padding="25px"
        $w="100%"
        $flex_direction="row"
        $justify_content="space-between"
      >
        <ImageForDetails image={image} />

        <InfoForDetails name={name} community={community} gabai={gabai} />
      </MyDiv>

      <MyDiv
        $flex_direction="row"
        $w="85%"
        $justify_content="space-between"
        $align_content="flex-end"
        $border_radius="6px"
        $border="1px solid #E5E6E5"
        $padding="30px"
        $margin="auto"
      >
        <MyBox>
          <span>{address}</span>
          <OpenLayersMap />
        </MyBox>

        <TfilotForDetails tfilot={tfilot} />
      </MyDiv>
    </MyCardDetails>
  );
};

export default CardDetails;
