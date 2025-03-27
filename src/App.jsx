import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";

function App() {
  const userStore = useSelector((state) => state.user);
  
  return (
    <BrowserRouter>
      <NavBar />
      
      {!userStore.email && (
        <nav className="flex justify-center gap-4 mt-4">
          <Link to="/register" className="text-indigo-600 font-semibold hover:underline">
            Register
          </Link>
          <Link to="/login" className="text-indigo-600 font-semibold hover:underline">
            Login
          </Link>
        </nav>
      )}

      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/home" element={userStore.email ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={userStore.email ? <Navigate to="/home" /> : <Login />} />
          <Route path="/register" element={userStore.email ? <Navigate to="/home" /> : <Register />} />
          <Route path="/dashboard" element={userStore.email ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
