import React from 'react';
import './App.css';
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Gif } from "./components/pages/Gif";
import { Home } from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Gif />} />
        <Route index element={<Gif />} />
        <Route path="gif" element={<Gif />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
