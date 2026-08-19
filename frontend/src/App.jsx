import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import { TowingAbout } from "./Pages/About/TowingAbout";
import { TowingServices } from "./Pages/Services/TowingServices";
import { TowingReviews } from "./Pages/Reviews/TowingReviews";
import ServiceAreas from "./Pages/ServiceAreas/ServiceAreas";
import { ServiceDetail } from "./Pages/ServiceDetail/ServiceDetail";
import { Login } from "./Pages/Admin/Login/Login";
import { Dashboard } from "./Pages/Admin/Dashboard/Dashboard";
import { BlogDetail } from "./Pages/BlogDetail/BlogDetail";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<TowingAbout />} />
          <Route path="/services" element={<TowingServices />} />
          <Route path="/reviews" element={<TowingReviews />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;