import { FaSearch } from "react-icons/fa";
import "./search-input-field.css";

const SearchInputField = () => {
  return (
    <div className="searchContainer">
      {/* <i className="fa fa-search searchIcon"></i> */}
      <FaSearch className="searchIcon"/>
      <input
        className="searchBox"
        type="search"
        name="search"
        placeholder="Search billboard name"
      />
    </div>
  );
};

export default SearchInputField;
