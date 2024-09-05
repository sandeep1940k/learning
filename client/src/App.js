import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/main.scss'

import Login from "./pages/Login.js";
import ErrorBoundary from './ErrorBoundary.js';
import Signup from './pages/Signup.js';



function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;