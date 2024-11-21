import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-800 h-[30vh] w-full py-3  flex justify-center items-center flex-col mt-3 gap-y-14">
      <div className="flex justify-center items-center gap-x-10 text-2xl lg:text-3xl pt-3 ">
        <Link href={"https://github.com/ayesha-aziz123"} target="_blank">
          <FaGithub className="text-white hover:transition-all hover:duration-[0.3s] hover:ease hover:scale-110 hover:text-gray-400 " />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/ayesha-aziz-574780310/"}
          target="_blank"
        >
          <FaLinkedin className="text-white hover:transition-all hover:duration-[0.3s] hover:ease hover:scale-110 hover:text-sky-500" />
        </Link>
        <Link href={"mailto:"} target="_blank">
          <MdEmail className="text-white hover:transition-all hover:duration-[0.3s] hover:ease hover:scale-110 hover:text-orange-500" />
        </Link>
        <Link href={"#"}>
          <FaFacebook className="text-white hover:transition-all hover:duration-[0.3s] hover:ease hover:scale-110 hover:text-blue-600" />
        </Link>
      </div>
      <div className="text-center text-white text-[14px]">
        <p className="text-gray-300 pb-2">Nextjs Blog by Ayesha</p>
        <p>&#169; 2024 Ayesha Aziz | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
