import React from 'react';
import { useSelector } from 'react-redux';
import ListTask from '../components/ListTask';

function Dashboard() {
  const { name } = useSelector((state) => state.user); // extract name from user

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-3xl mx-auto bg-white rounded-md shadow-md p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Welcome, {name}!
        </h1>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Your Tasks</h2>
          <ListTask /> {/* TODO list */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;