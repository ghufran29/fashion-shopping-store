import React from "react";
import Image from "next/image";
import pic1 from "../assets/newarrivals/pic1.png";
import pic2 from "../assets/newarrivals/pic2.png";
import pic3 from "../assets/newarrivals/pic3.png";
import { BsArrowRight } from "react-icons/bs";

const NewArrivals = () => {
  return (
    <div>
      <h3 className="text-2xl lg:text-3xl font-extrabold uppercase mb-12 lg:mb-20">
        New Arrivals
      </h3>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center">
        <div className="p-2 rounded-md hover:scale-95 transition-transform mb-6 lg:mb-0">
          <Image width={320} height={400} src={pic1} alt="pic1" />
          <div className="flex justify-between items-center mt-4">
            <div className="cursor-pointer ml-1">
              <h5 className="text-lg lg:text-xl font-semibold">Hoodies & Sweatshirt</h5>
              <span className="text-neutral-600">Explore Now!</span>
            </div>
            <div className="mr-1 cursor-pointer">
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="p-2 rounded-md hover:scale-95 transition-transform mb-6 lg:mb-0">
          <Image width={320} height={400} src={pic2} alt="pic2" />
          <div className="flex justify-between items-center mt-4">
            <div className="cursor-pointer ml-1">
              <h5 className="text-lg lg:text-xl font-semibold">Coats & Parkas</h5>
              <span className="text-neutral-600">Explore Now!</span>
            </div>
            <div className="mr-1 cursor-pointer">
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="p-2 rounded-md hover:scale-95 transition-transform">
          <Image width={320} height={400} src={pic3} alt="pic3" />
          <div className="flex justify-between items-center mt-4">
            <div className="cursor-pointer ml-1">
              <h5 className="text-lg lg:text-xl font-semibold">Tees & T-Shirt</h5>
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

export default NewArrivals;
