"use client";
import { useAddProductMutation } from "@/store/features/productApiSlice";
// @ts-nocheck
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function AddProduct() {
  const { register, handleSubmit } = useForm();

  const [newProduct] = useAddProductMutation();

  const onSubmit = async (data: any) => {
    console.log("data", data);

    const payload = {
      title: data.title,
      price: data.price,
      rating: data.rating,
      description: data.description,
    };

    try {
      const res = await newProduct(payload);
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        className: "custom-toast-success",
      });
    } catch (error: any) {
      toast.error(error.message || "Failed to add product", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        className: "custom-toast-success",
      });
    }
  };
  return (
    <>
      <div className="text-white p-4 m-4">
        <form
          className="grid grid-cols-3 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="title"
            className="border p-2"
            {...register("title")}
          />
          <input
            type="number"
            placeholder="price"
            className="border p-2"
            {...register("price")}
          />
          <input
            type="number"
            {...register("rating")}
            placeholder="rating"
            className="border p-2"
          />
          <input
            type="text"
            {...register("description")}
            placeholder="description"
            className="border p-2"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
