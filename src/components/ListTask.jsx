import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../store/slices/todos.store.slice";
import { toast } from "react-hot-toast";
import dayjs from "dayjs";

function ListTask() {
  const todos = useSelector((state) => state.todos.todos) || [];
  const dispatch = useDispatch();
  // delete todo by calling index
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    toast.success("Task deleted");
  };

  if (!todos.length) {
    return <p className="text-center text-gray-500 mt-4">No tasks available.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Task List</h2>
      <ul className="space-y-3">
        {/* Mapping todo from todos */}
        {todos.map(({ id, title, start, end, priority }) => (
          <li
            key={id}
            className="p-3 border rounded-md flex flex-col sm:flex-row justify-between items-center bg-gray-100"
          >
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                <span>Start: {dayjs(start).format("DD-MM-YYYY")}</span>
                <span>End: {dayjs(end).format("DD-MM-YYYY")}</span>
                <span className="font-medium">Priority: {priority}</span>
              </div>
            </div>
            <button
              onClick={() => handleDelete(id)}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm mt-2 sm:mt-0"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTask;