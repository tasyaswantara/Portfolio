import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-pink-50 w-full py-8">
      <div className="flex flex-col items-center px-20">
        <div className=" flex w-full justify-between mb-16">
          <div>
            <p className="font-bold text-lg text-gray-800">Natasya Desinta S</p>
            <p className="text-pink-500 font-semibold text-2xl">
              Front-End Developer
            </p>
          </div>
          <div className="flex space-x-6 mt-6">
          <div className=" cursor-pointer text-black text-3xl hover:text-pink-500  transform hover:scale-125 transition duration-300">
            <AiOutlineLinkedin
              size={40}
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/natasya-desinta-swantara-365629241/",
                  "_blank"
                );
              }}
            />
          </div>
          <div className=" cursor-pointer text-black text-3xl hover:text-pink-500  transform hover:scale-125 transition duration-300">
            <VscGithub
              size={40}
              onClick={() => {
                window.open("https://github.com/tasyaswantara", "_blank");
              }}
            />
          </div>
          <div className=" cursor-pointer text-black text-3xl hover:text-pink-500  transform hover:scale-125 transition duration-300">
            <FiInstagram
              size={40}
              onClick={() => {
                window.open("https://www.instagram.com/tasya_ds612/", "_blank");
              }}
            />
          </div>
        </div>
        </div>

        <div className="h-[2px] w-full bg-pink-500 mt-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
