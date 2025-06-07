const AddTask = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <form className="mx-3 sm:mx-16 p-0 sm:px-8">
        <label
          htmlFor="title"
          className="text-lg sm:text-2xl text-gray-800  font-bold"
        >
          " Typing ✏️ Your Task"{" "}
        </label>
        <span className="text-xs sm:text-lg text-gray-500">
          (เพิ่มสิ่งที่คุณต้องการจะทำ)
        </span>
        <div className="flex gap-x-2 border-1 border-gray-300 bg-white rounded-md p-2 pl-3 mt-2">
          <input
            className="flex-1 focus:outline-none w-sm"
            type="text"
            placeholder="Add Your task"
            maxLength="30"
            autoFocus
            required
          />
          <button
            type="submit"
            className="w-40 py-2 sm:py-2 font-semibold bg-gradient-to-l from-gray-600 to-gray-800 rounded text-white"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddTask;
