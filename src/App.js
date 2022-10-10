import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Shop from './Components/Shop/Shop'
import Workout from './Components/Workouts/Workout'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/workout" element={<Workout />} />
      </Routes>
    </div>
  );
}

export default App;
