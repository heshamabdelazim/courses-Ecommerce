const { createSlice } = require("@reduxjs/toolkit");

const categorySlice = createSlice({
  name: "category-slice",
  initialState: "all",
  reducers: {
    updateCategory: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateCategory } = categorySlice.actions;
export default categorySlice.reducer;
