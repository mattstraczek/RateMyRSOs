import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchRSO.css";

function SearchRSO() {
  const [rsos, setRSOs] = useState([]);
  const rsoAttributes = [
    "RSO Name",
    "Rating",
    "Department",
    "First Name",
    "Last Name",
    "Size",
  ];

  const handleSearch = () => {
    const rsoName = document.querySelector(".filter--rso-name").value;
    const minRating =
      document.querySelector(".filter--min-rating").value === ""
        ? 1
        : document.querySelector(".filter--min-rating").value;
    const maxRating =
      document.querySelector(".filter--max-rating").value === ""
        ? 5
        : document.querySelector(".filter--max-rating").value;
    const department = document.querySelector(".filter--department").value;
    const officerFirstName = document.querySelector(
      ".filter--officer-first-name"
    ).value;
    const officerLastName = document.querySelector(
      ".filter--officer-last-name"
    ).value;
    const minSize =
      document.querySelector(".filter--min-size").value === ""
        ? 0
        : document.querySelector(".filter--min-size").value;
    const maxSize =
      document.querySelector(".filter--max-size").value === ""
        ? 50000
        : document.querySelector(".filter--max-size").value;

    // check inputs

    const url = `http://localhost:4000/api/search?rso_name=${rsoName}&min_rating=${minRating}&max_rating=${maxRating}&department=${department}&officer_first_name=${officerFirstName}&officer_last_name=${officerLastName}&min_size=${minSize}&max_size=${maxSize}`;
    async function requestData() {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setRSOs(json);
    }
    requestData();
  };

  return (
    <>
      <h1>Search RSOs by Filters</h1>
      <ul>
        <li className="filter__item">
          <h3>RSO Name</h3>
          <input
            type="text"
            placeholder="RSO Name"
            className="filter--rso-name"
          />
        </li>
        <li className="filter__item">
          <h3>Select Rating</h3>
          <div>
            <input
              type="text"
              placeholder="min (default: 1)"
              className="filter--min-rating"
            />
            <span style={{ fontWeight: 700 }}>to</span>
            <input
              type="text"
              placeholder="max (default: 5)"
              className="filter--max-rating"
            />
          </div>
        </li>

        <li className="filter__item">
          <h3>Select Department</h3>
          <input
            type="text"
            placeholder="department"
            className="filter--department"
          />
        </li>

        <li className="filter__item">
          <h3>Select Officers</h3>
          <input
            type="text"
            placeholder="first name"
            className="filter--officer-first-name"
          />
          <input
            type="text"
            placeholder="last name"
            className="filter--officer-last-name"
          />
        </li>

        <li className="filter__item">
          <h3>Select size </h3>
          <input
            type="text"
            placeholder="min (default: 0)"
            className="filter--min-size"
          />
          <span style={{ fontWeight: 700 }}>to</span>
          <input
            type="text"
            placeholder="max (default: 50000)"
            className="filter--max-size"
          />
        </li>
      </ul>
      <button className="btn" onClick={() => handleSearch()}>
        Search
      </button>

      <table>
        <thead>
          <tr>
            {rsoAttributes.map((attr, index) => (
              <th key={index}>{attr}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rsos.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default SearchRSO;
