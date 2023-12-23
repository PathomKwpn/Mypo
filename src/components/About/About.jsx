import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
const About = () => {
  return (
    <div className="sm:min-h-[100vh] bg-[#f5f5f5] flex flex-col items-center py-[70px] px-[30px] ">
      <div
        id="about-me"
        className="flex flex-col items-center mb-[30px] pb-2 font-bold text-[24px]  sm:text-3xl md:text-5xl lg:text-6xl  lg:mb-[60px]"
      >
        About Me
        <div className="w-[30px] h-[3px] md:h-[5px] md:w-[40px] md:mt-[20px] lg:h-[7px] lg:w-[50px] bg-[#7843e9] rounded-md mt-[10px]"></div>
      </div>
      <div className="text-[14px] flex justify-center max-w-[300px] text-center sm:text-lg sm:max-w-[500px] mb-[20px] md:text-xl lg:text-2xl lg:max-w-[700px] md:mb-[50px] lg:mb-[120px]">
        I am a fresh graduate of Information Technology currently looking for an
        entry-level Front-end Developer position to learn and gain experience
        from real work and seek new challenges. In order to be successful in
        this career
      </div>

      <div className="w-full flex flex-col items-center justify-center mb-[30px] pb-2 font-bold text-[24px] sm:text-3xl md:text-5xl lg:text-5xl  md:mb-[40px] lg:mb-[60px]">
        Skills
        <div className="w-[30px] h-[3px] md:h-[5px] md:w-[40px] md:mt-[20px] lg:h-[7px] lg:w-[50px] bg-[#7843e9] rounded-md mt-[10px]"></div>
      </div>
      <div>
        <ul className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4 lg:gap-6 mb-5">
          <li className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[100px] lg:h-[100px] font-bold p-4 rounded-2xl shadow-md hover:shadow-[#8f8f8f] border-2">
            <img
              className="object-contain drop-shadow-md"
              src="./image/skill_logo/html.png"
              alt=""
            />
          </li>
          <li className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[100px] lg:h-[100px] font-bold p-4 rounded-2xl shadow-md hover:shadow-[#8f8f8f] border-2">
            <img
              className="object-contain drop-shadow-md"
              src="./image/skill_logo/css.png"
              alt=""
            />
          </li>
          <li className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[100px] lg:h-[100px] font-bold p-4 rounded-2xl shadow-md hover:shadow-[#8f8f8f] border-2">
            <img
              className="object-contain drop-shadow-md"
              src="./image/skill_logo/js.png"
              alt=""
            />
          </li>
          <li className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[100px] lg:h-[100px] font-bold p-4 rounded-2xl shadow-md hover:shadow-[#8f8f8f] border-2">
            <img
              className="object-contain drop-shadow-md"
              src="./image/skill_logo/react.png"
              alt=""
            />
          </li>
          <li className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[100px] lg:h-[100px] font-bold p-4 rounded-2xl shadow-md hover:shadow-[#8f8f8f] border-2">
            <img
              className="object-contain drop-shadow-md"
              src="./image/skill_logo/nodejs.png"
              alt=""
            />
          </li>
          <li className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[100px] lg:h-[100px] font-bold p-4 rounded-2xl shadow-md hover:shadow-[#8f8f8f] border-2">
            <img
              className="object-contain drop-shadow-md"
              src="./image/skill_logo/Expressjs.png"
              alt=""
            />
          </li>

          <li className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[100px] lg:h-[100px] font-bold p-4 rounded-2xl shadow-md hover:shadow-[#8f8f8f] border-2">
            <img
              className="object-contain drop-shadow-md"
              src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
              alt=""
            />
          </li>

          <li className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[100px] lg:h-[100px] font-bold p-4 rounded-2xl shadow-md hover:shadow-[#8f8f8f] border-2">
            <img
              className="object-contain drop-shadow-md"
              src="./image/skill_logo/typescript.png"
              alt=""
            />
          </li>
          <li className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[100px] lg:h-[100px] font-bold p-4 rounded-2xl shadow-md hover:shadow-[#8f8f8f] border-2">
            <img
              className="object-contain drop-shadow-md"
              src="./image/skill_logo/Axios.png"
              alt=""
            />
          </li>
        </ul>
      </div>
      <div className="w-full flex flex-col items-center justify-center mb-[30px] pb-2 font-bold text-[24px] sm:text-3xl md:text-5xl lg:text-5xl  md:mb-[40px] lg:mb-[60px] mt-[60px]">
        Tool
        <div className="w-[30px] h-[3px] md:h-[5px] md:w-[40px] md:mt-[20px] lg:h-[7px] lg:w-[50px] bg-[#7843e9] rounded-md mt-[10px]"></div>
      </div>
      <div>
        <ul className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-4 lg:gap-6 mb-5">
          <li className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[100px] lg:h-[100px] font-bold p-4 rounded-2xl shadow-md hover:shadow-[#8f8f8f] border-2">
            <img
              className="object-contain drop-shadow-md"
              src="./image/skill_logo/postman.svg"
              alt=""
            />
          </li>
          <li className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[100px] lg:h-[100px] font-bold p-4 rounded-2xl shadow-md hover:shadow-[#8f8f8f] border-2">
            <img
              className="object-contain drop-shadow-md"
              src="./image/skill_logo/Docker.png"
              alt=""
            />
          </li>
          <li className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[100px] lg:h-[100px] font-bold p-4 rounded-2xl shadow-md hover:shadow-[#8f8f8f] border-2">
            <img
              className="object-contain drop-shadow-md"
              src="./image/skill_logo/git.png"
              alt=""
            />
          </li>
          <li className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[100px] lg:h-[100px] font-bold p-4 rounded-2xl shadow-md hover:shadow-[#8f8f8f] border-2">
            <img
              className="object-contain drop-shadow-md"
              src="./image/skill_logo/github.png"
              alt=""
            />
          </li>
          <li className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[100px] lg:h-[100px] font-bold p-4 rounded-2xl shadow-md hover:shadow-[#8f8f8f] border-2">
            <img
              className="object-contain drop-shadow-md"
              src="./image/skill_logo/Dbeaver.png"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
