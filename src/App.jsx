import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPgae"; // ✅ Fix typo in filename


/* Copyright © VikashVerma. */ 

function App() {
  return (
    <HashRouter>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<LoginPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
