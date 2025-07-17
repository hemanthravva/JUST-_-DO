import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo._id === action.payload._id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
  },
});

export const { setTodos, addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;