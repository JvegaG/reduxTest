import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { getTodoByIdThunk, getTodoThunk } from "../Actions/todoAction";
import { TodoModel } from "../../Models/requestModel";

interface State {
    startLoading: boolean;
    inputData: string;
    id: number;
    request?: any;
}

const initialState: State = {
    startLoading: false,
    inputData: '',
    id: 1,
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setStartLoading: (state) => {
            state.startLoading = true;
        },
        setInputData: (state, action: PayloadAction<string>) => {
            state.inputData = action.payload
        },
        onChangeId: (state, action: PayloadAction<number>) => {
            state.id = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTodoThunk.fulfilled, (state, action: PayloadAction<TodoModel[]>) => {
            state.request = action.payload;
            state.startLoading = false;
        })

        builder.addCase(getTodoByIdThunk.fulfilled, (state, action: PayloadAction<TodoModel>) => {
            state.request = action.payload;
            state.startLoading = false;
        })
    }
})

// Action creators are generated for each case reducer function
export const { setStartLoading, setInputData, onChangeId } = todoSlice.actions

export default todoSlice.reducer