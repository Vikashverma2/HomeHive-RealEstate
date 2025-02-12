import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPgae"; 
import ScrollToSection from "./component/ScrollToSection";


/* Copyright © VikashVerma. */ 

function App() {
  return (
    <HashRouter>
      <ScrollToSection/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<LoginPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
