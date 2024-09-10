import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        category:"Men",
        items:["Shirts","Pants","Shoes"]
    },
    {
        category:"Women",
        items:["Shirts","Pants","Shoes"]
    },
    {
        category:"Kids",
        items:["Shirts","Pants","Shoes"]
    },
];

const submenuSlice = createSlice({
    name:"Submenu",
    initialState
});

export default submenuSlice;