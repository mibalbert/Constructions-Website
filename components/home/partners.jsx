import React from "react";

import { Arabesque, Cona, Dedeman, LeroyMerlin } from "@/components/ui/icons";

const Partners = () => {
  return (
    <div className="w-full">
      {/* <div className="flex flex-col gap-5 py-[3%] mx-auto border-dashed  px-[3%] max-w-7xl md:border-x"> */}
      <div className="flex flex-col gap-5 py-[3%] mx-auto px-[3%] max-w-7xl ">
        {/* <div className="text-xl font-thin text-gray-500">Partners:</div> */}
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-1 w-[50%] h-[50%] mx-auto grayscale hover:grayscale-0">
            <Arabesque />
          </div>
          <div className="col-span-1 w-[50%] h-[50%] mx-auto grayscale hover:grayscale-0">
            <Cona />
          </div>
          <div className="col-span-1 w-[50%] h-[50%] mx-auto grayscale hover:grayscale-0">
            <Dedeman />
          </div>
          <div className="col-span-1 w-[50%] h-[50%] mx-auto grayscale hover:grayscale-0">
            <LeroyMerlin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
