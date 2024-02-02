import { StoreProduct, UserInfo } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface ShopecomSate {
  productData: StoreProduct[];
  userInfo: null | UserInfo;
}

const initialState: ShopecomSate = {
  productData: [],
  userInfo: null,
};

export const shopecomslice = createSlice({
  name: "shopecom",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    plusQuantity: (state, action) => {
        const item = state.productData.find(
          (item: StoreProduct) => item._id === action.payload._id
        );
  
        if (item) {
          item.quantity++
        } 
      },

      minusQuantity: (state, action) => {
        const item = state.productData.find(
          (item: StoreProduct) => item._id === action.payload._id
        );
        if (item?.quantity ===1) {
            item.quantity = 1
          } else {
            item!.quantity--
          }
      },

      deleteItem: (state, action) => {
        state.productData = state.productData.filter(
          (item) => item._id !== action.payload
        );
       
      },

      resetCart: (state) =>{
        state.productData = []
      }, 

  },
});

export const { addToCart, plusQuantity, minusQuantity, deleteItem, resetCart } = shopecomslice.actions;
export default shopecomslice.reducer;
