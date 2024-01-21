import { useParams } from "react-router-dom";
import { BeitCneset } from "../interfaces/beitCnesetIF";
import { MyBox } from "../../global/style/MyBox.styled";
import { MyDiv } from "../../global/style/MyDiv.styled";
import CardDetails from "../components/CardDetails";
import { useEffect, useState } from "react";
import axios from "axios";

const BeitCnesetDetailsPage = () => {
  const [bcSelected, setBcSelected] = useState<BeitCneset>();

  const { bc } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/beit-cneset/${bc}`)
      .then((res) => {
        const { data } = res;
        setBcSelected(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!bcSelected) {
    return (
      <MyBox>
        <p>לא נמצאו תוצאות</p>
      </MyBox>
    );
  }

  const { name, community, address, gabai, tfilot, image } = bcSelected;

  return (
    <MyDiv>
      <CardDetails
        image={image}
        name={name}
        address={address}
        community={community}
        gabai={gabai}
        tfilot={tfilot}
      />
    </MyDiv>
  );
};

export default BeitCnesetDetailsPage;
