import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productAction";
const initialState={
    products :[],
    status: 'idle',
    error: ""
};

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        setProducts: (state,action)=>{
            state.products = action.payload;
            console.log(state.products);
        },
        filteredProducts : (state,action)=>{
                const filterData = action.payload.products.filter((elem)=>{
                    return elem.category_id === action.payload.selectedCategory;
                })
                state.products = filterData;
                console.log(filterData);
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getProducts.pending, (state, action) => {
              state.status = "Loading.....";
         })
         .addCase(getProducts.fulfilled, (state, action) => {
              state.status = "Success";
              state.categories = action.payload;
         })
         .addCase(getProducts.rejected, (state, action) => {
              state.status ="Failed";
              state.error =  action.error.message;
         });
        }

});

export const {filteredProducts,setProducts} = productSlice.actions;
export default productSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState= [
//      {
//           pName:"Watch",
//           price:300,
//           img:"product-6.jpg"
//      },
//      {
//           pName:"Tablet",
//           price:1500,
//           img:"p3.jpg"
//      },
//      {
//           pName:"Phone",
//           price:2000,
//           img:"p2.jpg"
//      },
//      {
//           pName:"Speaker",
//           price:700,
//           img:"p5.jpg"
//      },
//      {
//           pName:"Mouse",
//           price:800,
//           img:"p6.jpg"
//      }
// ];

// const productSlice =  createSlice({
//      name:"Products",
//      initialState,
// });

// export default productSlice;


