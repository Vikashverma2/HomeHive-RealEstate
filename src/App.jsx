import { HashRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPgae from "./Pages/LoginPgae";


/* Copyright © VikashVerma. */

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<LoginPgae />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
