import { configureStore } from "@reduxjs/toolkit";
import BeitCnesetSlice from "../features/beitCneset/beitCnesetSlice";
import usersSlice from "../features/users/usersSlice";

export const store = configureStore({
  reducer: { BeitCnesetSlice, usersSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
