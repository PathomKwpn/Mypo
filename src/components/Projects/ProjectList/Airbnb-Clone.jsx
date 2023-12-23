import React from "react";
import Navbar from "../../Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const GrobFoodPage = () => {
  return (
    <div className=" bg-slate-0 min-h-[100vh] flex flex-col justify-start items-center">
      <Navbar />
      <section className="flex flex-col justify-center items-center mx-[10px] md:mx-[10%] w-full rounded-md px-[30px] mb-[24px] bg-[url('/image/bg-Home2.jpg')] bg-cover py-[60px] backdrop-filter backdrop-blur-md">
        <header className="w-full flex justify-center text-[24px] font-bold my-[24px] lg:my-[48px] lg:text-[48px]">
          AirBnb-Clone Project
        </header>
        <header className="text-center text-[16px] font-bold mb-[16px] flex flex-col justify-center items-center">
          <div className="bg-[orange] text-white w-[36px] h-[36px] flex justify-center items-center rounded-[50%] shadow-sm mb-[36px]">
            1
          </div>
          Description
          <div className="w-[30px] h-[3px] md:h-[5px] md:w-[40px] md:mt-[20px] lg:h-[7px] lg:w-[50px] bg-[#7843e9] rounded-md mt-[10px]"></div>
        </header>
        <p className="text-center w-[95%] md:w-[45%] mt-[10px] ">
          Airbnb-clone is a project that clones the appearance of a website to
          look like the actual website. To learn about html, css and the
          placement of elements on web pages.
        </p>
        <button className="min-w-[140px] mt-[52px] xl:px-[30px] xl:py-[10px] xl:text-[18px] shadow-xl bg-[#7843E9] hover:bg-[#704bbe] text-white font-bold py-2 px-4 border-b-4 border-[#5b3aa3] hover:border-[#543a8d] rounded">
          <Link to={"https://pathom-airbnb-clone.netlify.app/"} target="_blank">
            Project Demo
          </Link>
        </button>
      </section>
      <section className="mx-[10px] md:mx-[10%] max-w-[700px] pb-[12px] px-[30px] my-[24px]">
        <div className="text-center text-[16px] font-bold mb-[16px] flex flex-col justify-center items-center">
          <div className="bg-[orange] text-white w-[36px] h-[36px] flex justify-center items-center rounded-[50%] shadow-sm mb-[36px]">
            2
          </div>
          Web Design
          <div className="w-[30px] h-[3px] md:h-[5px] md:w-[40px] md:mt-[20px] lg:h-[7px] lg:w-[50px] bg-[#7843e9] rounded-md mt-[10px]"></div>
        </div>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper max-w-[300px] md:max-w-[600px]"
        >
          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center ">
              <img
                src="../public/image/projects-img/Airbnb/air-clonebnb.png"
                alt="Airbnb-1-pic"
                className="mt-[8px] shadow-md"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/Airbnb/air-clonebnb-2.png"
                alt="Airbnb-2-pic"
                className="mt-[8px] shadow-md"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/Airbnb/air-clonebnb-3.png"
                alt="Airbnb-3-pic"
                className="mt-[8px] shadow-md"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="mx-[10px] md:mx-[10%] max-w-[700px] rounded-md px-[30px] my-[24px]">
        <div className="text-center text-[16px] font-bold mb-[16px] flex flex-col justify-center items-center">
          <div className="bg-[orange] text-white w-[36px] h-[36px] flex justify-center items-center rounded-[50%] shadow-sm mb-[36px]">
            3
          </div>
          Tool
          <div className="w-[30px] h-[3px] md:h-[5px] md:w-[40px] md:mt-[20px] lg:h-[7px] lg:w-[50px] bg-[#7843e9] rounded-md mt-[10px]"></div>
        </div>
        <div className="w-full overflow-hidden mt-[24px] flex flex-row gap-2 pb-[24px]">
          <div className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] font-bold p-2 rounded-2xl shadow-md hover:shadow-lg border-2">
            <img
              className=" object-contain"
              src="./image/skill_logo/html.png"
              alt=""
            />
          </div>

          <div className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] font-bold p-2 rounded-2xl shadow-md hover:shadow-lg border-2">
            <img
              className=" object-contain"
              src="./image/skill_logo/css.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center mx-[10px] md:mx-[10%] w-full rounded-md mt-[24px] bg-[url('/image/bg-contact.jpg')] bg-cover bg-center ">
        <div className="w-full h-full backdrop-blur-sm p-[60px] flex flex-col justify-center items-center">
          <div className="text-center text-[16px] font-bold mb-[16px] flex flex-col justify-center items-center ">
            <div className="bg-[orange] text-white w-[36px] h-[36px] flex justify-center items-center rounded-[50%] shadow-xl mb-[36px]">
              4
            </div>
            Host
            <div className="w-[30px] h-[3px] md:h-[5px] md:w-[40px] md:mt-[20px] lg:h-[7px] lg:w-[50px] bg-[#7843e9] rounded-md mt-[10px]"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="w-[220px] h-[250px] flex flex-col items-center justify-between py-[20px] backdrop-blur-2xl bg-[white]/70 rounded-xl shadow-md hover:shadow-xl">
              <div className="flex flex-col justify-center items-center font-bold mb-[24px]">
                <img
                  src="../public/image/logo-social/Frontend.png"
                  className="w-[50px] h-[50px] object-contain"
                  alt=""
                />
                <span>Front-end Hosting</span>
              </div>
              <img
                src="../public/image/logo-social/Netlify_logo.png"
                className="bg-white p-[12px] w-[200px] h-[90px] object-contain rounded-lg shadow-md"
                alt=""
              />
            </div>
          </div>
          <button className="min-w-[140px] my-[52px] xl:px-[30px] xl:py-[10px] xl:text-[18px] shadow-xl bg-[#7843E9] hover:bg-[#704bbe] text-white font-bold py-2 px-4 border-b-4 border-[#5b3aa3] hover:border-[#543a8d] rounded-lg">
            <Link to={"/"}>Back to Home</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default GrobFoodPage;
