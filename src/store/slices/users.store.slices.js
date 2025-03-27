import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-hot-toast'


export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    password: "",
    dob: "",
  },
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser && storedUser.email === email && storedUser.password === password) {
        return storedUser; 
      } else {
        toast.success("Invalid credentials")
      }
    },

    register: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload; 
    },

    currentUser: (state) => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      return storedUser ? storedUser : state; 
    },

    clearUser: () => {
      localStorage.removeItem("user");
      return { name: "", email: "", password: "", dob: "" }; 
    },
  },
});

export const { login, register, currentUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
