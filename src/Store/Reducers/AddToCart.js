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
            (addedItem.bookedQuantity + 1) * parseInt(addedItem.price),
        };
        let total = state.total + parseInt(action.payload.price);
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
          changedPrice: parseInt(action.payload.price),
        };
        let data = [...state.products, action.payload];
        let total = state.total + parseInt(action.payload.price);
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
            parseInt(addedItem.price),
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
            parseInt(action.payload.product.price) * action.payload.quantity,
        };
        let data = [...state.products, action.payload.product];
        let total =
          state.total +
          parseInt(action.payload.product.price) * action.payload.quantity;
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
      addedItem = {
        ...addedItem,
        bookedQuantity:
          parseInt(action.payload.quantity),
        changedPrice:
            parseInt(action.payload.quantity) *
          parseInt(addedItem.price),
      };
      let total = 0;
      let products = [...state.products];
      products[index] = addedItem;
      products.map((product) => total += product.changedPrice);
      return {
        ...state,
        products,
        total,
      };
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
    addQuantity: (state, action) => {
      let addedItem;
      let index;
      state.products.map((shoe, i) => {
        if (shoe.id === action.payload) {
          addedItem = shoe;
          index = i;
        }
        return addedItem;
      });
      let total = state.total + addedItem.price;
      addedItem = {
        ...addedItem,
        quantity: addedItem.quantity + 1,
        changedPrice: (addedItem.quantity + 1) * addedItem.price,
      };
      let products = [...state.products];
      products[index] = addedItem;
      localStorage.setItem("products", JSON.stringify(products));
      localStorage.setItem("total", JSON.stringify(total));
      return {
        ...state,
        products,
        total,
      };
    },
    subtractQuantity: (state, action) => {
      let addedItem;
      let index;
      state.products.map((shoe, i) => {
        if (shoe.id === action.payload) {
          addedItem = shoe;
          index = i;
        }
        return addedItem;
      });
      if (addedItem.quantity === 1) {
        let newCartData = state.products.filter(
          (shoe) => shoe.id !== action.payload
        );
        let total = state.total - addedItem.changedPrice;
        localStorage.setItem("products", JSON.stringify(newCartData));
        localStorage.setItem("total", JSON.stringify(total));
        return {
          ...state,
          products: newCartData,
          total,
        };
      } else {
        addedItem = {
          ...addedItem,
          quantity: addedItem.quantity - 1,
          changedPrice: (addedItem.quantity - 1) * addedItem.price,
        };
        let products = [...state.products];
        products[index] = addedItem;
        let total = state.total - addedItem.price;
        localStorage.setItem("products", JSON.stringify(products));
        localStorage.setItem("total", JSON.stringify(total));
        return {
          ...state,
          products,
          total,
        };
      }
    },
  },
});

export const { addCart, addCartWithQuantity, removeFromCart,updateCart } =
  cartReducer.actions;
export default cartReducer.reducer;
