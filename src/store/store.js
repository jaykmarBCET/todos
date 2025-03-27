import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/users.store.slices";  
import todosReducer from './slices/todos.store.slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todosReducer, 
  },
});

export default store;
