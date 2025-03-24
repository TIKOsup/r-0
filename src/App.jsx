import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import VitePage from "./pages/VitePage.jsx";
import GreatHouses from "./pages/HousesPage.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vite" element={<VitePage />} />
        <Route path="/houses" element={<GreatHouses />} />
      </Routes>
    </Router>
  )
}

export default App
