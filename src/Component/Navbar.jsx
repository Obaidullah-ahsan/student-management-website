import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <header className="p-2 bg-gray-100 dark:text-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex items-center">
          <a href="" className="text-xl font-semibold text-blue-500">
            Student Management
          </a>
        </div>
        <div className="items-center flex-shrink-0 flex gap-2">
          <Link to="/addstudent" className="btn bg-blue-500 text-white">
            Add Student
          </Link>
          <button onClick={handleLogout} className="btn bg-blue-500 text-white">
            Log out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
