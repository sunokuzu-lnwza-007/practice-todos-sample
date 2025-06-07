import { AiFillEdit } from "react-icons/ai";
import { FaClipboardCheck } from "react-icons/fa";
import { LiaSkullCrossbonesSolid } from "react-icons/lia";

const Task = (props) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center rounded-sm p-4">
        <article className="p-3">
          <div className="flex gap-3">
            <p className="text-gray-700 antialiased font-semibold text-xl">
              [ TASK {props.id + 1} ]
            </p>
            <p className="text-gray-600 antialiased font-semibold text-xl">
              {props.item.title}
            </p>
          </div>
          <div className="flex">
            <p className="text-gray-500">{props.item.date}</p>
            <p className="mx-1">,</p>
            <p className="text-gray-500">{props.item.time}</p>
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
  );
};
export default Task;
