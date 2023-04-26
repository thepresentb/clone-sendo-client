import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { Category } from "./components/Category/Category";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="category" element={<Category />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
