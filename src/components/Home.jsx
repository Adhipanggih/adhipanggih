import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full h-screen flex gap-4 justify-between font-roboto"
    >
      <div className="items-center flex">
        <div>
          <span className="block w-[277.76px] text-main text-[64px] font-light leading-[64px]">
            KARANG
          </span>
          <span className="text-zinc-800 text-[64px] font-bold leading-[64px] ">
            ASEM
          </span>
        </div>
      </div>

      <img
        className="w-[770px] h-[829px] items-center "
        src="https://via.placeholder.com/770x829"
      />
    </div>
  );
};

export default Home;
