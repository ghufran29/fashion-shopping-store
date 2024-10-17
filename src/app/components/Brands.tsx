import React from "react";
import Image from "next/image";
import HM from "../assets/brands/H&M.png";
import obey from "../assets/brands/obey.png";
import shopify from "../assets/brands/shopify.png";
import lacoste from "../assets/brands/lacoste.png";
import levis from "../assets/brands/levis.png";
import amazon from "../assets/brands/amazon.png";

const Brands = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-around items-center bg-yellow-300 py-6 px-4 lg:px-8">
      <div className="m-4">
        <Image width={60} height={60} src={HM} alt="H&M" />
      </div>
      <div className="m-4">
        <Image width={80} height={80} src={obey} alt="obey" />
      </div>
      <div className="m-4">
        <Image width={100} height={100} src={shopify} alt="shopify" />
      </div>
      <div className="m-4">
        <Image className="mb-2" width={120} height={120} src={lacoste} alt="lacoste" />
      </div>
      <div className="m-4">
        <Image className="mt-1" width={80} height={80} src={levis} alt="levis" />
      </div>
      <div className="m-4">
        <Image className="mt-3" width={100} height={100} src={amazon} alt="amazon" />
      </div>
    </div>
  );
};

export default Brands;
