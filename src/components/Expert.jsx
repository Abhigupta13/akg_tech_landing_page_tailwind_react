import React from "react";
import laptop from "../img/coding_complex_problems.png";
function Expert() {
  return (
    <div className="max-w-[1240px] mx-auto my-10 md:grid grid-cols-2">
      <div className="col-span-1 md:w-[80%]">
        <img className="inline" src={laptop} alt="laptop img" />
      </div>
      <div className="col-span-1 flex flex-col justify-center p-2">
        <h1 className="text-[#00df9a] font-bold my-3">LEARN FROM EXPERTS</h1>
        <p className="my-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          molestias minus perferendis quaerat. Esse vitae iure non commodi nihil
          error reiciendis hic maxime distinctio. Atque voluptate exercitationem
          sint vero ipsa!
        </p>
        <button className="w-[20%] mt-4 p-3 bg-black rounded text-white">
          Get started</button>
      </div>
    </div>
  );
}

export default Expert;
