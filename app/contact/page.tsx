import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center py-16">
      <h1 className="lg:text-5xl text-4xl font-bold">Contact</h1>
      <h2 className="lg:text-2xl text-xl font-bold text-blue-500 pt-3">Feel Free to Contact!</h2>

      <form className="mt-10 w-full">
        <div className="w-[80%] mx-auto md:w-[50%]">
          <input
            type="text"
            placeholder="Enter your name"
            className="flex-1  text-black bg-gray-300 placeholder:text-gray-600 px-6 py-3  my-2 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div className="w-[80%] mx-auto md:w-[50%]">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 my-2 bg-gray-300 text-black placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div className="w-[80%] mx-auto md:w-[50%]">
          <textarea
            id=""
            rows={7}
            placeholder="Message"
            className="flex-1 my-2 bg-gray-300 text-black placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          ></textarea>
        </div>
        <div className="mt-4 w-[80%] mx-auto md:w-[50%]">
          <button
            type="submit"
            className=" bg-gray-600  px-8 py-3 text-white hover:bg-opacity-80 transition-all duration-200 rounded-lg"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
