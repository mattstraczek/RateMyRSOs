import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./RSO_Page.css";

function RSO_Page() {
  const navigate = useNavigate();

  const location = useLocation();
  const rsoId = location.search.split("=").pop();
  const rsoName = location.pathname.split("/").pop().replace(/%20/g, " ");

  const [rso, setRSO] = useState({});
  const [userState, setUserState] = useState("user");

  useEffect(() => {
    console.log(`Loaded ${rsoName} page`);

    async function fetchData() {
      const response = await fetch(
        `http://localhost:4000/api${location.pathname}?id=${rsoId}`
      );
      const json = await response.json();
      //console.log(json[0]);
      setRSO(json[0]);
    }
    fetchData();
  }, [rsoId, rsoName, location.pathname]);

  // Handle Click -> Delete
  const handleDelete = (id) => {
    let confirmation = window.confirm(
      `Are you sure you want to delete ${rsoName}?`
    );
    if (confirmation === true) {
      async function requestData() {
        const response = await fetch(
          `http://localhost:4000/api/rso/id=${rsoId}`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: rsoId }),
          }
        );
        if (response.ok) {
          // console.log(`Deleted ${rsoName}`);
          window.confirm(`${rsoName} has been deleted`);
          navigate("/");
        } else {
          window.confirm(
            `ERROR! Failed to delete ${rsoName}\nPlease try again.`
          );
          setUserState("user");
          window.location.reload();
        }
      }
      requestData();
    } else {
      return;
    }
  };

  // Handle Click -> Switch between admin and user
  const handleSwitch = () => {
    if (userState === "user") {
      setUserState("admin");
    } else if (userState === "admin") {
      setUserState("user");
    }
  };

  // Handle Click -> Submit
  const handleSubmit = () => {
    let confirmation = window.confirm(
      `Are you sure you want to update ${rsoName}?\n WARNING: This will overwrite the current information.`
    );
    if (confirmation === true) {
      async function requestData() {
        const inputValues = document.querySelectorAll(".rso--inputs");
        const response = await fetch(
          `http://localhost:4000/api${location.pathname}?id=${rsoId}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: rsoId,
              ContactEmail: inputValues[0].value,
              YearEstablished: inputValues[1].value,
              Website: inputValues[2].value,
              Facebook: inputValues[3].value,
              Instagram: inputValues[4].value,
            }),
          }
        );

        // Notify user of success or failure
        if (response.ok) {
          window.confirm(`${rsoName} has been updated`);
        } else {
          window.confirm(
            `ERROR! Failed to update ${rsoName}\nPlease check your inputs before try again.`
          );
        }
        setUserState("user");
        window.location.reload();
      }
      requestData();
    } else {
      return;
    }
  };

  // JSX
  function webDisplay() {
    if (userState === "user") {
      return (
        <ul className="rso--info-list">
          {Object.keys(rso).map((key, index) =>
            rso[key] && !["RSOId", "RSOName"].includes(key) ? (
              <li className="rso--info-item" key={index}>
                <span style={{ fontWeight: 700 }}>{key}</span>: {rso[key]}
              </li>
            ) : null
          )}
        </ul>
      );
    } else if (userState === "admin") {
      return (
        <>
          <ul className="rso--info-list">
            {Object.keys(rso).map((key, index) =>
              !["RSOId", "RSOName"].includes(key) ? (
                <li className="rso--info-item" key={index}>
                  <span style={{ fontWeight: 700 }}>{key}</span>:{" "}
                  <input
                    type="text"
                    defaultValue={rso[key]}
                    className="rso--inputs"
                  />
                </li>
              ) : null
            )}
          </ul>
          <button className="btn" onClick={() => handleSubmit()}>
            Submit
          </button>
          <button className="btn" onClick={() => handleDelete()}>
            Delete
          </button>
        </>
      );
    }
  }

  return (
    <div className="RSO_Page">
      <div className="header-bar">
        <h1 className="rso__heading"> {rsoName} </h1>
        <button className="btn" onClick={() => handleSwitch()}>
          {" "}
          Switch To {userState === "user" ? "Admin" : "User"}{" "}
        </button>
      </div>
      {webDisplay()}
    </div>
  );
}

export default RSO_Page;
