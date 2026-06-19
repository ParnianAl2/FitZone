import { configureStore } from "@reduxjs/toolkit";
import authSliceRedux  from "./Slices/Auth"
import cartSliceRedux  from "./Slices/Cart"
const store = configureStore({
    reducer: {
        auth:authSliceRedux,
        cart: cartSliceRedux
    }
})

export default store