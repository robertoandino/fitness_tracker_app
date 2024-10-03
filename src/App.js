import React from "react";
import HomePage from "./frontend/components//HomePage/HomePage";
import Header from "./frontend/components//HomePage/Header";
import Footer from "./frontend/components//HomePage/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
