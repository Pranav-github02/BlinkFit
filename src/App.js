import "./App.css";
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Shop from "./components/Shop/Shop"
import Workout from "./components/Workouts/Workout"
import Trainers from "./components/About/Trainers"

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
        <Route path="/trainers" element={<Trainers />} />
      </Routes>
    </div>
  );
}

export default App;
