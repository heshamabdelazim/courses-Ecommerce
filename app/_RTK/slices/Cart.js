const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const myCart = createSlice({
  name: "myCart",
  initialState: [],
  reducers: {
    addingData: (state, action) => {
      return [...state, action.payload];
    },
    deleteAProduct: (state, action) => {
      return state.filter((cart) => {
        return cart.id_of_row_in_DB !== action.payload.id_of_row_in_DB;
      });
    },
  },
});

export const { addingData, deleteAProduct } = myCart.actions;
export default myCart.reducer;
