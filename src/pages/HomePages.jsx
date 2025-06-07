import { useState } from "react";
import AddTask from "../components/Todo/AddTask";
import styles from "./style.module.css";
import Task from "../components/Todo/Task";

const HomePages = () => {
  const [todos, setTodo] = useState([]);

  const newTask = (task) => {
    setTodo((prev) => [...prev, task]);
    console.log(todos);
  };
  return (
    <>
      <div className={styles.container_wraper}>
        <div className="flex flex-col">
          <div className="text-3xl lg:text-5xl text-gray-800 font-semibold mx-4 sm:mx-0 sm:py-0">
            <article className="flex justify-center sm:justify-start gap-2 lg:gap-6 italic border-1 border-gray-300 px-2 py-4 lg:p-6 rounded-md">
              <span className="mx-3 sm:mx-0 text-3xl mt-4 lg:text-5xl animate-bounce duration-75 hover:scale-110">
                👋
              </span>
              <span className="mx-3 sm:mx-0">
                Hello there <br /> สวัสดีทุกคนครับ
              </span>
            </article>
            <div className="bg-gradient-to-l to-neutral-150 from-neutral-200 shadow-xl p-4 mb-2 lg:p-0 text-center text-lg sm:text-4xl text-gray-700 mt-8 sm:mt-18 sm:mx-6 mx-3 antialiased italic lg:py-10">
              <p>
                " นี่คือ เว็ปไซต์ ฝึกฝนการใช้{" "}
                <a
                  target="_blank"
                  href="https://react.dev/"
                  className="text-blue-400 hover:text-blue-500 font-semibold"
                >
                  React 19
                </a>{" "}
                <span className="text-sky-400">-</span>{" "}
                <a
                  target="_blank"
                  href="https://tailwindcss.com/"
                  className="text-sky-400 hover:text-sky-500 font-semibold"
                >
                  Tailwind 3.4 "
                </a>
              </p>
            </div>
          </div>
        </div>

        <AddTask newTask={newTask} />
        <div className="max-w-6xl mx-3 lg:mx-auto pt-0">
          {todos.map((item, i) => (
            <Task item={item} key={i} id={i} />
          ))}
        </div>
      </div>
    </>
  );
};
export default HomePages;
