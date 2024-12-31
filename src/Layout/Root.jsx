import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import useAuth from "../Hooks/useAuth";

const Root = () => {
  const { user } = useAuth();
  return (
    <div>
      {user && <Navbar></Navbar>}
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
