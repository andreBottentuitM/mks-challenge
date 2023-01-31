import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "modal",
  initialState: {
    status: false,
    product: {
        id: 0,
        name: "",
        brand: "",
        description: "",
        photo: "",
        price: "",
        createdAt: "",
        updatedAt: "",
        quantityAtCart: 1,
    }
  },
  reducers: {
    setModalStatus: (state, action) => {
      state.status = action.payload;
    },
    setProductModal: (state, action) => {
      state.product = action.payload;
    },
   
  },
});

export const { setModalStatus, setProductModal } = slice.actions;
export default slice.reducer;
