import { MdMenu } from "react-icons/md";
import icon from "../assets/icon.svg";

const Nav = () => {
  return (
    <div className="py-4 px-24 bg-white flex justify-between items-center fixed w-full shadow-lg">
      <div>
        <img className="w-20" src={icon} alt="toogle" />
      </div>
      <div className="text-3xl lg:hidden">
        <MdMenu />
      </div>
      <div className="flex items-center gap-10">
        <div className="hidden lg:flex gap-10 text-lg text-black">
          <span className="bg-black text-white px-3 py-2 rounded-full flex justify-center items-center">
            Home
          </span>
          <span className="px-3 py-2 rounded-full flex justify-center items-center">
            About
          </span>
          <span className="px-3 py-2 rounded-full flex justify-center items-center">
            Contact
          </span>
          <span className="px-3 py-2 rounded-full flex justify-center items-center">
            Berita
          </span>
        </div>
        <div className="flex gap-10 text-lg text-black font-semibold">
          <a className="hover:cursor-pointer hover:border-b-4 transtition-all duration-300 hover:boder-black">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;