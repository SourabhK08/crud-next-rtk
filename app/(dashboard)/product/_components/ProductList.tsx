"use client";
//@ts-nocheck
import React from "react";
import { useGetProductListQuery } from "@/store/features/productApiSlice";
import ProductCard from "@/components/ProductCard";

function ProductList() {
  const { data: productList, isLoading, error } = useGetProductListQuery();

  console.log("productList", productList);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong.</p>;
  return (
    <div className="m-3 p-4">
      <div className="flex text-white gap-x-32">
        <h1 className="font-bold text-xl underline mb-4 text-center">
          Product List
        </h1>
        <div>
          <button>Add new product</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 ">
        {productList?.products?.map((product: any) => (
          <ProductCard
            key={product.id}
            src={product.thumbnail}
            title={product.title}
            price={product.price}
            rating={product.rating}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
