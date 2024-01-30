import {
  SearchBox,
  SearchInput,
  SearchButton,
} from '../../global/style/MySearch.styled';
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MyDiv } from '../../global/style/MyDiv.styled';

interface SearchComponentProps {
  onSearch: (term: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm]);

  return (
    <MyDiv $align_content="flex-end">
      <SearchBox>
        <SearchInput
          type="text"
          placeholder=" ... חפש בית כנסת"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton onClick={() => onSearch(searchTerm)}>
          <FaSearch />
        </SearchButton>
      </SearchBox>
    </MyDiv>
  );
};

export default SearchComponent;
