import { useParams } from "react-router-dom";
import { MyDiv } from "../../global/style/MyDiv.styled";

export default function EditBeitCnesetPage() {
  const { bc } = useParams();

  return (
    <MyDiv>
      in Edit Beit Cneset Page
      <div>{bc}</div>
    </MyDiv>
  );
}
