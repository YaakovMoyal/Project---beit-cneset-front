import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Gabai } from "./interfaces/usersIF";

interface InitialState {
  users: Gabai[];
}

const initialState: InitialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<Gabai[]>) => {
      state.users = action.payload;
      return state;
    },
  },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
