import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/pages/Dashboard';
import Adduser from './components/pages/Adduser';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/add-user" element={<Adduser/>}></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
