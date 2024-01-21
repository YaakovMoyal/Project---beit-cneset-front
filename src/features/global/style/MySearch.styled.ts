import styled from "styled-components";

export const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: flex-end;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  outline: none;
  width: 200px;
  transition: width 0.3s ease-in-out;

  &:hover {
    width: 250px;
  }
`;

export const SearchButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #45a049;
  }
`;
