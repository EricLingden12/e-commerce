import React, { useState, useEffect } from "react";
import { IoIosAddCircle } from "react-icons/io";
import AddProduct from "../Components/Admin/AddProduct";
import AllProduct from "../Components/Admin/AllProduct";

const AdminProduct = () => {
  const [addProduct, setAddProduct] = useState(false);
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    try {
      const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
      setProducts(savedProducts);
    } catch (error) {
      console.error("Failed to load products from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("products", JSON.stringify(products));
    } catch (error) {
      console.error("Failed to save products to localStorage:", error);
    }
  }, [products]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setAddProduct(false);
  };

  const handleEditProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold pt-3 text-center">
        Product Management
      </h1>
      <div className="flex items-center justify-center gap-5 mt-8">
        <div className="bg-gray-300 w-[180px] box-shadow h-[50px] text-center pt-3 rounded-md cursor-pointer">
          <p className="text-lg font-semibold">All Product</p>
        </div>
        <div
          onClick={() => setAddProduct(true)}
          className="bg-gray-300 w-[180px] box-shadow h-[50px] pt-3 rounded-md cursor-pointer"
        >
          <p className="flex items-center text-lg font-semibold justify-center">
            <IoIosAddCircle />
            Add Product
          </p>
        </div>
      </div>
      <div>
        {addProduct && (
          <AddProduct
            setAddProduct={setAddProduct}
            handleAddProduct={handleAddProduct}
            handleEditProduct={handleEditProduct}
            editingProduct={editingProduct}
          />
        )}
      </div>
      <div>
        <AllProduct
          products={products}
          onEditProduct={handleEditProduct}
          onDeleteProduct={handleDeleteProduct}
          setEditingProduct={setEditingProduct}
          editingProduct={editingProduct}
        />
      </div>
    </div>
  );
};

export default AdminProduct;
