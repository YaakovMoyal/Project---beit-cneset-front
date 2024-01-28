import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { TokenIF } from "../../users/interfaces/tokenIF";

export default function EditBeitCnesetPage() {
  const { bc } = useParams();

  const token = localStorage.getItem("token");
  if (!token) return "please login first";

  const userInfo: TokenIF = jwtDecode(token);
  if (!userInfo.isAdmin)
    return (
      <>
        <h1>Permission Denied</h1>
        <h2>please try again with admin user</h2>{" "}
      </>
    );

  return (
    <>
      in Edit Beit Cneset Page
      <div>{userInfo._id}</div>
      <div>{bc}</div>
    </>
  );
}
