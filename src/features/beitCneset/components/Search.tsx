// import {
//   SearchBox,
//   SearchInput,
//   SearchButton,
// } from "../../global/style/MySearch.styled";
// import { useState } from "react";

// const Search = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const [results, setResults] = useState<string[]>([]);

//   const handleSearch = () => {
//     setResults(results.filter((item) => item.includes(searchTerm)));
//   };

//   return (
//     <div>
//       <SearchBox>
//         <SearchInput
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <SearchButton onClick={handleSearch}>Search</SearchButton>
//       </SearchBox>
//     </div>
//   );
// };

// export default Search;
