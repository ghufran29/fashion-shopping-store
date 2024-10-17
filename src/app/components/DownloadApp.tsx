import React from "react";
import Image from "next/image";
import Mobile from "../assets/downloadapp/mobile.png";
import Appstore from "../assets/downloadapp/appstore.png";
import Playstore from "../assets/downloadapp/playstore.png";

const DownloadApp = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center p-4 lg:p-8">
      <div className="text-center lg:text-left mb-8 lg:mb-0">
        <p className="text-2xl lg:text-4xl font-black uppercase tracking-wider leading-relaxed">
          download app & <br /> get the voucher!
        </p>
        <p className="my-6 lg:my-10 text-base lg:text-lg font-medium text-neutral-500">
          Get 30% off for first transaction using <br />
          Rondovision mobile app for now.
        </p>
        <div className="flex justify-center lg:justify-start gap-3">
          <Image width={140} src={Appstore} alt="Appstore" />
          <Image width={140} src={Playstore} alt="Playstore" />
        </div>
      </div>
      <div className="flex justify-center lg:block">
        <Image className="w-[250px] lg:w-[550px]" src={Mobile} alt="mobile" />
      </div>
    </div>
  );
};

export default DownloadApp;
