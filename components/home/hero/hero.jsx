/**
 * home/Hero.jsx
 */

import Image from "next/image";
import FirstCol from "./first-col";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center w-full h-full ">
      <div className="absolute top-0  z-10 flex flex-col justify-center w-full h-full font-bold text-white text-[300px] overflow-hidden  whitespace-nowrap">
        BEST-BEST-BEST-BEST
      </div>
      <Image
        src={"/hero-image.webp"}
        alt="=asdasd"
        fill
        className="object-cover w-full h-full"
      />
      {/* <div className="z-50 grid w-full h-full grid-cols-10 border-dashed border-x max-w-7xl sm:px-6 md:px-16"> */}
      <div className="z-50 grid w-full h-full grid-cols-10 max-w-7xl sm:px-6 md:px-16">
        <FirstCol />
      </div>
    </section>
  );
};

export default Hero;
