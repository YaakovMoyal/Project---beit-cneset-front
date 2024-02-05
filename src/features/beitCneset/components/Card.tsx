import { BeitCnesetIF } from '../interfaces/beitCnesetIF';
import { MyCard } from '../../global/style/Card.styled';
import { FC, useState } from 'react';
import { DivImage } from '../../global/style/DivImage.styled';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../global/router/routesModel';
import { MyDiv } from '../../global/style/MyDiv.styled';
import { MyButton } from '../../global/style/MyButton.styled';
import { FaEdit } from 'react-icons/fa';

const Card: FC<BeitCnesetIF> = ({
  name,
  community,
  address,
  gabai,
  tfilot,
  image,
}) => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  return (
    <MyCard onClick={() => navigate(`${ROUTES.home}/${name}`)}>
      <DivImage
        $backgroundImage={image}
        $background_size="cover"
        $max_h="180px"
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
      <MyButton
        onClick={(e) => {
          e.stopPropagation();
          setShowMore(!showMore);
        }}
      >
        {showMore ? 'CLOSE' : 'SHOW MORE'}
      </MyButton>
      <Link
        to={`edit/${name}`}
        onClick={(e) => {
          e.stopPropagation();
          // setShowMore(!showMore);
        }}
      >
        <FaEdit />
      </Link>

      {showMore && (
        <MyDiv>
          <h3>{address}</h3>
          <h4>איש קשר</h4>
          <h5>{gabai.name}</h5>
          <h5>{gabai.phone}</h5>
          <h5>{gabai.email}</h5>
        </MyDiv>
      )}
    </MyCard>
  );
};

export default Card;
