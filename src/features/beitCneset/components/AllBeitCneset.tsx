import { MyDiv } from "../../global/style/MyDiv.styled";
import { BeitCnesetIF } from "../interfaces/beitCnesetIF";
import Card from "./Card";

interface AllBeitCnesetProps {
  results: BeitCnesetIF[];
}

export default function AllBeitCneset({ results }: AllBeitCnesetProps) {
  return (
    <MyDiv $flex_direction="row">
      {results.map((bc, i: number) => {
        const { name, community, address, gabai, tfilot, image, URLaddress } =
          bc;

        return (
          <Card
            URLaddress={URLaddress}
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
