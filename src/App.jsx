import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPgae from "./Pages/LoginPgae";


/* Copyright © VikashVerma. */

function App() {
  return (
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<LoginPgae />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
