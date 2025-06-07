import { AiFillEdit } from "react-icons/ai";
import { FaClipboardCheck } from "react-icons/fa";
import { LiaSkullCrossbonesSolid } from "react-icons/lia";

const Task = () => {
  return (
    <div className="max-w-6xl mx-3 lg:mx-auto lg:pt-14 pt-0">
      <div className="flex flex-col">
        <div className="flex justify-between items-center rounded-sm p-4">
          <article className="p-3">
            <p className="text-gray-700 antialiased font-bold text-xl">
              TASK 1
            </p>
            <div className="flex">
              <p className="text-gray-500">Lorem, ipsum dolor.</p>
            </div>
          </article>
          <div className="flex text-xl gap-5 mx-7 sm:mx-0 text-gray-800">
            <button>
              <AiFillEdit />
            </button>
            <button>
              <FaClipboardCheck />
            </button>
            <button className="font-bold text-gray-600">
              <LiaSkullCrossbonesSolid />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Task;
