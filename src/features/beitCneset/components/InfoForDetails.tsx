import { MyDiv } from "../../global/style/MyDiv.styled";
import { Gabai } from "../../users/interfaces/usersIF";

interface InfoForDetailsProps {
  name: string;
  community: string;
  gabai: Gabai;
}

export default function InfoForDetails({
  name,
  community,
  gabai,
}: InfoForDetailsProps) {
  return (
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
  );
}
