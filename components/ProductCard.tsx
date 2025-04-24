// app/components/ProductCard.tsx or wherever you keep components
'use client';

import React from 'react';

type ProductCardProps = {
  title: string;
  price: number;
  rating: number;
  description: string;
  src:string;
};

const ProductCard: React.FC<ProductCardProps> = ({ title, price, rating, description,src }) => {
  return (
    <div className="bg-gray-400 shadow-md rounded-xl p-5 w-full max-w-sm hover:shadow-lg transition duration-300">
        <img src={src} alt="Product img" className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-1">Price: ₹{price}</p>
      <p className="text-yellow-900 mb-1">Rating: {rating}</p>
      <p className="text-sm text-gray-600">{description}</p>

      <div className='flex gap-5 mt-5'>
      <button className='border p-2'>View</button>
      <button className='border p-2'>Edit</button>
      <button className='border p-2'>Delete</button>
      </div>
    </div>
  );
};

export default ProductCard;
