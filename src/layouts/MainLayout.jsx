import { Outlet } from "react-router-dom";
import styles from "./layout.module.css"; // Private Css for Layouts
import Navbar from "../components/Navbar";
import Footer from "./../components/Footer";

const MainLayout = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
export default MainLayout;
