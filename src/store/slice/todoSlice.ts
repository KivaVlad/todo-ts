import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../types/data";

interface TodoState {
    list: ITodo[];
}

const initialState: TodoState = {
    list: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<any>) {
            state.list.push({
                id: Date.now(),
                title: action.payload,
                completed: false,
            })
        },
        toggleComplete(state, action: PayloadAction<any>) {
            const toggleTodo = state.list.find((todo) => todo.id === action.payload);
            if (toggleTodo) {
                toggleTodo.completed = !toggleTodo?.completed;
            }
        },
        removeTodo(state, action: PayloadAction<any>) {
            state.list = state.list.filter((todo) => todo.id !== action.payload);
        }
    }
})

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;