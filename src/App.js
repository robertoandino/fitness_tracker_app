import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./frontend/components/HomePage/HomePage";
import Header from "./frontend/components/HomePage/Header";
import Footer from "./frontend/components/HomePage/Footer";
import LogWorkout from "./frontend/components/Workouts/LogWorkout";
import Progress from "./frontend/components/Workouts/Progress";
import Profile from "./frontend/components/Profile/Profile";
import Login from "./frontend/components/Login/Login";
import Register from "./frontend/components/Login/Register";
import './App.css';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginSuccess = (token) => {
    setIsAuthenticated(true);
    localStorage.setItem('authToken', token);
  }

  return (
    <Router>
      <div className="App">
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="log-workout" element={<LogWorkout />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/login" element={<Login loginSuccess={loginSuccess}/>} />
            <Route path="register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
