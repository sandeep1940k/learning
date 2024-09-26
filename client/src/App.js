import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary.js';
import { ToastContainer } from 'react-toastify';

import './styles/main.scss'
import 'react-toastify/dist/ReactToastify.css';
import 'remixicon/fonts/remixicon.css';

import Login from "./pages/Login.js";
import Signup from './pages/Signup.js';
import Dashboard from './pages/Dashboard.js';


function App() {
  return (
    <ErrorBoundary>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;