import React from "react";
import { MdCurrencyRupee } from "react-icons/md";

const AllProduct = ({
  products,
  onEditProduct,
  onDeleteProduct,
  setEditingProduct,
  editingProduct,
}) => {
  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  const handleDeleteClick = (productId) => {
    onDeleteProduct(productId);
  };

  return (
    <div className="w-[90%] mx-auto mt-15 bg-gray-400 px-10 py-5 rounded-md">
      <table className="w-full table-auto ">
        <thead>
          <tr className="text-start">
            <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1">
              SN
            </th>
            <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1 ">
              Product Image
            </th>
            <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1 ">
              Product Name
            </th>
            <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1  ">
              Stock Quantity
            </th>
            <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1 ">
              Price
            </th>
            <th className="text-xs sm:text-sm md:text-md font-semibold py-1 sm:py-2 px-1 ">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="">
          {products.map((product, index) => (
            <tr key={product.id} className="">
              <td className="text-center">{index + 1}</td>
              <td className="py-1 sm:py-2 px-1">
                <img
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover mx-auto rounded-md"
                  src={product.image}
                  alt={product.name}
                />
              </td>
              <td className="text-xs sm:text-sm md:text-base py-1 sm:py-2 px-1 text-center">
                {product.name}
              </td>
              <td className="text-xs sm:text-sm md:text-base py-1 sm:py-2 px-1 text-center">
                {product.stock}
              </td>
              <td className=" text-xs sm:text-sm md:text-base pt-2 sm:py-2 px-1 ">
                <p className="flex items-center justify-center">
                  <MdCurrencyRupee />
                  {product.price}
                </p>
              </td>
              <td className="text-xs sm:text-sm md:text-base pt-2 sm:py-2 px-1 text-center">
                <button
                  className="bg-green-600 px-5 py-1 text-white rounded-md"
                  onClick={() => handleEditClick(product)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 px-5 py-1 text-white rounded-md ml-5"
                  onClick={() => handleDeleteClick(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProduct;
