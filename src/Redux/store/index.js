

import {createStore} from 'redux';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // This is the default storage (localStorage for web)
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartSlice from '../Cart/cartSlice';
import productSlice from '../Product/productSlice';
import categorySlice from '../Category/categorySlice';
import { thunk } from 'redux-thunk';
const rootReducer=combineReducers({
    categoryReducer : categorySlice,
         productReducer : productSlice,
         cartReducer : cartSlice,
})
 
// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage, // This is where you can specify the storage engine (localStorage)
  whitelist: ['cartReducer'], // Only persist the cartReducer, or add more reducers if needed
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the persisted reducer
const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false, // redux-persist needs this to be false
        }).concat(thunk)
});

export const persistor = persistStore(store);

export default store;








// import { configureStore } from "@reduxjs/toolkit";
// import {thunk} from 'redux-thunk';
// import categorySlice from "../Category/categorySlice";
// import productSlice from "../Product/productSlice";
// import cartSlice from "../Cart/cartSlice";

//  const store = configureStore({
//     reducer:{
//          categoryReducer : categorySlice,
//          productReducer : productSlice,
//          cartReducer : cartSlice,
//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
// });
// export default store;