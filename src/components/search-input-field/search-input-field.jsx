import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { filterBillboardData } from "../../redux/filter-Billboard/filterBillboardReducer";
import "./search-input-field.css";

const SearchInputField = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchType, setSearchType] = useState("search-by-name");
  const dispatch = useDispatch();

  const handleChange = (evet) => {
    const { value } = evet.target;
    setInputValue(value);
    dispatch(filterBillboardData({type:searchType,keyword:value}));
  }
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-split-basic" />
        <Dropdown.Menu>
          <Dropdown.Item as="button" onClick={() => setSearchType("search-by-name")} >Search by name</Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => setSearchType("search-by-location")} >Search by location</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
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
    </>
  );
};

export default SearchInputField;
