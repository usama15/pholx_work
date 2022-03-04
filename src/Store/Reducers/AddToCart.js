import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
  name: "Cart",
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {
    addCart: (state, action) => {
      var addedItem;
      let index;
      let existedItem = false;
      state.products.map((shoe, i) => {
        if (shoe.ProductID === action.payload.ProductID) {
          existedItem = true;
          addedItem = shoe;
          index = i;
        }
        return existedItem;
      });
      if (existedItem) {
        action.payload = {
          ...action.payload,
          bookedQuantity: parseInt(addedItem.bookedQuantity) + 1,
          changedPrice:
            (addedItem.bookedQuantity + 1) * parseInt(addedItem.rate),
        };
        let total = state.total + parseInt(action.payload.rate);
        let products = [...state.products];
        products[index] = action.payload;
        return {
          ...state,
          products,
          total,
        };
      } else {
        action.payload = {
          ...action.payload,
          bookedQuantity: 1,
          changedPrice: parseInt(action.payload.rate),
        };
        let data = [...state.products, action.payload];
        let total = state.total + parseInt(action.payload.rate);
        return {
          ...state,
          products: data,
          total,
        };
      }
    },
    addCartWithQuantity: (state, action) => {
      // console.log(action);
      var addedItem;
      let index;
      let existedItem = false;
      state.products.map((shoe, i) => {
        if (shoe.ProductID === action.payload.product.ProductID) {
          existedItem = true;
          addedItem = shoe;
          index = i;
        }
        return existedItem;
      });
      if (existedItem) {
        action.payload.product = {
          ...action.payload.product,
          bookedQuantity:
            parseInt(addedItem.bookedQuantity) +
            parseInt(action.payload.quantity),
          changedPrice:
            (parseInt(addedItem.bookedQuantity) +
              parseInt(action.payload.quantity)) *
            parseInt(addedItem.rate),
        };
        let total =
          state.total -
          parseInt(addedItem.changedPrice) +
          parseInt(action.payload.product.changedPrice);
        let products = [...state.products];
        products[index] = action.payload.product;
        return {
          ...state,
          products,
          total,
        };
      } else {
        action.payload.product = {
          ...action.payload.product,
          bookedQuantity: parseInt(action.payload.quantity),
          changedPrice:
            parseInt(action.payload.product.rate) * action.payload.quantity,
        };
        let data = [...state.products, action.payload.product];
        let total =
          state.total +
          parseInt(action.payload.product.rate) * action.payload.quantity;
        return {
          ...state,
          products: data,
          total,
        };
      }
    },
    updateCart: (state, action) => {
      var addedItem;
      let index;
      state.products.map((shoe, i) => {
        if (shoe.ProductID === action.payload.id) {
          addedItem = shoe;
          index = i;
        }
      });
      if (action.payload.quantity > 0) {
        addedItem = {
          ...addedItem,
          bookedQuantity: parseInt(action.payload.quantity),
          changedPrice:
            parseInt(action.payload.quantity) * parseInt(addedItem.rate),
        };
        let total = 0;
        let products = [...state.products];
        products[index] = addedItem;
        products.map((product) => (total += product.changedPrice));
        return {
          ...state,
          products,
          total,
        };
      } 
      else {
        let newCartData = state.products.filter(
          (shoe) => action.payload.id !== shoe.ProductID
        );
        let total = state.total - addedItem.changedPrice;
        // console.log(removedItem.quantity);
        if (state.products.length === 1) {
          return {
            ...state,
            products: [],
            total: 0,
          };
        } else {
          return {
            ...state,
            products: newCartData,
            total,
          };
        }
      }
    },
    removeFromCart: (state, action) => {
      let removedItem;
      state.products.map((shoe) => {
        if (shoe.ProductID === action.payload) {
          removedItem = shoe;
        }
        return removedItem;
      });
      let newCartData = state.products.filter(
        (shoe) => action.payload !== shoe.ProductID
      );
      let total = state.total - removedItem.changedPrice;
      // console.log(removedItem.quantity);
      if (state.products.length === 1) {
        return {
          ...state,
          products: [],
          total: 0,
        };
      } else {
        return {
          ...state,
          products: newCartData,
          total,
        };
      }
    },
  },
});

export const { addCart, addCartWithQuantity, removeFromCart, updateCart } =
  cartReducer.actions;
export default cartReducer.reducer;
