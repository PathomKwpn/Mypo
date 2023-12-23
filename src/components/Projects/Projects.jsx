import React from "react";
import { useNavigate } from "react-router-dom";
const ProjectsPage = () => {
  const nevigate = useNavigate();
  return (
    <div
      className="sm:min-h-[100vh] bg-[#FFFFFF] flex flex-col items-center py-[70px] px-[15px] bg-cover"
      id="projects"
    >
      <div className="flex flex-col items-center mb-[30px] pb-2 font-bold text-[24px]  sm:text-3xl md:text-5xl lg:text-6xl  lg:mb-[60px] tracking-widest">
        My Projects
        <div className="w-[30px] h-[3px] md:h-[5px] md:w-[40px] md:mt-[20px] lg:h-[7px] lg:w-[50px] bg-[#7843e9] rounded-md mt-[10px]"></div>
      </div>
      <div className="flex justify-center">
        <div className="w-[95%] ">
          <div className="mb-[30px] lg:grid lg:grid-cols-2 lg:mb-[110px]">
            <img
              className="rounded-[5px] lg:w-[100%] shadow-xl"
              src="/image/projects-img/GrobFood/Home.png"
              alt=""
            />
            <div className="flex flex-col justify-center md:mb-[100px]">
              <div className="mt-[30px] flex flex-col justify-center">
                <h1 className="text-[18px] font-bold mb-4 text-center sm:text-xl lg:text-[28px]">
                  Grob Food
                </h1>
                <p className="text-[15px] text-[#666] text-center mb-[25px] sm:px-[80px] lg:px-[30px] lg:text-[18px] xl:px-[60px]">
                  GrobFood is a website with functions and formats that are
                  based on the GrabFood website. It is an E-commerce website
                  with both front-end and back-end development. A database has
                  also been created to store various information.
                </p>
                <span className="text-[13px] text-[#666] text-center mb-[25px] sm:px-[80px] lg:px-[30px] lg:text-[16px] xl:px-[60px]">
                  Tool : React,Tailwind CSS, TypeScript, Axios, NodeJS,
                  ExpresJS, MUI
                </span>
              </div>
              <div className="flex justify-center xl:mt-[50px]">
                <button
                  className="xl:px-[30px] xl:py-[10px] xl:text-[18px] shadow-xl bg-[#7843E9] hover:bg-[#704bbe] text-white font-bold py-2 px-4 border-b-4 border-[#5b3aa3] hover:border-[#543a8d] rounded"
                  onClick={() => {
                    nevigate("/Project-GrobFood");
                  }}
                >
                  Detail
                </button>
              </div>
            </div>
          </div>
          <div className="mb-[30px] lg:grid lg:grid-cols-2 lg:mb-[110px]">
            <img
              className="rounded-[5px] lg:w-[100%] shadow-xl"
              src="/image/projects-img/Airbnb/air-clonebnb.png"
              alt=""
            />
            <div className="flex flex-col justify-center md:mb-[100px]">
              <div className="mt-[30px] flex flex-col justify-center">
                <h1 className="text-[18px] font-bold mb-4 text-center sm:text-xl lg:text-[28px]">
                  Airbnb-clone
                </h1>
                <p className="text-[15px] text-[#666] text-center mb-[25px] sm:px-[80px] lg:px-[30px] lg:text-[18px] xl:px-[60px]">
                  Airbnb-clone is a project that clones the appearance of a
                  website to look like the actual website. To learn about html,
                  css and the placement of elements on web pages.
                </p>
                <span className="text-[13px] text-[#666] text-center mb-[25px] sm:px-[80px] lg:px-[30px] lg:text-[16px] xl:px-[60px]">
                  Tool : HTML, CSS
                </span>
              </div>
              <div className="flex justify-center xl:mt-[50px]">
                <button
                  className="xl:px-[30px] xl:py-[10px] xl:text-[18px] shadow-xl bg-[#7843E9] hover:bg-[#704bbe] text-white font-bold py-2 px-4 border-b-4 border-[#5b3aa3] hover:border-[#543a8d] rounded"
                  onClick={() => {
                    nevigate("/Project-AirbnbClone");
                  }}
                >
                  Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
