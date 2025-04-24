"use client";

import { useRemoveProductMutation } from "@/store/features/productApiSlice";
import React, { useState } from "react";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  rating: number;
  description: string;
  src: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  rating,
  description,
  src,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [deleteProduct] = useRemoveProductMutation();

  const handleDelete = async (id: number) => {
    console.log("Deleting product with ID:", id);
    try {
      await deleteProduct(id).unwrap();
      alert("Deleted Success");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Something went wrong");
    }
  };
  return (
    <>
      <div className="bg-gray-400 shadow-md rounded-xl p-5 w-full max-w-sm hover:shadow-lg transition duration-300">
        <img
          src={src}
          alt="Product img"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-1">Price: ₹{price}</p>
        <p className="text-yellow-900 mb-1">Rating: {rating}</p>
        <p className="text-sm text-gray-600">{description}</p>

        <div className="flex gap-5 mt-5">
          <button className="border p-2" onClick={() => setIsOpen(true)}>
            View
          </button>
          <button className="border p-2">Edit</button>
          <button className="border p-2" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 backdrop-blur-sm  bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-gray-900 text-white p-6 rounded-xl shadow-xl max-w-lg w-full relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-3 text-gray-500 hover:text-white text-xl font-bold"
              >
                &times;
              </button>
              <h2 className="text-2xl font-semibold mb-2">{title}</h2>
              <img
                src={src}
                alt="Product img"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="mb-1">Price: ₹{price}</p>
              <p className="mb-1">Rating: {rating}</p>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductCard;
