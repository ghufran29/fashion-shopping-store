import React from "react";
import Image from "next/image";
import Bpic from "../assets/bpic.png";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-[#F9DF56] to-[#E0C340] flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:min-h-[600px] p-6 lg:p-0">
      <section className="mb-8 lg:mb-0">
        <Image
          className="w-[320px] h-[310px] lg:w-[688px] lg:h-[668px]"
          src={Bpic}
          alt="banner pic"
        />
      </section>
      <section className="text-center lg:text-left pt-8 lg:pt-24 lg:mr-10">
        <div className="uppercase font-extrabold text-5xl lg:text-8xl mb-6 lg:mb-8">
          <span className="block bg-white pl-3 lg:pl-4 pr-3 mb-2 lg:mb-3 lg:mr-48">
            payday
          </span>
          <span className="block pl-3 lg:pl-4 mb-2 lg:mb-3">sale now</span>
        </div>
        <p className="ml-3 lg:ml-6 mb-5 lg:mb-7 text-lg lg:text-2xl font-medium">
          Spend minimal $100 get 30% off
          <br /> voucher code for your next purchase
        </p>
        <p className="ml-3 lg:ml-6 mb-5 lg:mb-7 text-lg lg:text-2xl font-medium">
          <span className="font-bold">1 June - 10 June 2021</span> <br />
          *Terms & Conditions apply
        </p>
        <button className="ml-3 lg:ml-6 text-lg lg:text-2xl font-medium bg-black border border-black hover:bg-white text-white py-3 lg:py-4 px-6 lg:px-8 rounded-lg hover:bg-transparent hover:text-black hover:border-neutral-700">
          Shop Now
        </button>
      </section>
    </div>
  );
};

export default Banner;
