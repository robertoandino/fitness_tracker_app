import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./frontend/components/HomePage/HomePage";
import Header from "./frontend/components/HomePage/Header";
import Footer from "./frontend/components/HomePage/Footer";
import LogWorkout from "./frontend/components/Workouts/LogWorkout";
import Progress from "./frontend/components/Workouts/Progress";
import Profile from "./frontend/components/Profile/Profile";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="log-workout" element={<LogWorkout />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
