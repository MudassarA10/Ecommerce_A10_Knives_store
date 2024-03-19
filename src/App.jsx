import React from "react";
import ProductForm from "./components/Product/Uploadproduct";
import Sidebar from "./components/admin/adminPanel";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <ProductForm />
    </div>
  );
}

export default App;
