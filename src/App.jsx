import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index/Index";
import TopNav from "./components/TopNav/TopNav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <TopNav />
      <Index />
    </BrowserRouter>
  );
}

export default App;
