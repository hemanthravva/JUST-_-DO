import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userReducer from './userSlice';
import todoReducer from './todoslice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    todos: todoReducer,
  },
});