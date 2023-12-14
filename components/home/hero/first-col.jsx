/**
 * FirstCol.jsx
 */

import { Button } from "@/components/ui/button";
import {
  FaceIcon,
  ImageIcon,
  RulerSquareIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const FirstCol = () => {
  return (
    <div className="max-w-2xl col-span-10 px-4 py-14 md:py-0 sm:px-7 md:p-12 md:col-span-9 lg:col-span-6 xl:col-span-5">
      <div className="flex justify-center w-full h-full border-2 border-white supports-backdrop-blur:bg-white/90 bg-white/80 backdrop-blur rounded-xl">
        <div className="flex flex-col justify-between gap-6 px-[12%] py-[12%]">
          <div className="flex flex-col gap-1">
            <div className="font-serif text-2xl font-bold md:text-3xl ">
              Holding Imperial Construct
            </div>
            <hr className="border-neutral-400" />
            <div className="font-light ">Experienta de peste 10 ani.</div>
          </div>
          <div className="max-w-lg text-xs font-medium sm:text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
            aliquam quibusdam? Veniam! aliquam quibusdam? Veniam! aliquam
            quibusdam? Veniam! quibusdam? Veniam! quibusdam? Veniam!
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <RulerSquareIcon />
              <span className="text-sm md:text-md">Measure</span>
            </div>
            <div className="flex items-center gap-2">
              <SunIcon />
              <span className="text-sm md:text-md">Plan</span>
            </div>
            <div className="flex items-center gap-2">
              <ImageIcon />
              <span className="text-sm md:text-md">Complete</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-3">
            <Link
              href={"/calculator"}
              className="bg-white rounded-lg py-2 w-full text-center hover:bg-neutral-100 border border-dotted font-semibold"
            >
              Calculator
            </Link>
            <Link
              href={"/contact-us"}
              className="bg-neutral-900 rounded-lg text-white text-center py-2 w-full hover:bg-neutral-800"
            >
              Contact-Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCol;
