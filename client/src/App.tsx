import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Tailwindcss from './routes/tailwindcss.routes';
import TypeScript from './routes/typescript.routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/TCSS/*" element={<Tailwindcss />} />
        <Route path="/TS/*" element={<TypeScript />} />
      </Routes>
    </Router>
  );
}

export default App;
