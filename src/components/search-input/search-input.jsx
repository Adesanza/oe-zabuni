import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { filterBillboardData } from '../../redux/filter-Billboard/filterBillboardReducer';
import './search-input.css';

const SearchInputField = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchType, setSearchType] = useState('search-by-name');
  const dispatch = useDispatch();

  const handleChange = (evet) => {
    const { value } = evet.target;
    setInputValue(value);
    dispatch(filterBillboardData({ type: searchType, keyword: value }));
  };
  return (
    <div className="search-control">
      <Form.Control
        as="select"
        name="search"
        value={searchType}
        onChange={(e) => {
          setSearchType(e.target.value);
        }}
        className="select-control name-search"
      >
        <option value="search-by-name" className="name-search">
          Search by name
        </option>
        <option value="search-by-location" className="location-search">
          Search by location
        </option>
      </Form.Control>

      {/* <Dropdown.Item as="button" onClick={() => setSearchType("search-by-name")} >Search by name</Dropdown.Item> */}
      {/* <Dropdown.Item as="button" onClick={() => setSearchType("search-by-location")} >Search by location</Dropdown.Item> */}
      <div className="searchContainer">
        {/* <i className="fa fa-search searchIcon"></i> */}
        <BiSearch className="searchIcon" />
        <input
          className="searchBox"
          type="search"
          placeholder={
            searchType === 'search-by-name'
              ? 'Search billboard name'
              : 'Search billboard location'
          }
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchInputField;
