
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Completed from './Pages/Completed/Completed';
import ToDo from './Pages/ToDo/ToDo';
import Calendar from './Pages/Calendar/Calendar';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div>
      <h2 className='mt-10 mb-5 text-xl font-bold text-center '>Task Management Tool</h2>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="completed" element={<Completed />} />
        <Route path="todo" element={<ToDo />} />
        <Route path="calendar" element={<Calendar />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
