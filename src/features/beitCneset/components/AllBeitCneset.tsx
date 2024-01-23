import { MyDiv } from "../../global/style/MyDiv.styled";
import { BeitCneset } from "../interfaces/beitCnesetIF";
import Card from "./Card";

interface AllBeitCnesetProps {
  results: BeitCneset[];
}

export default function AllBeitCneset({ results }: AllBeitCnesetProps) {
  return (
    <MyDiv $flex_direction="row">
      {results.map((bc, i: number) => {
        const { name, community, address, gabai, tfilot, image } = bc;

        return (
          <Card
            image={image}
            name={name}
            address={address}
            community={community}
            gabai={gabai}
            tfilot={tfilot}
            key={i}
          />
        );
      })}
    </MyDiv>
  );
}
