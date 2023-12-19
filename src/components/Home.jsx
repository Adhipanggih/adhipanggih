import React from "react";

const Home = () => {
  return (
    <div id="home" className="w-full lg:flex gap-4 justify-between">
      <div className="items-center flex">
        <div className="text-5xl font-semibold tracking-wide">
          <h1>
            Welcome <span className="text-main">Karang</span>
          </h1>
          <span className="block">Asem</span>
          <p className="text-sm font-light">Karang Asem is a village in the city of Surakarta</p>
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
