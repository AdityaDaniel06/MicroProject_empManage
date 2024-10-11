import HeaderNav from "../components/HeaderNav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <HeaderNav />
      <Outlet></Outlet>
    </>
  );
};
export default Layout;
