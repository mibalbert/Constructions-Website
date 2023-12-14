/**
 * card-categories.jsx
 */

import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Building",
    imgSrc: "/categories/building.webp",
    href: "/categories/building",
  },
  {
    title: "Interior",
    imgSrc: "/categories/interior.webp",
    href: "/categories/building",
  },
  {
    title: "Sewers",
    imgSrc: "/categories/sewers.webp",
    href: "/categories/building",
  },
  {
    title: "Electrical",
    imgSrc: "/categories/electrical.webp",
    href: "/categories/building",
  },
  {
    title: "Structural",
    imgSrc: "/categories/structural.webp",
    href: "/categories/building",
  },
  {
    title: "Roofing",
    imgSrc: "/categories/roofing.webp",
    href: "/categories/building",
  },
];

const CardCategories = () => {
  return (
    <section className="pt-5 pb-20 mx-auto border-dashed max-w-7xl border-x border-neutral-300">
      <div className="w-full pb-4 text-xl font-semibold text-center text-neutral-500">
        CATEGORIES:
      </div>
      <div className="grid w-full grid-cols-3 grid-rows-2 gap-2 px-4">
        {data.map((el, idx) => {
          return (
            <Link
              key={idx}
              href={el.href}
              className="group relative z-0 rounded-lg min-h-[330px] w-full h-full border border-dashed p-2 border-neutral-400"
            >
              <div className="relative w-full h-full px-5 py-20 border border-dashed">
                <div className="relative z-50 font-bold text-black text-7xl group-hover:text-white">
                  {el.title}
                </div>
                <Image
                  src={el.imgSrc}
                  alt={el.title}
                  fill
                  className="z-10 object-cover rounded-lg greyscale group-hover:grayscale-0"
                />
                {/* <div className="absolute top-0 left-0 z-40 w-full h-full bg-gradient-to-b from-white/60 via-slate-50/60 to-neutral-700/30"></div> */}
                {/* <div className="absolute top-0 left-0 z-40 w-full h-full bg-gradient-to-b from-white/60 via-slate-50/60 to-neutral-700/30"></div> */}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CardCategories;

//////////////////////////////// KINDA WORKS
/**
 * card-categories.jsx
 */

// import Image from "next/image";
// import Link from "next/link";

// const data = [
//   {
//     title: "Building",
//     imgSrc: "/categories/building.webp",
//     href: "/building",
//   },
//   {
//     title: "Interior",
//     imgSrc: "/categories/interior.jpg",
//     href: "/building",
//   },
//   {
//     title: "Sewers",
//     imgSrc: "/categories/sewers.jpg",
//     href: "/building",
//   },
//   {
//     title: "Electrical",
//     imgSrc: "/categories/electrical.jpg",
//     href: "/building",
//   },
//   {
//     title: "Structural",
//     imgSrc: "/categories/structural.jpg",
//     href: "/building",
//   },
//   {
//     title: "Roofing",
//     imgSrc: "/categories/roofing.jpg",
//     href: "/building",
//   },
// ];

// const CardCategories = () => {
//   return (
//     <section className="py-20 mx-auto border-dashed max-w-7xl border-x">
//       <div className="grid w-full grid-cols-3 grid-rows-2 gap-3 px-4">
//         {data.map((el, idx) => {
//           return (
//             <div key={idx} className="w-full h-full border border-dashed">
//               <Link
//                 href={el.href}
//                 className="group relative z-0 py-20 rounded-lg min-h-[330px] w-full h-full border border-dashed"
//               >
//                 <div className="relative z-50 font-bold text-black text-7xl group-hover:text-white">
//                   {el.title}
//                 </div>
//                 <Image
//                   src={el.imgSrc}
//                   alt={el.title}
//                   fill
//                   className="z-10 object-cover rounded-lg greyscale group-hover:grayscale-0"
//                 />
//                 {/* <div className="absolute top-0 left-0 z-40 w-full h-full bg-gradient-to-b from-white/60 via-slate-50/60 to-neutral-700/30"></div> */}
//                 {/* <div className="absolute top-0 left-0 z-40 w-full h-full bg-gradient-to-b from-white/60 via-slate-50/60 to-neutral-700/30"></div> */}
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default CardCategories;
