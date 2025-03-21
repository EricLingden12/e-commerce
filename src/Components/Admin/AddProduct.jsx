import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const AddProduct = ({ setAddProduct, handleAddProduct }) => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productPrice, setProductPrice] = useState(0);
  const [productStock, setProductStock] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: productName,
      description: productDescription,
      image: productImage ? URL.createObjectURL(productImage) : "",
      price: productPrice,
      stock: productStock,
    };

    handleAddProduct(newProduct);

    setProductName("");
    setProductDescription("");
    setProductImage(null);
    setProductPrice(0);
    setProductStock(0);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[50%] mx-auto mt-20 bg-gray-200 p-10 rounded-md admin-product">
        <h1 className="text-2xl font-bold text-center mb-5 flex justify-between">
          Add Product Detail
          <RxCross2
            onClick={() => setAddProduct(false)}
            className="text-black w-7 h-7 cursor-pointer"
          />
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label>Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full border border-gray-500 pt-1 px-2 rounded-md"
              required
            />
          </div>
          <div>
            <label>Product Description</label>
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className="w-full border border-black pt-1 px-2 rounded-md"
              required
            />
          </div>
          <div className="mt-5 ">
            <label>Image</label>
            <input
              type="file"
              onChange={(e) => setProductImage(e.target.files[0])}
              className="border border-gray-700"
              required
            />
          </div>
          <div className="mt-5 flex gap-5">
            <label>Price</label>
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(parseFloat(e.target.value))}
              className="border border-gray-700 w-[100px] rounded-md pl-1"
              min={0}
              required
            />

            <label>Stock Quantity</label>
            <input
              type="number"
              value={productStock}
              onChange={(e) => setProductStock(parseInt(e.target.value))}
              className="border border-gray-700 w-[100px] rounded-md pl-1"
              min={0}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 mt-5 px-5 py-2 rounded-md cursor-pointer"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
