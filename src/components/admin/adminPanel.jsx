import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <div className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
        <span className="text-2xl font-semibold">My Shop</span>
      </div>
      <div className="p-4">
        <button className="block w-full py-2 px-4 mb-2 text-sm text-left text-gray-800 bg-gray-100 hover:bg-gray-200">
          Upload Product
        </button>
        <button className="block w-full py-2 px-4 mb-2 text-sm text-left text-gray-800 bg-gray-100 hover:bg-gray-200">
          Show Product
        </button>
        <button className="block w-full py-2 px-4 mb-2 text-sm text-left text-gray-800 bg-gray-100 hover:bg-gray-200">
          Delete Product
        </button>
        <button className="block w-full py-2 px-4 mb-2 text-sm text-left text-gray-800 bg-gray-100 hover:bg-gray-200">
          Update Product
        </button>
      </div>
      <div className="mt-auto p-4">
        <button className="block w-full py-2 px-4 text-sm text-left text-white bg-red-500 hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
