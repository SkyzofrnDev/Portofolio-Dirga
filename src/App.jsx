import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Test } from "./pages";
import "./App.css";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Test" element={<Test/>} />
      </Routes>
    </>
  );
}

export default App;
