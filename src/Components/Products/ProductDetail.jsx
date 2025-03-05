import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiPlus, FiMinus } from "react-icons/fi";
import { toast } from "sonner";
import { useCart } from "../Cart/CartProvider";
import { product } from "../product";

const ProductDetail = () => {
  const { addToCart } = useCart();
  const [mainImage, setMainImage] = useState(0);
  const [selectColor, setSelectColor] = useState("");
  const [selectSize, setSelectSize] = useState("");
  const [changeQuantity, setChangeQuantity] = useState(1);
  const { id } = useParams();

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const foundProduct = product.find((p) => p.productid === parseInt(id));
    setSelectedProduct(foundProduct);
  }, [id]);

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  // ProductDetail.jsx
  const handleCart = () => {
    if (!selectColor && !selectSize) {
      toast.error("Please select color and size", {
        position: "top-center",
        style: { width: "250px" },
      });
    } else if (!selectColor) {
      toast.error("Please select color", {
        position: "top-center",
        style: { width: "250px" },
      });
    } else if (!selectSize) {
      toast.error("Please select size", {
        position: "top-center",
        style: { width: "250px" },
      });
    } else {
      const product = {
        ...selectedProduct,
        color: selectColor,
        size: selectSize,
        quantity: changeQuantity,
      };
      addToCart(product);
      toast.success("Added to cart successfully!", {
        position: "top-center",
        style: { width: "250px" },
      });
    }
  };

  return (
    <div className="md:container w-[100%] mt-[150px] mb-[100px] md:flex grid justify-center mx-auto gap-10">
      <div className="flex md:flex-row flex-col-reverse gap-8 items-start ">
        {/* Left side - Thumbnails */}
        <div className="md:grid flex gap-4">
          {selectedProduct.image.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.altText}
              className="w-25 h-25 cursor-pointer rounded-xl"
              onClick={() => setMainImage(index)}
            />
          ))}
        </div>
        {/* Main image */}
        <div>
          <img
            className="w-[400px] h-[450px] rounded-lg"
            src={selectedProduct.image[mainImage].url}
            alt={selectedProduct.image[mainImage].altText}
          />
        </div>
      </div>
      {/* Right side - Product details */}
      <div className="grid gap-3 md:mx-0 md:ms-0 md:mt-0 mt-10 ms-12 mb-[100px] mx-auto">
        <h1 className="text-3xl font-extrabold">{selectedProduct.name}</h1>
        <p className="font-light text-xl">${selectedProduct.price}</p>
        <p className="font-light text-md text-gray-500">
          {selectedProduct.description}
        </p>
        {/* Color selection */}
        <div>
          <p className="mb-1 text-lg">Color:</p>
          <div className="flex gap-2 items-center">
            {selectedProduct.color.map((color) => (
              <button
                key={color}
                onClick={() => setSelectColor(color)}
                className={`w-7 h-7 border-1 border-gray-400 rounded-full ${
                  selectColor === color ? "outline-2 outline-[gold]" : ""
                }`}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        </div>
        {/* Size selection */}
        <div>
          <p className="mb-1 text-lg">Size:</p>
          <div className="flex gap-2 items-center ">
            {selectedProduct.size.map((size) => (
              <button
                key={size}
                onClick={() => setSelectSize(size)}
                className={`border-1 rounded-sm px-3 py-1 cursor-pointer ${
                  selectSize === size ? "bg-gray-400" : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        {/* Add to cart button */}
        <div className="mt-3">
          <button
            onClick={handleCart}
            className="bg-black hover:bg-gray-700 text-white md:text-lg text-md rounded-md cursor-pointer w-[200px] h-[50px]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
