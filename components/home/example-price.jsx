/**
 * example-price.jsx
 */

import {
  FaceIcon,
  ImageIcon,
  RulerSquareIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

const ExamplePrice = () => {
  return (
    // <section className="mx-auto border-dashed max-w-7xl border-x ">
    <section className="mx-auto max-w-7xl">
      <div className="grid grid-cols-2">
        <div className="col-span-2 md:col-span-1 p-[10%]">
          <div className="text-xl font-semibold">Limited Time Offer!</div>
          <div className="text-sm md:text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            laudantium molestiae optio!
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
        </div>
        <div className="relative col-span-2 md:col-span-1 p-[10%] ">
          <Image
            src={"/example-project-price.jpg"}
            alt="example project price"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ExamplePrice;
