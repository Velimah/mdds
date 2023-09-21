import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navigation />
      <main className="grow bg-fourth">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
