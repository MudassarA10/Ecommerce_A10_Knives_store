import React from "react";
import ProductForm from "./components/Product/Uploadproduct";
import Sidebar from "./components/admin/adminPanel";
import ShowProduct from "./components/Product/ShowProduct";
import WelcomeScreen from "./components/admin/welcome";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-full md:w-1/4 h-full">
          <Sidebar />
        </div>

        <div className="w-full md:w-3/4 h-full bg-gray-100">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="ShowProduct" element={<ShowProduct />} />
            <Route path="ProductForm" element={<ProductForm />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
