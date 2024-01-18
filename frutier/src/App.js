import React from "react";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Fruitiers from "./Components/Fruitiers";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Fruitiers />} />
            {/* <Route path="/fruits" element={<Index />} /> */}
            {/* <Route path="/new" element={<New />} /> */}
            {/* <Route exact path="/fruits/:fruitId" element={<Show />} /> */}
            {/* <Route path="fruits/:fruitId/edit" element={<Edit />} /> */}
            {/* <Route path="*" element={<FourOFour />} /> */}
          </Routes>
          </main>
        </Router>
    </div>
  );
}

export default App;
