import React from "react";
import Image from "next/image";
import pic1 from "../assets/youngsfavorite/pic1.png";
import pic2 from "../assets/youngsfavorite/pic2.png";
import { BsArrowRight } from "react-icons/bs";

const YoungsFavourite = () => {
  return (
    <div className="p-4">
      <h3 className="text-2xl lg:text-3xl font-extrabold mb-12 lg:mb-20">
        Young's Favourite
      </h3>
      <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-8 items-center">
        <div className="p-2 rounded-md hover:scale-105 transition-transform mb-8 lg:mb-0">
          <Image
            className="w-[320px] h-[380px] lg:w-[660px] lg:h-[auto]"
            src={pic1}
            alt="pic1"
          />
          <div className="flex justify-between items-center mt-4">
            <div className="cursor-pointer ml-1">
              <h5 className="text-lg lg:text-xl font-semibold">
                Trending on Instagram
              </h5>
              <span className="text-neutral-600">Explore Now!</span>
            </div>
            <div className="mr-1 cursor-pointer">
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="p-2 rounded-md hover:scale-105 transition-transform">
          <Image
            className="w-[320px] h-[380px] lg:w-[660px] lg:h-[auto]"
            src={pic2}
            alt="pic2"
          />
          <div className="flex justify-between items-center mt-4">
            <div className="cursor-pointer ml-1">
              <h5 className="text-lg lg:text-xl font-semibold">All Under $40</h5>
              <span className="text-neutral-600">Explore Now!</span>
            </div>
            <div className="mr-1 cursor-pointer">
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoungsFavourite;
