
import rootApiSlice from "../services/rootApiSlice";

export  const productApiSlice = rootApiSlice.injectEndpoints({
    overrideExisting:true,
    endpoints:builder => ({
        addProduct:builder.mutation({
            query: newProduct =>{
                return{
                    url:'/products/add',
                    method:'POST',
                    body:newProduct
                }
            }
        }),
        getProductList:builder.query({
            query: () => {
                return{
                    url:'/products'
                }
            }
        }),
        removeProduct:builder.mutation({
            query: productId => {
                return{
                    url:`/products/${productId}`,
                    method:'DELETE',
                  
                }
            }
        }),
        updateProductById:builder.mutation({
            query:({productId,updatedProduct}) => ({
                url:`/products/${productId}`,
                method:'PUT',
                body:updatedProduct
            })
        }),
        getProductById: builder.mutation({
            query: productId =>({
                url:`/products/${productId}`,
                method:'GET'
            })
        })
    })
})

export const {useAddProductMutation,useGetProductListQuery,useRemoveProductMutation,useUpdateProductByIdMutation,useGetProductByIdMutation} = productApiSlice