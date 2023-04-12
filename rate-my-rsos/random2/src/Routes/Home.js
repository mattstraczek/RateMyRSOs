import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import "./Home.css";

function useHandleRSOClick() {
  const navigate = useNavigate();

  const handleRSOClick = (item) => {
    // const new_url = "rso/" + item.RSOName;
    const new_url = `rso/${item.RSOName}?id=${item.RSOId}`;
    navigate(new_url);
    // console.log(`You clicked on ${item.RSOName}`);
  };

  return handleRSOClick;
}

function useHandleAddRSO() {
  const navigate = useNavigate();

  const handleAddRSO = () => {
    navigate("/add_rso");
  };

  return handleAddRSO;
}

function useHandleAdvancedSearch() {
  const navigate = useNavigate();

  const handleAdvancedSearch = () => {
    navigate("/search");
  };

  return handleAdvancedSearch;
}

function Home() {
  const [all_rsos, setAllRSOs] = useState([]);
  const [current_rsos, setCurrentRSOS] = useState([]);
  const handleRSOClick = useHandleRSOClick();
  const handleAddRSO = useHandleAddRSO();
  const handleAdvancedSearch = useHandleAdvancedSearch();
  // const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    async function fetchFilteredData() {
      const response = await fetch("http://localhost:4000/api/search/" + value);
      const json = await response.json();
      console.log(json);

      setCurrentRSOS(json);
    }
    fetchFilteredData();
  };

  useEffect(() => {
    console.log("Loaded Home Page");

    async function fetchData() {
      const response = await fetch("http://localhost:4000/api/");
      const json = await response.json();
      //console.log(json);

      setAllRSOs(json);
      setCurrentRSOS(json);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="homepage__header-bar">
        <h1 className="homepage__heading"> RateMyRSOs </h1>
        <button className="btn" onClick={() => handleAddRSO()}>
          Add a New RSO
        </button>
      </div>
      <div className="homepage__search-bar">
        <SearchBar onSearch={handleSearch}></SearchBar>
        <button className="btn" onClick={() => handleAdvancedSearch()}>
          Advance Search
        </button>
      </div>
      <ul>
        {current_rsos.map((item) => (
          <li
            className="rso__item"
            key={item.RSOId}
            onClick={() => handleRSOClick(item)}
          >
            {item.RSOName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
