import { BeitCnesetIF } from "../interfaces/beitCnesetIF";
import { MyCard } from "../../global/style/Card.styled";
import { FC, useState } from "react";
import { DivImage } from "../../global/style/DivImage.styled";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../global/router/routesModel";
import { MyDiv } from "../../global/style/MyDiv.styled";
import { MyButton } from "../../global/style/MyButton.styled";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { BoxIcons } from "../../global/style/BoxIcons.styled";
import axios from "axios";
import { TokenIF } from "../../users/interfaces/tokenIF";
import { jwtDecode } from "jwt-decode";

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

  const handleDelete = async (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    const token = localStorage.getItem("token");
    if (!token) return alert("please login first");

    const userInfo: TokenIF = jwtDecode(token);
    if (!userInfo.isAdmin)
      return alert("Permission Denied, please try again with admin user");
    try {
      await axios
        .delete(`http://localhost:3000/beit-cneset/${name}`)
        .then((res) => console.log(res.data));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
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
        {showMore ? "CLOSE" : "SHOW MORE"}
      </MyButton>
      <BoxIcons $height="30px" $width="30px" $border="none">
        <Link to="" onClick={handleDelete}>
          <AiTwotoneDelete />
        </Link>
        <Link
          to={`edit/${name}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <FaEdit />
        </Link>
      </BoxIcons>

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
