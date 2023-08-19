import React from 'react';
import './App.css';
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Gif } from "./components/pages/Gif";
import { Home } from "./components/pages/Home";
import { Contact } from "./components/pages/Contact";
import { SupportMe } from "./components/pages/SupportMe";
import { London } from "./components/pages/London";
import { Antielab } from "./components/pages/Antielab";
import { Pride } from "./components/pages/Pride";
import { Routine } from "./components/pages/Routine";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Gif />} />
        <Route index element={<Gif />} />
        <Route path="gif" element={<Gif />} />
        <Route path="home" element={<Home />} />
        <Route path="routine" element={<Routine />} />
        <Route path="pride" element={<Pride />} />
        <Route path="antielab" element={<Antielab />} />
        <Route path="london" element={<London />} />
        <Route path="contact" element={<Contact />} />
        <Route path="supportme" element={<SupportMe />} />
        <Route path="*" element={<Gif />} />
      </Routes>
    </div>
  );
}

export default App;
