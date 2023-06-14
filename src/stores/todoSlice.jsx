import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
    const res = await fetch("https://dummyjson.com/todos");
    // prev_controller = controller;
    const data = await res.json();
    return data.todos;
})

const initialTodo = {
    isLoading: false,
    todos: [],
    isError: false
}

export const todoSlice = createSlice({
    name: "todo",
    initialState: initialTodo,
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state) => {
            state.isLoading = true
            state.isError = false;
        });
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.isLoading = false;
            let todos = action.payload
            console.log(todos)
            const tenTodos = todos.filter(todo => todo.id <= 10)
            const tenTodosWithType = tenTodos.map(todo => {
                let types = ["work", "study", "entertainment", "family"]
                // let titleName = ["work", "study", "entertainment", "family"] 

                const randomType = types[Math.floor(Math.random() * types.length)]
                return { ...todo, type: randomType }
            })
            state.todos = tenTodosWithType
        });
        builder.addCase(fetchTodo.rejected, (state) => [
            state.isError = true
        ])
    }
})

// export const { addTodo } = todoSlice.actions

export default todoSlice.reducer