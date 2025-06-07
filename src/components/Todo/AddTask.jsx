import { useRef } from "react";

const AddTask = ({ newTask }) => {
  const title = useRef(); // อ้างอิง input field (ไม่ต้อง state)
  const form = useRef(); // อ้างอิง form เพื่อ reset ทีหลัง

  const submitForm = (e) => {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้า
    const task = {
      title: title.current.value,
      date: new Date().toLocaleDateString(),
    };
    newTask(task); // ส่ง task ออกไปให้ parent component

    form.current.reset();
  };

  return (
    <div className="max-w-3xl">
      <form
        className="px-5 text-center sm:text-start"
        ref={form}
        onSubmit={submitForm}
      >
        <label
          htmlFor="title"
          className="text-lg italic sm:text-4xl text-gray-800 font-bold"
        >
          <span> ✏️ </span> Typing Your Task{" "}
        </label>
        <span className="text-xs sm:text-lg text-gray-500">
          , (เพิ่มสิ่งที่คุณต้องการจะทำ)
        </span>
        <div className="flex gap-x-2 border-1 border-gray-300 bg-white rounded-md p-2 pl-3 mt-2">
          <input
            className="flex-1 focus:outline-none w-sm"
            type="text"
            placeholder="Add Your task"
            maxLength="30"
            autoFocus
            required
            ref={title}
          />
          <button
            type="submit"
            className="w-40 py-2 sm:py-2 font-semibold bg-gradient-to-l from-gray-600 to-gray-800 rounded text-white cursor-pointer hover:opacity-90"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddTask;
