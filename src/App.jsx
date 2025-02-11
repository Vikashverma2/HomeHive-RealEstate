import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPgae from "./Pages/LoginPgae";


/* Copyright © VikashVerma. */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<LoginPgae />} />
      </Routes>
    </Router>
  );
}

export default App;
