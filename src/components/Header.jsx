import icon from "../assets/icon.svg";
import hamburger_active from "../assets/hamburger_active.svg";
import hamburger_nonactive from "../assets/hamburger_nonactive.svg";
import { useState } from "react";

function Header() {
  const [toogleNavbar, setToogleNavbar] = useState(false);

  return (
    <>
      <nav className="bg-white relative px-4">
        <div className="container mx-auto flex justify-between py-12">
          <div className="order-1 sm:order-2 ">
            <img src={icon} alt="toogle" />
          </div>
          <div
            className="cursor-pointer order-2 sm:order-1 lg:hidden"
            onClick={() => setToogleNavbar(toogleNavbar ? false : true)}
          >
            <img
              src={toogleNavbar ? hamburger_active : hamburger_nonactive}
              alt=""
            />
          </div>
          <div className="hidden md:block font-medium order-3">
            <button className="rounded-full mr-16">Sign In</button>
            <button className="px-3 py-2 border-2 border-black rounded-full">
              Sign Up
            </button>
          </div>
          <div className="hidden order-2 lg:flex gap-2 text-lg text-black">
            <div className="bg-black px-16 py-[10px]  border-b-2 border-black text-white rounded-full">
              Home
            </div>
            <div className="px-16 py-[10px] text-black border-b-2 border-black">
              About
            </div>
            <div className="px-16 py-[10px] text-black border-b-2 border-black">
              Contact
            </div>
            <div className="px-16 py-[10px] text-black border-b-2 border-black">
              Berita
            </div>
          </div>
        </div>
        <div className={toogleNavbar ? "block" : "hidden"}>
          <ul className="text-lg text-black lg:flex gap-2">
            <li className="bg-black px-16 py-[10px]  border-b-2 border-black text-white">
              Home
            </li>
            <li className="px-16 py-[10px] text-black border-b-2 border-black">
              About
            </li>
            <li className="px-16 py-[10px] text-black border-b-2 border-black">
              Contact
            </li>
            <li className="px-16 py-[10px] text-black border-b-2 border-black">
              Berita
            </li>
            <li className="px-16 py-[10px] text-black border-b-2 border-black sm:hidden">
              Sign In
            </li>
            <li className="px-16 py-[10px] text-black border-b-2 border-black sm:hidden">
              Sign Up
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Header;
