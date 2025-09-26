import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import AboutUs from "../AboutUs/AboutUs";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
