import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { SiGnuprivacyguard } from "react-icons/si";
import { useSelector, useDispatch } from "react-redux";
import { register, currentUser } from "../store/slices/users.store.slices";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({ email: "", name: "", password: "", dob: "" });
  const userStore = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ Correctly handle navigation

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(user));
  };

  useEffect(() => {
    if (userStore.email) {
      navigate("/home"); // ✅ Redirect properly
    } else {
      dispatch(currentUser()); // ✅ Only fetch once
    }
  }, [userStore.email, dispatch, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md">
        {/* Icon & Title */}
        <div className="flex flex-col items-center">
          <SiGnuprivacyguard className="text-indigo-600 w-14 h-14" />
          <h2 className="mt-4 text-center text-2xl font-bold text-gray-900">
            Create a new account
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={user.name}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-md border border-gray-300 p-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              value={user.email}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-md border border-gray-300 p-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-md border border-gray-300 p-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          {/* DOB Input (Optional) */}
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
              Date of Birth (Optional)
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={user.dob}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-gray-300 p-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 p-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign in here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
