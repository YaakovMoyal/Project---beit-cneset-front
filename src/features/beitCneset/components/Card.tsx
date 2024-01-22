import { BeitCneset } from "../interfaces/beitCnesetIF";
import { MyCard } from "../../global/style/Card.styled";
import { MyBox } from "../../global/style/MyBox.styled";
import { FC } from "react";
import { DivImage } from "../../global/style/DivImage.styled";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../global/routers/routesModel";

const Card: FC<BeitCneset> = ({
  name,
  community,
  address,
  gabai,
  tfilot,
  image,
}) => {
  const navigate = useNavigate();
  return (
    <MyCard onClick={() => navigate(`${ROUTES.home}/${name}`)}>
      <DivImage
        $backgroundImage={image}
        $background_size="cover"
        $w="100%"
      ></DivImage>
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
    </MyCard>
  );
};

export default Card;
