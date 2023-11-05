import React from "react";
import "./Main.css";
import Navbar from "../navbar/Navbar";
import Home from "../../routes/home/Home";
import Products from "../../routes/products/Product";
import SingleRoute from "../../routes/single_route/SingleRoute";
import NotFound from "../../routes/notFound/NotFound";
import { Routes, Route } from "react-router";

function Main() {
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product:id" element={<SingleRoute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Main;
