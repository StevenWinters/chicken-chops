import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return (
    <>
      <Loading />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
