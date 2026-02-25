import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/* fetchTasks via Redux AsyncThunk */
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
    const res = await fetch("http://localhost:4000/todo");
    const data = await res.json();
    return data;
});

/* create redux container slice */
const taskReducer = createSlice({
    name: "tasks",
    initialState: {
        loading: false,
        tasks: [],
        error: ''
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload
        });
        builder.addCase(fetchTasks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        });
    }
});

export default taskReducer.reducer;