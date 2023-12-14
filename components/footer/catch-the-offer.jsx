/**
 * catch-the-offer.jsx
 */

import Image from "next/image";
import Link from "next/link";

const CatchTheOffer = () => {
  return (
    <div>
      <div className="w-full min-h-[50vh] h-[60vh] mt-32">
        <div className="w-full grid grid-cols-2 h-full">
          <div className="col-span-1 w-full h-full flex px-[10%] justify-center items-center  bg-neutral-100">
            <div className="flex flex-col gap-1 p-8">
              <h1 className="text-4xl font-semibold">Exclusive Offer!</h1>
              <p className="text-lg">Limited-time promotion:</p>
              <p className="text-3xl font-bold  mb-4">Get 10-15% OFF</p>
              <p className="text-xl">on your next service.</p>
              <p className="text-base mt-4">
                {`Don't miss this opportunity to save on our top-quality services.
                Our expert team is ready to deliver exceptional results just for
                you.`}
              </p>
              <Link
                href={"/contact-us"}
                className="mt-6 bg-black text-white text-center py-2 px-4 rounded-lg w-full font-semibold transition duration-300 ease-in-out"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="col-span-1 bg-slate-200 w-full h-full relative">
            <Image
              src="/showcase-price-offer.webp"
              alt="Service Offer"
              fill
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatchTheOffer;
