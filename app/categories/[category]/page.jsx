/**
 * categories/[category]/page.jsx
 */

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    category: "building",
    title: "Ground-Up Construction Services",
    description:
      "At [Company Name], we are your trusted partner for turning your construction dreams into reality. Our ground-up construction services encompass a wide range of capabilities, ensuring that we can handle projects of all sizes and complexities.",
    keyFeatures: [
      "Experienced Team: Our team of architects, engineers, and construction professionals bring years of expertise to every project.",
      "Customized Design: We work closely with our clients to create tailored designs that meet their unique needs and preferences.",
      "Sustainable Practices: Committed to sustainability, we integrate eco-friendly materials and practices into our projects.",
      "Budget Management: We understand the importance of staying on budget, and we manage costs diligently throughout the project.",
      "Quality Assurance: Our stringent quality control measures guarantee a finished product that exceeds your expectations.",
      "Timely Delivery: We adhere to project timelines, ensuring that your project is completed on schedule.",
    ],
    imgSrc: "/categories/building.webp",
    projectTypes: [
      {
        type: "Residential Construction",
        description:
          "We specialize in crafting beautiful and functional homes, from single-family houses to multi-unit residential complexes. Our residential construction projects are known for their quality and attention to detail.",
      },
      {
        type: "Commercial Construction",
        description:
          "Our commercial construction services cover a wide range of projects, including offices, retail spaces, and industrial facilities. We create spaces that support your business goals.",
      },
      {
        type: "Institutional Buildings",
        description:
          "For institutions such as schools, hospitals, and government buildings, we provide construction services that prioritize safety, functionality, and sustainability.",
      },
    ],
    clientTestimonials: [
      {
        clientName: "John Smith",
        companyName: "ABC Enterprises",
        testimonial:
          "Working with [Company Name] was a seamless experience. They delivered our project on time, and the quality of their work exceeded our expectations. We highly recommend their ground-up construction services.",
      },
      {
        clientName: "Sarah Johnson",
        companyName: "XYZ Realty",
        testimonial:
          "From the initial design phase to the final construction, [Company Name] demonstrated professionalism and expertise. Their attention to detail and commitment to sustainable practices set them apart. We are thrilled with the results.",
      },
    ],
  },
];

const Category = ({ params }) => {
  const categoryData = data.find((el) => el.category === params.category);

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden h-[50%]">
          {/* <div className="absolute z-10 text-xl font-bold text-white top-10 md:top-[20%] lg:top-[30%] left-[5%]  text-[30px] sm:text-[60px] md:text-[120px] xl:text-[200px]"> */}
          <div className="absolute z-10  font-bold text-white  left-[5%]  bottom-0 text-[200px]">
            Building
          </div>
          <Image
            src={categoryData.imgSrc}
            alt={categoryData.title}
            className="object-cover w-full h-full"
            fill
          />
        </div>
        <div className="w-full pt-[40%] md:pt-[37%] lg:pt-[35%] xl:pt-[25%] 2xl:pt-[15%]">
          <div className="relative z-50 flex items-center justify-center w-full h-full">
            <div className="w-full max-w-6xl p-2 mx-2 bg-white/95 rounded-lg  sm:p-4 lg:p-10 text-md ">
              <div className="flex flex-col gap-5 p-2 border border-dashed rounded-lg md:px-10 lg:px-16 border-neutral-400 sm:p-4">
                <h1 className="py-2 mb-2 font-serif font-bold text-center md:py-5 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                  {categoryData.title}
                </h1>
                <p className="text-xs text-gray-700 sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg">
                  {categoryData.description}
                </p>

                <div className="my-4">
                  <h2 className="text-xs font-semibold sm:text-sm md:text-md xl:text-md 2xl:text-md">
                    Key Features
                  </h2>
                  <ul className="mt-2 text-xs list-disc list-inside sm:text-sm md:text-md xl:text-md 2xl:text-md">
                    {categoryData.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="my-4">
                  <h2 className="text-xs font-semibold sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg">
                    Project Types
                  </h2>
                  <ul className="mt-2">
                    {categoryData.projectTypes.map((project, index) => (
                      <li key={index}>
                        <h3 className="text-xs font-semibold sm:text-sm md:text-md xl:text-md 2xl:text-md">
                          {project.type}
                        </h3>
                        <p className="py-1 text-xs text-gray-700 sm:text-sm md:text-md xl:text-sm 2xl:text-sm">
                          {project.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="my-4">
                  <h2 className="text-xs font-semibold sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg">
                    Client Testimonials
                  </h2>
                  {categoryData.clientTestimonials.map((testimonial, index) => (
                    <div key={index} className="mt-2">
                      <p className="text-xs font-semibold sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md">
                        {testimonial.clientName}
                      </p>
                      <p className="py-1 text-xs text-gray-700 sm:text-sm md:text-md xl:text-sm 2xl:text-sm">
                        {testimonial.testimonial}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact-us"
                  className="my-5 mb-16 w-full py-2 bg-neutral-900 rounded-lg hover:bg-neutral-800 text-center text-white  "
                >
                  Contact-Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Category;
