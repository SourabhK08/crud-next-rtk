import rootApiSlice from "../services/rootApiSlice";

export  const productApiSlice = rootApiSlice.injectEndpoints({
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
        })
    })
})

export const {useAddProductMutation,useGetProductListQuery} = productApiSlice