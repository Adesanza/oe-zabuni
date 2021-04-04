import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { filterBillboardData } from "../../redux/filter-Billboard/filterBillboardReducer";
import "./search-input-field.css";

const SearchInputField = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (evet) => {
    const { value } = evet.target;
    setInputValue(value);
    dispatch(filterBillboardData({type:'search',keyword:value}));
  }
  return (
    <div className="searchContainer">
      {/* <i className="fa fa-search searchIcon"></i> */}
      <FaSearch className="searchIcon"/>
      <input
        className="searchBox"
        type="search"
        placeholder="Search billboard name"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInputField;
