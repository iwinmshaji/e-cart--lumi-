import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// asynchronous action - should be dispatched by product components
export const getAllProducts = createAsyncThunk("products/getAllProducts",async()=>{
    const result = await axios.get("https://dummyjson.com/products")
    return result.data.products
})

const productSlice = createSlice({
    name:"products",
    initialState:{
        loading:true,
        allProducts:[],
        dummyAllProducts:[],
        error:""
    },
    reducers:{
        searchProduct:(state,action)=>{
            state.allProducts = state.dummyAllProducts.filter(item=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.allProducts = action.payload
            state.dummyAllProducts = action.payload
            state.loading = false
            state.error=""
        })
        builder.addCase(getAllProducts.pending,(state,action)=>{
            state.allProducts = []
            state.dummyAllProducts = []
            state.loading = true
            state.error=""
        })
        builder.addCase(getAllProducts.rejected,(state,action)=>{
            state.allProducts = []
            state.dummyAllProducts = []
            state.loading = false
            state.error="API CALL FAILED"
        })
    }
})

export default productSlice.reducer
export const {searchProduct} = productSlice.actions