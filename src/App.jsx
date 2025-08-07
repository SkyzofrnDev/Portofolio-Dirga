import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Test } from "./pages";
import "./App.css";
import { JobTitle } from "./layout";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
