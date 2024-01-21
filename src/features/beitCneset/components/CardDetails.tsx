import { BeitCneset } from "../interfaces/beitCnesetIF";
import { MyCardDetails } from "../../global/style/CardDetails.styled";
import { MyBox } from "../../global/style/MyBox.styled";
import { FC } from "react";
import { DivImage } from "../../global/style/DivImage.styled";

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
      <DivImage $backgroundImage={image} $h="70vh"></DivImage>
      <h2>{name}</h2>
      <h3>{community}</h3>
      <div>
        {tfilot.map((t, i) => (
          <p key={i}>
            {t.tfila} {t.time}
          </p>
        ))}
      </div>
      <div>
        <h4>{address}</h4>
      </div>
      <MyBox>
        <h4>איש קשר</h4>
        <h5>{gabai.name}</h5>
        <h5>{gabai.phone}</h5>
        <h5>{gabai.email}</h5>
      </MyBox>
    </MyCardDetails>
  );
};

export default CardDetails;
