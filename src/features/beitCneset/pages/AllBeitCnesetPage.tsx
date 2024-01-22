import { FaSearch } from "react-icons/fa";
import { MyDiv } from "../../global/style/MyDiv.styled.ts";
import { BeitCneset } from "../interfaces/beitCnesetIF.ts";
import Card from "../components/Card.tsx";
import {
  SearchBox,
  SearchInput,
  SearchButton,
} from "../../global/style/MySearch.styled";
import { useEffect, useState } from "react";
import axios from "axios";

const AllBeitCnesetPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<BeitCneset[]>([]);
  const [originalData, setOriginalData] = useState<BeitCneset[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/beit-cneset")
      .then((res) => {
        const { data } = res;
        setResults(data);
        setOriginalData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    setResults(
      originalData.filter(
        (item) =>
          item.name.includes(searchTerm) ||
          item.address.includes(searchTerm) ||
          item.community.includes(searchTerm)
      )
    );
  }, [searchTerm, originalData]);

  return (
    <>
      <MyDiv $align_content="flex-end">
        <SearchBox>
          <SearchInput
            type="text"
            placeholder=" ... חפש בית כנסת"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <SearchButton>
            <FaSearch />
          </SearchButton>
        </SearchBox>
      </MyDiv>

      <MyDiv $flex_direction="row">
        {results.map((bc: BeitCneset, i: number) => {
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
    </>
  );
};

export default AllBeitCnesetPage;
