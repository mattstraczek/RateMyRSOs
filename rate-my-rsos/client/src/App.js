import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";
import RSO_Page from "./Routes/RSO_Page";
import AddRSO from "./Routes/AddRSO";
import SearchRSO from "./Routes/SearchRSO";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rso/:rso_name" element={<RSO_Page />} />
          <Route path="/add_rso" element={<AddRSO />} />
          <Route path="/search" element={<SearchRSO />} />
        </Routes>
      </div>
    </BrowserRouter>
    // <h1> Hi </h1>
    // <Routes>
    //     <Route path = "/home" element = {<Home></Home>} />
    //     <Route path = "/RSO_Page" element = {<RSO_Page></RSO_Page>} />
    //     <Route path = "" element = {<Home></Home>} />
    // </Routes>
  );
}

export default App;
