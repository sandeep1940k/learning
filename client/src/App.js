import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import './styles/main.scss';
import 'remixicon/fonts/remixicon.css';

import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
