import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../store/slices/todos.store.slice";
import { toast } from "react-hot-toast";

function InputTask() {
  // dispatch for actions (method)
  const dispatch = useDispatch();
  // TODO task input initializer
  const [todo, setTodo] = useState({ title: "", start: "", end: "", priority: "LOW" });
  // when we write any input field then it call
  const handleChange = (e) => {
    setTodo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // add todo in localstorage
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.title.trim() || !todo.start || !todo.end || new Date(todo.start) >= new Date(todo.end)) {
      toast.error("Please provide valid task details.");
      return;
    }
    // call createTask action(method)
    dispatch(createTask(todo));
    toast.success("Task added successfully!");
    setTodo({ title: "", start: "", end: "", priority: "LOW" });
  };

  return (
    <div className="flex flex-col p-4 md:p-6 lg:p-8 border rounded-md shadow-md bg-white w-full max-w-md mx-auto">
      <h1 className="text-center text-xl md:text-2xl font-semibold mb-4">Add TODO</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Task Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={todo.title}
            onChange={handleChange}
            placeholder="Enter task title"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="start" className="block text-sm font-medium text-gray-700">Start Date & Time</label>
          <input
            type="datetime-local"
            name="start"
            id="start"
            min={Date.now()}
            value={todo.start}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="end" className="block text-sm font-medium text-gray-700">End Date & Time</label>
          <input
            type="datetime-local"
            name="end"
            min={Date.now()}
            id="end"
            value={todo.end}
            
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
          <select
            name="priority"
            id="priority"
            value={todo.priority}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default InputTask;
