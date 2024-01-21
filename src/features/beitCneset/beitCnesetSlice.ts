import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BeitCneset } from "./interfaces/beitCnesetIF";

interface InitialState {
  allBeitCneset: BeitCneset[];
}

const initialState: InitialState = {
  allBeitCneset: [],
};

export const BeitCnesetSlice = createSlice({
  name: "BeitCneset",
  initialState,
  reducers: {
    setBeitCneset: (state, action: PayloadAction<BeitCneset[]>) => {
      state.allBeitCneset = action.payload;
      return state;
    },
  },
});

export const { setBeitCneset } = BeitCnesetSlice.actions;
export default BeitCnesetSlice.reducer;
