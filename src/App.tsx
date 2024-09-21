import "./App.scss";
import Navbar from "./components/Navbar";

import { Outlet, Route, Routes } from "react-router-dom";
import VenuePage from "./pages/VenuePage";
import HomePage from "./pages/HomePage";
import RsvpPage from "./pages/RsvpPage";
import DressPage from "./pages/DressPage";
import RegistryPage from "./pages/RegistryPage";
import FaqPage from "./pages/FaqsPage";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="twelve column">
          <h1 className="header-text">We Do</h1>
        </div>
      </div>
      <div className="row">
        <div className="twelve column">
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="twleve columns">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="venue" element={<VenuePage />} />
            <Route path="rsvp" element={<RsvpPage />} />
            <Route path="dress" element={<DressPage />} />
            <Route path="registry" element={<RegistryPage />} />
            <Route path="faq" element={<FaqPage />} />
          </Routes>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
