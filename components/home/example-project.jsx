/**
 * exmaple-project.jsx
 */

"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Link from "next/link";

import { projects } from "@/data/projects";
import Image from "next/image";

const ExampleProject = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: "center",
    containScroll: "trimSnaps",
  });

  return (
    // <section className="mx-auto border-l border-dashed max-w-7xl ">
    <section className="pt-20 pb-10 mx-auto border-dashed max-w-7xl border-x border-neutral-300">
      <div className="w-full pb-4 text-xl font-semibold text-center text-neutral-500">
        PORTFOLIO:
      </div>
      <div className="relative z-50 w-full h-full px-5 border-dashed border-x">
        {/* <div className="overflow-hidden" ref={emblaRef}> */}
        <div
          className="relative gap-10 embla h-[600px] border-l border-y border-dashed border-neutral-400 rounded-lg"
          ref={emblaRef}
        >
          {/* <div className="flex gap-10"> */}
          <div className="pl-5 embla__container">
            {projects.map((data, id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0.3, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * id }}
                className="embla__slide min-w-[50vw] relative "
              >
                <Image
                  src={data.src}
                  alt={data.src}
                  fill
                  className="absolute top-0 left-0 z-0 object-cover w-full h-full "
                />
                <Link
                  href={data.href}
                  className="absolute flex items-center justify-center w-full h-full"
                >
                  <div>
                    <div>{data.title}</div>
                    {/* <div>{serv.description}</div> */}
                  </div>
                  <div>
                    <p>Card Content</p>
                  </div>
                  <div>
                    <p>Card Footer</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleProject;
