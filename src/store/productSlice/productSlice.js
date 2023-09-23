import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsList: [],
    isLoading: false,
  isFailing:false,
};

export const callProductApi = createAsyncThunk('/product/callProductApi', async()=> {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        return data
        
    } catch (error) {
        console.log(error);
    }
})

const fakeData = [
    {
        id: 1,
        name:"product 1"
    },
    {
        id: 2,
        name:"product 2"
    },
    {
        id: 3,
        name:"product 3"
    },
]
const productSlice = createSlice({
     name: 'product',
  initialState,
    reducers: {
    //     getProducts: (state) => {
    //         state.productsList = fakeData;
    //   }
    }, extraReducers: {
        [callProductApi.pending]: (state) => {
          state.isLoading = true  
        },
        
        [callProductApi.fulfilled]: (state, { payload }) => {
            const { products } = payload;
            state.productsList = products;
            state.isLoading = false;
      },
        [callProductApi.rejected]: (state) => {
          state.isLoading = false,
          state.isFailing = true
      }
  }
})

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;
