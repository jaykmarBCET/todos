import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : []; 
};

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: initialState(),
  },
  reducers: {
    createTask: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos)); 
    },

    updateTask: (state, action) => {
      const { index, updatedData } = action.payload;
      if (state.todos[index]) {
        state.todos[index] = { ...state.todos[index], ...updatedData };
        localStorage.setItem("todos", JSON.stringify(state.todos)); 
      }
    },

    deleteTask: (state, action) => {
      state.todos.splice(action.payload, 1);
      localStorage.setItem("todos", JSON.stringify(state.todos)); 
    },

    markComplete: (state, action) => {
      const index = action.payload;
      if (state.todos[index]) {
        state.todos[index].is_completed = true; 
        localStorage.setItem("todos", JSON.stringify(state.todos)); 
      }
    },
  },
});

export const { createTask, updateTask, deleteTask, markComplete } = todosSlice.actions;
export default todosSlice.reducer;
