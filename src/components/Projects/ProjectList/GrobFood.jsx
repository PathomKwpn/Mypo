import React from "react";
import Navbar from "../../Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const GrobFoodPage = () => {
  return (
    <div className=" bg-slate-100 min-h-[100vh] flex flex-col justify-start items-center">
      <Navbar />
      <header className="w-full flex justify-center text-[24px] font-bold my-[24px] lg:my-[36px] lg:text-[36px]">
        Grob-Food Project
      </header>
      <section className="mx-[10px] md:mx-[10%] max-w-[700px] rounded-md px-[30px] my-[24px]">
        <header className="text-center text-[16px] font-bold mb-[16px] flex flex-col justify-center items-center">
          <div className="bg-[orange] text-white w-[36px] h-[36px] flex justify-center items-center rounded-[50%] shadow-sm mb-[12px]">
            1
          </div>
          Description
          <div className="w-[30px] h-[3px] md:h-[5px] md:w-[40px] md:mt-[20px] lg:h-[7px] lg:w-[50px] bg-[#7843e9] rounded-md mt-[10px]"></div>
        </header>
        <p className="text-center">
          GrobFood is a website with functions and formats that are based on the
          GrabFood website. It is an E-commerce website with both front-end and
          back-end development. A database has also been created to store
          various information.
        </p>
      </section>
      <section className="mx-[10px] md:mx-[10%] max-w-[700px] rounded-md px-[30px] my-[24px]">
        <header className="text-center text-[16px] font-bold mb-[16px] flex flex-col justify-center items-center">
          <div className="bg-[orange] text-white w-[36px] h-[36px] flex justify-center items-center rounded-[50%] shadow-sm mb-[12px]">
            2
          </div>
          Web Design
          <div className="w-[30px] h-[3px] md:h-[5px] md:w-[40px] md:mt-[20px] lg:h-[7px] lg:w-[50px] bg-[#7843e9] rounded-md mt-[10px]"></div>
        </header>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/GrobFood/Home.png"
                alt="GrobFood-Home-pic"
                className="mt-[8px] shadow-md"
              />
              <span className="font-bold my-[8px]">Home-Page</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/GrobFood/Login.png"
                alt="GrobFood-Home-pic"
                className="mt-[8px] shadow-md"
              />
              <span className="font-bold my-[8px]">Login-Page</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/GrobFood/Register.png"
                alt="GrobFood-Home-pic"
                className="mt-[8px] shadow-md"
              />
              <span className="font-bold my-[8px]">Register-Page</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/GrobFood/StoreList.png"
                alt="GrobFood-Home-pic"
                className="mt-[8px] shadow-md"
              />
              <span className="font-bold my-[8px]">Store-List-Page</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/GrobFood/StoreDetail.png"
                alt="GrobFood-Home-pic"
                className="mt-[8px] shadow-md"
              />
              <span className="font-bold my-[8px]">Store-Detail-Page</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/GrobFood/Cart.png"
                alt="GrobFood-Home-pic"
                className="mt-[8px] shadow-md"
              />
              <span className="font-bold my-[8px]">Cart</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/GrobFood/Checkbill.png"
                alt="GrobFood-Home-pic"
                className="mt-[8px] shadow-md"
              />
              <span className="font-bold my-[8px]">Check-Bill</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/GrobFood/Checkbill.png"
                alt="GrobFood-Home-pic"
                className="mt-[8px] shadow-md"
              />
              <span className="font-bold my-[8px]">Partner-Home</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/GrobFood/Partner_Information.png"
                alt="GrobFood-Home-pic"
                className="mt-[8px] shadow-md"
              />
              <span className="font-bold my-[8px]">Partner-Information</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/GrobFood/Checkbill.png"
                alt="GrobFood-Home-pic"
                className="mt-[8px] shadow-md"
              />
              <span className="font-bold my-[8px]">Partner-Home</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/GrobFood/Partner_MenuList.png"
                alt="GrobFood-Home-pic"
                className="mt-[8px] shadow-md"
              />
              <span className="font-bold my-[8px]">Partner-MenuList</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/GrobFood/Partner_OrderList.png"
                alt="GrobFood-Home-pic"
                className="mt-[8px] shadow-md"
              />
              <span className="font-bold my-[8px]">Partner-OrderList</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default GrobFoodPage;
