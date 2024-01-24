import { useParams } from "react-router-dom";
import { MyDiv } from "../../global/style/MyDiv.styled";
import { jwtDecode } from "jwt-decode";
import { TokenIF } from "../../users/interfaces/tokenIF";

export default function EditBeitCnesetPage() {
  const { bc } = useParams();
  const token = localStorage.getItem("token");
  if (!token) return "please login first";

  const decodedToken: TokenIF = jwtDecode(token);

  return (
    <MyDiv>
      in Edit Beit Cneset Page
      <div>{decodedToken._id}</div>
      <div>{bc}</div>
    </MyDiv>
  );
}
