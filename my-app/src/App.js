import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ActionAreaCard from './components/ActionCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectFlightPage from './SelectFlightPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ActionAreaCard />} />
          <Route path="/SelectFlightPage" element={<SelectFlightPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
