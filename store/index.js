import { configureStore } from "@reduxjs/toolkit";
import rootApiSlice from "./services/rootApiSlice";


const store = configureStore({
    reducer:{
        [rootApiSlice.reducerPath]:rootApiSlice.reducer,
    },
    middleware: getDefaultMiddelware => getDefaultMiddelware().concat(
        rootApiSlice.middleware,
    )
})


export default store;