import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[#E5C643] min-h-[300px] py-16 px-8 lg:py-28 lg:px-64 text-center">
      <p className="text-2xl lg:text-5xl text-white font-extrabold tracking-wide uppercase">
        Join Shopping Community to <br />
        Get Monthly Promo
      </p>
      <p className="text-lg lg:text-2xl my-6 text-white tracking-wide">
        Type your email down below and be young wild generation
      </p>
      <form className="bg-white mx-auto max-w-lg lg:max-w-none lg:mx-72 flex flex-col lg:flex-row justify-between items-center rounded-md text-lg">
        <input
          type="email"
          name="email"
          className="w-full lg:w-auto px-5 py-4 bg-gray-100 rounded-md text-gray-900 text-base lg:text-xl placeholder:text-gray-500 focus:outline-none bg-transparent mb-4 lg:mb-0 lg:mr-4"
          placeholder="Add your email here"
          required
        />
        <button
          type="submit"
          className="w-full lg:w-auto text-lg lg:text-2xl uppercase lg:m-1 py-3 px-6 bg-black rounded-lg text-white font-medium tracking-wide border hover:border-black hover:text-black hover:bg-yellow-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
