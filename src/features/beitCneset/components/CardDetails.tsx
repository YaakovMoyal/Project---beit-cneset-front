import { BeitCneset } from "../interfaces/beitCnesetIF";
import { MyCardDetails } from "../../global/style/CardDetails.styled";
import { MyBox } from "../../global/style/MyBox.styled";
import { FC } from "react";
import { DivImage } from "../../global/style/DivImage.styled";
import { MyDiv } from "../../global/style/MyDiv.styled";
import OpenLayersMap from "../../global/components/Map";

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
        <DivImage
          $backgroundImage={image}
          $background_size="contain"
          $h="40vh"
          $w="60%"
        ></DivImage>
        <MyDiv
          $justify_content="flex-start"
          $align_items="flex-end"
          $margin="0 20px 0 0"
        >
          <h1>{name}</h1>
          <h2>קהילה: {community}</h2>
          <br />
          <h5>{`${gabai.name} ${gabai.phone}`}</h5>
          <h5>{gabai.email}</h5>
        </MyDiv>
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
        <MyBox>
          {tfilot.map((t, i) => (
            <h3 key={i}>
              {t.tfila} {t.time}
            </h3>
          ))}
        </MyBox>
      </MyDiv>
    </MyCardDetails>
  );
};

export default CardDetails;
