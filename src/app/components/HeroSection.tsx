import React from "react";
import Image from "next/image";
import heropic from "../assets/heropic.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between bg-[#f6f5f5] rounded-[30px] lg:rounded-[50px] mt-12 mb-8 min-h-[400px] lg:min-h-[600px] p-6 lg:p-0">
      <section className="pt-10 lg:pt-16 lg:pl-20 flex flex-col items-start">
        <h1 className="uppercase font-extrabold text-4xl lg:text-7xl mb-6 lg:mb-9">
          <span className="block bg-white pl-3 lg:pl-4 mb-2 lg:mb-3 mr-24 lg:mr-48">let's</span>
          <span className="block pl-3 lg:pl-4 mb-2 lg:mb-3">explore</span>
          <span className="block bg-yellow-300 pl-2 lg:pl-3 ml-0 lg:ml-1 mb-2 lg:mb-3 mr-24 lg:mr-44">unique</span>
          <span className="block pl-3 lg:pl-4">clothes.</span>
        </h1>
        <p className="ml-3 lg:ml-5 mb-5 lg:mb-7 text-lg lg:text-2xl font-medium text-center lg:text-left">
          Live for Influential and Innovative fashion!
        </p>
        <button className="ml-4 lg:ml-6 text-lg lg:text-2xl font-medium bg-black hover:bg-yellow-300 hover:border text-white py-3 lg:py-4 px-6 lg:px-8 rounded-lg hover:bg-transparent hover:text-black hover:border-neutral-700">
          Shop Now
        </button>
      </section>
      <section className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <Image
          className="w-[300px] h-[350px] lg:w-[560px] lg:h-[600px]"
          src={heropic}
          alt="hero pic"
        />
      </section>
    </div>
  );
};

export default HeroSection;
