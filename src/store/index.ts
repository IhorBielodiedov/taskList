import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slices/taskSlice";

const store = configureStore({
  reducer: { taskSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
