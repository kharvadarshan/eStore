import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {thunk} from 'redux-thunk';
import categorySlice from "../Category/categorySlice";
import productSlice from "../Product/productSlice";
import cartSlice from "../Cart/cartSlice";


 const cartReducer = configureStore({
      reducer : { cartReducer : cartSlice}
 });
 const rootReducer = combineReducers({

         categoryReducer : categorySlice,
         productReducer : productSlice,
         cartReducer,
});

export default rootReducer;