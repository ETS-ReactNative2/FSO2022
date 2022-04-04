import { useState, useEffect } from "react";
import axios from "axios";
import Search from './components/Search'

const List = ({list}) => {
  let index = 0;
  return (
    <div>
      {list.map(country => <p key={country.cca2}>{country.name.common}</p>)}
    </div>
  )
}

const App = () => {
  // useState
  const [countryList, setCountryList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect
  const hook = () => {
    axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
      setCountryList(response.data);
    });
  };
  useEffect(hook, []);
  // console.log(countryList)
  // functions
  const filterThis = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Search value={searchTerm} handleOnChange={filterThis} />
      <List list={countryList}/>
    </div>
  );
};

export default App;
