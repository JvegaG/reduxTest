import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodoModel } from "../../Models/requestModel";


export const getTodoThunk = createAsyncThunk(
    'todo/all',
    async (): Promise<TodoModel[]> => {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/todos')
            const response = await data.json()
            
            return response;
        } catch (error) {
            throw error;
        }

    }
)


export const getTodoByIdThunk = createAsyncThunk(
    'todo/Id',
    async (id: number): Promise<TodoModel> => {
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            const response = await data.json();

            return response;
        } catch (error) {
            throw error;
        }

    }
)