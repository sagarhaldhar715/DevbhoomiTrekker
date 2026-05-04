import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-green-400">
        DevBhoomiTrekker
      </Link>

      <div className="flex gap-6 items-center">
        <Link to="/">Home</Link>
        <Link to="/treks">Treks</Link>

        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
