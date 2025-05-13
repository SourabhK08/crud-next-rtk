"use client";
import { useAddProductMutation, useGetProductByIdMutation, useUpdateProductByIdMutation } from "@/store/features/productApiSlice";
import { useSearchParams } from "next/navigation";
import { title } from "process";
// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function AddProduct() {
  const { register, handleSubmit,setValue } = useForm();

  const [newProduct] = useAddProductMutation();



  const [updateProduct] = useUpdateProductByIdMutation()
  const [getProductById, {data:productData}] = useGetProductByIdMutation()

  const searchParams = useSearchParams()
  const productId = searchParams.get('id') 
  const mode = searchParams.get('mode')

  console.log("productId---",productId);
  console.log("mode---",mode);
  
  const [staffData, setStaffData] = useState(null);

   useEffect(() => {
    if (productData) {
      setStaffData(productData);
    }
  }, [productData]);

console.log("productData",productData);

// CRUD HO GYA BUS VALUE POPULATE NHI HUI..........!!

  useEffect(() =>{

    if(mode === 'edit'){
      setValue('title',title)
      // setValue('price',price)
    }

  },[])

  const onSubmit = async (data: any) => {
    console.log("data", data);

    const payload = {
      title: data.title,
      price: data.price,
      rating: data.rating,
      description: data.description,
    };

    try {
      if(mode === 'edit' && productId){
        const res = await updateProduct({
          productId:productId,
          updatedProduct:payload,
        }).unwrap()
        toast.success(res.message, {
          position: 'top-right',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
          className: 'custom-toast-success',
        });
      }else{
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
      }
    } catch (error:any) {
       toast.error(error.message || 'An error occurred');
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
