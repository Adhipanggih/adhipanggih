import { MdMenu } from "react-icons/md";
import icon from "../assets/icon.svg";

const Nav = () => {
  return (
    <div className="py-8 flex justify-between items-center">
      <div>
        <img className="w-20" src={icon} alt="toogle" />
      </div>
      <div className="text-3xl lg:hidden">
        <MdMenu />
      </div>
      <div className="hidden order-2 lg:flex gap-10 text-lg text-black">
        <div className="bg-black text-white px-3 py-2 rounded-full flex justify-center items-center">
          Home
        </div>
        <div className="px-3 py-2 rounded-full flex justify-center items-center">
          About
        </div>
        <div className="px-3 py-2 rounded-full flex justify-center items-center">
          Contact
        </div>
        <div className="px-3 py-2 rounded-full flex justify-center items-center">
          Berita
        </div>
      </div>
    </div>
  );
};

export default Nav;
