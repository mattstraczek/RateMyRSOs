import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddRSO.css";

function useHandleSubmit() {
  const navigate = useNavigate();

  const handleRSOClick = (rsoId, attribute) => {
    let confirmation = window.confirm(`Are you sure you want to add this RSO?`);
    if (confirmation === true) {
      let inputValues = Array.from(
        document.querySelectorAll(".rso__attr--inputs")
      ).map((item) => item.value);
      console.log(inputValues);

      inputValues.unshift(rsoId + 1);
      const bodyJson = Object.fromEntries(
        attribute.map((item, index) => [item, inputValues[index]])
      );

      async function requestData() {
        const inputValues = document.querySelectorAll(".rso__attr--inputs");
        const response = await fetch("http://localhost:4000/api/add_rso", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyJson),
        });
        // Notify user of success or failure
        if (response.ok) {
          window.confirm(`${bodyJson.RSOName} has been added`);
          navigate("/");
        } else {
          window.confirm(
            `ERROR! Failed to update ${bodyJson.RSOName}\nPlease check your inputs before try again.`
          );
          window.location.reload();
        }
      }
      requestData();
    } else {
      return;
    }
  };

  return handleRSOClick;
}

function AddRSO() {
  const handleSubmit = useHandleSubmit();
  const [attribute, setAttribute] = useState([]);
  const [lastRSOId, setLastRSOId] = useState(0);

  useEffect(() => {
    console.log("Loaded Add RSO Page");

    async function fetchData() {
      const response = await fetch("http://localhost:4000/api/add_rso");
      const json = await response.json();
      console.log(json);
      setLastRSOId(json[0].RSOId);
      setAttribute(Object.keys(json[0]));
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1> Add an RSO </h1>
      <ul>
        {attribute.map((item, index) =>
          index !== 0 ? (
            <li className="rso__attr" key={index}>
              <span style={{ fontWeight: 700 }}>{item}:</span>
              <input
                type="text"
                placeholder={item}
                className="rso__attr--inputs"
              />
            </li>
          ) : null
        )}
      </ul>
      <button
        className="btn"
        onClick={() => handleSubmit(lastRSOId, attribute)}
      >
        Submit
      </button>
    </div>
  );
}

export default AddRSO;
