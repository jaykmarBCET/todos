import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const userStore = useSelector((state) => state.user);

  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <h1 className="text-lg font-semibold">My App</h1>

      <div className="flex gap-4">
        {userStore.email ? (
          <>
            <Link to="/home" className="hover:text-gray-300 font-semibold">Home</Link>
            <Link to="/dashboard" className="hover:text-gray-300 font-semibold">Dashboard</Link>
          </>
        ) : (
          <>
            <Link to="/register" className="hover:text-gray-300 font-semibold">Register</Link>
            <Link to="/login" className="hover:text-gray-300 font-semibold">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
