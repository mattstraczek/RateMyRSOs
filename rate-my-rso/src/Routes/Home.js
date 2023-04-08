import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../Components/SearchBar';
import './Home.css'

function useHandleRSOClick() {
  const navigate = useNavigate();

  const handleRSOClick = (item) => {
    let new_url = "rso/" + item.RSOName
    navigate(new_url);
    console.log(`You clicked on ${item.RSOName}`);
  };

  return handleRSOClick;
}

function Home() {
  const [all_rsos, setAllRSOs] = useState([]);
  const [current_rsos, setCurrentRSOS] = useState([]);
  const handleRSOClick = useHandleRSOClick();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
    const filteredRSOs = all_rsos.filter(rso => rso.RSOName.toLowerCase().includes(value.toLowerCase()));
    setCurrentRSOS(filteredRSOs);
  };

  useEffect(() => {
    console.log("Loaded Home Page")

    async function fetchData() {
      const response = await fetch('http://localhost:4000/api/');
      const json = await response.json();
      console.log(json);

      setAllRSOs(json)
      setCurrentRSOS(json)
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1> Home </h1>
      <SearchBar onSearch={handleSearch}></SearchBar>
      <ul>
        {current_rsos.map((item) => (
          <li key={item.RSOId} onClick={() => handleRSOClick(item)}>{item.RSOName}</li>
        ))}
      </ul>
    </div>
    
  )};

export default Home;