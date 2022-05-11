import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";

const List = ({ list, tooMany }) => {
  // console.log(tooMany)
  if (tooMany) {
    return <p>Too many matches, specify another filter</p>;
  } else {
    return (
      <div>
        {list.map((country) => (
          <p key={country.cca2}>{country.name.common}</p>
        ))}
      </div>
    );
  }
};

const App = () => {
  // useState
  const [countryList, setCountryList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState(countryList);
  const [tooMany, setTooMany] = useState(false);

  // useEffect
  const hook = () => {
    axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
      setCountryList(response.data);
      setFilteredList(response.data);
    });
  };
  useEffect(hook, []);
  // console.log(countryList)

  // user-defined functions
  const isTooMany = () => {
    if (filteredList.length > 0 && filteredList.length <= 10) {
      setTooMany(false);
    } else {
      setTooMany(true);
    }
  };

  const filterThis = (e) => {
    const searchKey = e.target.value;
    // to update the input field
    setSearchTerm(searchKey);
    if (searchKey.length === 0) {
      setTooMany(false);
    }
    const newList = countryList.filter((country) => {
      const name = country.name.common.toLowerCase();
      return name.includes(searchKey.toLowerCase());
    });
    setFilteredList(newList);
    isTooMany();
    console.log(filteredList.length);
  };

  return (
    <div>
      <Search value={searchTerm} handleOnChange={filterThis} />
      <List list={filteredList} tooMany={tooMany} />
    </div>
  );
};

export default App;
