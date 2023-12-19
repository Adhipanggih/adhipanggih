import { MdMenu } from "react-icons/md";

const NavItems = ({ name, tag, addClass }) => {
  const id = "#" + tag;
  const Class =
    "hover:shadow-lg cursor-pointer px-3 py-2 rounded-full flex justify-center items-center hover:text-black transition-all duration-300" +
    addClass;
  return (
    <span className={Class}>
      <a href={id}>{name}</a>
    </span>
  );
};

const NavItemsM = ({name, tag}) => {
    const id = "#" + tag;
  return (
    <a
      href={id}
      className="transition-all flex items-center h-0 opacity-0 duration-300 border px-10 py-6 hover:text-black"
      id="items"
    >
      {name}
    </a>
  );
}

const Nav = () => {
  const items = [
    {
      name: "About",
      id: "about",
    },
    {
      name: "Contact",
      id: "contact",
    },
    {
      name: "News",
      id: "news",
    },
  ];

  const showHiddenNav = () => {
    const items = document.querySelectorAll("#items");
    const nav = document.getElementById("navItems")
    nav.classList.toggle("h-0")
    nav.classList.toggle("h-48")
    nav.classList.toggle("mt-4")
    items.forEach((i) => {
      const list = i.classList
      list.toggle("opacity-0")
      list.toggle("h-0")
      list.toggle("h-6")
    })
  };
  return (
    <div className="py-4 lg:px-24 bg-white fixed w-full shadow-lg">
      <div className="flex justify-between items-center w-full">
        <div className="text-2xl font-semibold">
          <a href="#home">SEKAWAN</a>
        </div>
        <div
          className="text-3xl lg:hidden cursor-pointer"
          onClick={showHiddenNav}
        >
          <MdMenu />
        </div>
        <div className="lg:flex hidden items-center gap-10">
          <div className="hidden lg:flex gap-10 text-lg text-main">
            <span className="hover:shadow-lg bg-black text-white px-3 py-2 rounded-full flex justify-center items-center">
              <a href="#home">Home</a>
            </span>
            {items.map((i) => (
              <NavItems key={i.name} tag={i.id} name={i.name} />
            ))}
            <a className="hover:shadow-lg text-lg px-3 py-2 text-black font-semibold cursor-pointer hover:ring hover:ring-black transition-all duration-300 rounded-full">
              Login
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-0 transition-all duration-300 font-semibold text-main" id="navItems">
        <a
          href={"#home"}
          className="transition-all bg-black text-white flex items-center h-0 opacity-0 duration-300 border px-10 py-6"
          id="items"
        >
          Home
        </a>
        {items.map((i) => (
          <NavItemsM key={i.name} tag={i.id} name={i.name} />
        ))}
      </div>
    </div>
  );
};

export default Nav;
