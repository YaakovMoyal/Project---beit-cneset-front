import { useEffect, useState } from 'react';
import axios from 'axios';
import { BeitCnesetIF } from '../interfaces/beitCnesetIF.ts';
import SearchComponent from '../components/Search.tsx';
import AllBeitCneset from '../components/AllBeitCneset.tsx';
import { MyDiv } from '../../global/style/MyDiv.styled.ts';

const AllBeitCnesetPage = () => {
  const [results, setResults] = useState<BeitCnesetIF[]>([]);
  const [originalData, setOriginalData] = useState<BeitCnesetIF[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/beit-cneset')
      .then((res) => {
        const { data } = res;
        setResults(data);
        setOriginalData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
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
      <MyDiv $w="100%" $align_content="flex-end">
        <SearchComponent onSearch={handleSearch} />
      </MyDiv>

      <AllBeitCneset results={results} />
    </>
  );
};

export default AllBeitCnesetPage;
