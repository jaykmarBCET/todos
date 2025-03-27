import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { SiGnuprivacyguard } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { login,currentUser } from "../store/slices/users.store.slices";
import { useSelector, useDispatch } from "react-redux";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const userStore = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (userStore.email) {
      navigate("/home");
    }
    dispatch(currentUser())
  }, [userStore.email, navigate]);

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (user.email.length < 15) {
      toast.error("Invalid email");
      return;
    }
    dispatch(login(user)); 
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <SiGnuprivacyguard className="text-indigo-600 w-14 h-14" />
          <h2 className="mt-4 text-center text-2xl font-bold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              value={user.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-gray-300 p-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              required
              value={user.password}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-gray-300 p-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 p-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Not a member?{" "}
          <a href="register" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
