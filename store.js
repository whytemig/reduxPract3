import { configureStore } from "@reduxjs/toolkit";
import productReducer from './src/store/productSlice/productSlice'
import cartReducer from './src/store/cartSlice/cartSlice'


const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer
    }
}
)

export default store;