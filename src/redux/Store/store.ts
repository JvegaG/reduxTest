import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../Slice/todoSlice";
import { TodoApi } from "../Apis/TodoApi";


export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        [TodoApi.reducerPath]: TodoApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        TodoApi.middleware
    )
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
