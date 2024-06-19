import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";

function Specification() {
  return (
    <div
      className="flex flex-col justify-center items-center gap-9  w-full p-9 bg-orange-100"
      id="specifications"
    >
      <h2 className="text-2xl font-bold ">Spécifications</h2>
      <div className="flex justify-around items-center w-3/4">
        <div className="flex flex-col items-center cursor-pointer hover:text-blue-500 hover:scale-125 transition duration-200">
          <h2 className="text-lg font-bold">HTML</h2>
          <FaHtml5 className="mt-2 text-4xl" />
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-blue-500 hover:scale-125 transition duration-200">
          <h2 className="text-lg font-bold">JavaScript</h2>
          <SiJavascript className="mt-2 text-4xl" />
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-blue-500 hover:scale-125 transition duration-200">
          <h2 className="text-lg font-bold">React</h2>
          <FaReact className="mt-2 text-4xl" />
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-blue-500 hover:scale-125 transition duration-200">
          <h2 className="text-lg font-bold">Tailwind CSS</h2>
          <RiTailwindCssLine className="mt-2 text-4xl" />
        </div>
      </div>
    </div>
  );
}

export default Specification;
