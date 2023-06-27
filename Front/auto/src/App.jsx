import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Workers from "./pages/Workers";
import Services from "./pages/Services";
import Header from "./components/Header";
import Main from "./pages/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
