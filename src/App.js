import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Consultant from "./pages/Consultant";
import Register from "./components/Form/Register";
import NoPage from "./pages/NoPage";
import "./assets/css/styles.scss";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/demo-asap" exact element={<Home />} />
        <Route path="/demo-asap/consultant" element={<Consultant />} />
        <Route path="/demo-asap/register" exact element={<Register />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
