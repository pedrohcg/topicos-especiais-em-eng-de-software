import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewFlooring from "../pages/NewFlooring";
import Floorings from "../pages/Floorings";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/newFlooring" element={<NewFlooring />} />
        <Route path="/floorings" element={<Floorings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
