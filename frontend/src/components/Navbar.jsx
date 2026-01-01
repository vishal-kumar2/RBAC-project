import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();        // clear context + localStorage
    navigate("/");   // redirect to Home
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo / Brand */}
      
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/RBAC.webp"
          alt="RBAC Logo"
          className="h-8 w-8 object-contain"
        />
        <span className="text-xl font-bold">RBAC App</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-4 items-center">
        {/* NOT LOGGED IN */}
        {!user && (
          <>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
            <Link to="/register" className="hover:text-gray-300">
              Register
            </Link>
          </>
        )}

        {/* LOGGED IN */}
        {user && (
          <>
            <Link to="/profile" className="hover:text-gray-300">
              Profile
            </Link>

            {/* ADMIN LINKS */}
            {user.role === "admin" && (
              <>
                <Link to="/admin" className="hover:text-gray-300">
                  Admin Panel
                </Link>
                <Link to="/admin/register" className="hover:text-gray-300">
                  Create Admin
                </Link>
              </>
            )}

            {/* USER ROLE BADGE */}
            <span className="bg-gray-700 px-2 py-1 rounded text-sm">
              {user.role.toUpperCase()}
            </span>

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
