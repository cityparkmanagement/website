import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index/Index";
import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Dispute from "./pages/Dispute/Dispute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dispute" element={<Dispute />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
