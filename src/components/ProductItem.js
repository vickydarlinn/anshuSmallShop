import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const ProductItem = ({ product }) => {
  return (
    <div className="max-w-xs flex flex-col gap-2 ">
      <div className="relative">
        <img src={product.image} alt={product.title} className="" />
        <span className="absolute right-2 top-2 text-pink-600 cursor-pointer text-3xl hover:scale-110">
          <AiOutlineHeart />
        </span>
      </div>
      <h3>{product.title}</h3>
      <div className="flex gap-5 items-center">
        <span className="font-bold">${product.price}</span>
        <button className="grow border border-white p-1 cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductItem;
