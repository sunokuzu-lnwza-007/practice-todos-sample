import { Outlet } from "react-router-dom";
import styles from "./layout.module.css"; // Private Css for Layouts
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <footer className="sm:text-lg text-xs uppercase text-gray-500 text-center sm:p-0 p-3 sm:text-end mx-2 select-none">
          Built by Sunokuzu-lnwza
        </footer>
      </div>
    </>
  );
};
export default MainLayout;
