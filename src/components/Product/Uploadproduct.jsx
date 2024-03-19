import React, { useState, useEffect, createContext } from "react";

const Data = createContext();

const ProductForm = () => {
  const [allproduct, setAllproduct] = useState([]);
  const [productname, setProductname] = useState("");
  const [productdes, setProductdes] = useState("");
  const [productprice, setProductprice] = useState("");
  const [productimg, setProductimg] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("product data")) || [];
    setAllproduct(data);
  }, []);

  function HandleName(e) {
    setProductname(e.target.value);
  }
  function Handledes(e) {
    setProductdes(e.target.value);
  }
  function Handleprice(e) {
    setProductprice(e.target.value);
  }

  function HandleDisplay() {
    let productdata = {
      name: productname,
      description: productdes,
      price: productprice,
      productPic: productimg,
    };
    const data = [...allproduct];
    data.push(productdata);
    localStorage.setItem("product data", JSON.stringify(data));
    setAllproduct(data);
    alert("data is saved in local storage");
  }

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="productName"
          >
            Product Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="productName"
            name="productName"
            type="text"
            placeholder="Product Name"
            value={productname}
            onChange={HandleName}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            placeholder="Description"
            value={productdes}
            onChange={Handledes}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            name="price"
            type="text"
            placeholder="Price"
            value={productprice}
            onChange={Handleprice}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="productImage"
          >
            Product Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="productImage"
            name="productImage"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onloadend = () => {
                setProductimg(reader.result);
              };
              if (file) {
                reader.readAsDataURL(file);
              }
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={HandleDisplay}
          >
            Save
          </button>
        </div>
      </form>
      {/* <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Product Image</th>
          </tr>
        </thead>
        <tbody>
          {allproduct.map((product, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.description}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">
                <img src={product.productPic} alt="Product" width="100" />
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default ProductForm;
