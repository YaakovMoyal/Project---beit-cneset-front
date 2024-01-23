import { useEffect, useState } from "react";
import axios from "axios";
import { BeitCneset } from "../interfaces/beitCnesetIF.ts";
import SearchComponent from "../components/Search.tsx";
import AllBeitCneset from "../components/AllBeitCneset.tsx";

const AllBeitCnesetPage = () => {
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

  const handleSearch = (term: string) => {
    setResults(
      originalData.filter(
        (item) =>
          item.name.includes(term) ||
          item.address.includes(term) ||
          item.community.includes(term)
      )
    );
  };

  return (
    <>
      <SearchComponent onSearch={handleSearch} />

      <AllBeitCneset results={results} />
    </>
  );
};

export default AllBeitCnesetPage;
