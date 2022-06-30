
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Completed from './Pages/Completed/Completed';
import ToDo from './Pages/ToDo/ToDo';
import Calendar from './Pages/Calendar/Calendar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="completed" element={<Completed />} />
        <Route path="todo" element={<ToDo />} />
        <Route path="calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;
