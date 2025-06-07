import AddTask from "../components/Todo/AddTask";
import styles from "./style.module.css";
import { SiGithub } from "react-icons/si";

const HomePages = () => {
  return (
    <>
      <div className={styles.container_wraper}>
        <div className="flex-col my-16 sm:my-24 justify-center place-items-center">
          <p className="flex text-2xl sm:text-5xl text-gray-800 italic font-semibold gap-3">
            <span>👋</span> สวัสดีทุกคนครับ{" "}
            <a target="_blank" href="https://github.com/sunokuzu-lnwza-007">
              <SiGithub className="cursor-pointer hover:scale-110" />
            </a>
          </p>
          <p className="text-sm sm:text-2xl text-gray-600 py-2 sm:py-5">
            ฝึกการใช้{" "}
            <a
              target="_blank"
              href="https://react.dev/"
              className="text-blue-400 hover:text-blue-500 font-semibold cursor-pointer"
            >
              React 19
            </a>{" "}
            -{" "}
            <a
              target="_blank"
              href="https://react.dev/"
              className="text-sky-400 hover:text-sky-500 font-semibold cursor-pointer"
            >
              Tailwind 14
            </a>
          </p>
          <p className="text-sm sm:text-2xl text-gray-600">
            เว็ปไซต์นี้จัดทำขึ้นมาเพื่อการเรียนรู้เพียงอย่างเดียวครับ
          </p>
        </div>
        <AddTask />
      </div>
    </>
  );
};
export default HomePages;
