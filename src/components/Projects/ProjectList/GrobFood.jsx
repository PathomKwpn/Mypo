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
          Grob-Food Project
        </header>
        <header className="text-center text-[16px] font-bold mb-[16px] flex flex-col justify-center items-center">
          <div className="bg-[orange] text-white w-[36px] h-[36px] flex justify-center items-center rounded-[50%] shadow-sm mb-[36px]">
            1
          </div>
          Description
          <div className="w-[30px] h-[3px] md:h-[5px] md:w-[40px] md:mt-[20px] lg:h-[7px] lg:w-[50px] bg-[#7843e9] rounded-md mt-[10px]"></div>
        </header>
        <p className="text-center w-[95%] md:w-[45%] mt-[10px] ">
          GrobFood is a website with functions and formats that are based on the
          GrabFood website. It is an{" "}
          <span className="font-bold">E-commerce website</span> with both
          front-end and back-end development. A database has also been created
          to store various information.
        </p>
        <button className="min-w-[140px] mt-[52px] xl:px-[30px] xl:py-[10px] xl:text-[18px] shadow-xl bg-[#7843E9] hover:bg-[#704bbe] text-white font-bold py-2 px-4 border-b-4 border-[#5b3aa3] hover:border-[#543a8d] rounded">
          <Link to={"https://grob-food-project.pages.dev/"} target="_blank">
            Project Demo
          </Link>
        </button>
        <span className="font-bold text-[12px] text-[#797979] my-[12px] text-center">
          * For the first time using this site, please kindly wait a moment for
          the data to be generated.
        </span>
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
          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/GrobFood/Driver_Home.png"
                alt="GrobFood-Home-pic"
                className="mt-[8px] shadow-md"
              />
              <span className="font-bold my-[8px]">Driver_Home</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/GrobFood/Driver_History.png"
                alt="GrobFood-Home-pic"
                className="mt-[8px] shadow-md"
              />
              <span className="font-bold my-[8px]">Driver_History</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/GrobFood/Driver_OrderDetail.png"
                alt="GrobFood-Home-pic"
                className="mt-[8px] shadow-md"
              />
              <span className="font-bold my-[8px]">Driver_OrderDetail</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/GrobFood/AdminLogin.png"
                alt="GrobFood-Home-pic"
                className="mt-[8px] shadow-md"
              />
              <span className="font-bold my-[8px]">AdminLogin</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/GrobFood/AdminHome.png"
                alt="GrobFood-Home-pic"
                className="mt-[8px] shadow-md"
              />
              <span className="font-bold my-[8px]">AdminHome</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mb-[24px] flex flex-col items-center justify-center">
              <img
                src="../public/image/projects-img/GrobFood/AdminAddcoupon.png"
                alt="GrobFood-Home-pic"
                className="mt-[8px] shadow-md"
              />
              <span className="font-bold my-[8px]">Admin-Addcoupon</span>
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
        <div className="w-full overflow-hidden mt-[24px]">
          <Swiper
            className="w-[300px] md:w-full"
            breakpoints={{
              300: {
                slidesPerView: 4.2,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            slidesPerView={4}
            spaceBetween={5}
          >
            <SwiperSlide className="mb-[10px]">
              <div className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] font-bold p-2 rounded-2xl shadow-md border-2">
                <img
                  className=" object-contain"
                  src="./image/skill_logo/react.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-[10px]">
              <div className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] font-bold p-2 rounded-2xl shadow-md border-2">
                <img
                  className=" object-contain"
                  src="./image/skill_logo/typescript.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-[10px]">
              <div className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] font-bold p-2 rounded-2xl shadow-md border-2">
                <img
                  className=" object-contain"
                  src="./image/skill_logo/nodejs.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-[10px]">
              <div className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] font-bold p-2 rounded-2xl shadow-md border-2">
                <img
                  className=" object-contain"
                  src="./image/skill_logo/Expressjs.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-[10px]">
              <div className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] font-bold p-2 rounded-2xl shadow-md border-2">
                <img
                  className=" object-contain"
                  src="./image/skill_logo/mui.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-[10px]">
              <div className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] font-bold p-2 rounded-2xl shadow-md border-2">
                <img
                  className=" object-contain"
                  src="./image/skill_logo/Axios.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-[10px]">
              <div className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] font-bold p-2 rounded-2xl shadow-md border-2">
                <img
                  className=" object-contain"
                  src="./image/skill_logo/Docker.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-[10px]">
              <div className="flex bg-white justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] font-bold p-2 rounded-2xl shadow-md border-2">
                <img
                  className=" object-contain"
                  src="./image/skill_logo/postman.svg"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
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
            <div className="w-[220px] h-[250px] flex flex-col items-center justify-between py-[20px] backdrop-blur-2xl bg-[white]/70 rounded-xl shadow-md">
              <div className="flex flex-col justify-center items-center font-bold mb-[24px]">
                <img
                  src="../public/image/logo-social/Frontend.png"
                  className="w-[50px] h-[50px] object-contain"
                  alt=""
                />
                <span>Front-end Hosting</span>
              </div>
              <img
                src="../public/image/logo-social/cloudflare.png"
                className="bg-white p-[12px] w-[200px] h-[90px] object-contain rounded-lg shadow-md"
                alt=""
              />
            </div>
            <div className="w-[220px] h-[250px] flex flex-col items-center justify-between py-[20px] backdrop-blur-2xl bg-[white]/70 rounded-xl shadow-md">
              <div className="flex flex-col justify-center items-center font-bold mb-[24px]">
                <img
                  src="../public/image/logo-social/Backend.png"
                  className="w-[50px] h-[50px] object-contain"
                  alt=""
                />
                <span>Back-end Hosting</span>
              </div>
              <img
                src="../public/image/logo-social/railway.png"
                className="bg-white p-[12px] w-[200px] h-[90px] object-contain rounded-lg shadow-md"
                alt=""
              />
            </div>
            <div className="w-[220px] h-[250px] flex flex-col items-center justify-between py-[20px] backdrop-blur-2xl bg-[white]/70 rounded-xl shadow-md">
              <div className="flex flex-col justify-center items-center font-bold mb-[24px] ">
                <img
                  src="../public/image/logo-social/Database.png"
                  className="w-[50px] h-[50px] object-contain"
                  alt=""
                />
                <span>Database Hosting</span>
              </div>
              <img
                src="../public/image/logo-social/render.png"
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
