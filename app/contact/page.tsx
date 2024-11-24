import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center py-16">
      <h1 className="lg:text-5xl text-4xl font-bold">Contact</h1>
      <h2 className="lg:text-2xl text-xl font-bold text-blue-900 pt-3">Feel Free to Contact!</h2>

      <form className="mt-10 w-full">
        <div className="w-[80%] mx-auto md:w-[40%]">
          <input
            type="text"
            placeholder="Enter your name"
            className="flex-1  shadow-lg shadow-[#59565699]  text-black bg-gray-200 placeholder:text-gray-600 px-6 py-3  my-2 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div className="w-[80%] mx-auto md:w-[40%]">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 my-2 shadow-lg shadow-[#59565699] bg-gray-200 text-black placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div className="w-[80%] mx-auto md:w-[40%]">
          <textarea
            id=""
            rows={7}
            placeholder="Message"
            className="flex-1 my-2 shadow-lg shadow-[#59565699] bg-gray-200 text-black placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          ></textarea>
        </div>
        <div className="mt-4 w-[80%] mx-auto md:w-[40%]">
          <button
            type="submit"
            className=" shadow-md shadow-[#2e2d2d99] bg-gray-600 px-4 py-2 lg:px-8 lg:py-3 text-white hover:bg-opacity-80 transition-all duration-200 rounded-lg"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
