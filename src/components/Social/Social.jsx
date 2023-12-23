import React, { useState } from "react";

const Social = () => {
  const [socailState, setSocialState] = useState(false);
  const handleClick = () => setSocialState(!socailState);
  return (
    <div>
      {/* BIG SCREEN */}
      <div className="sm:fixed sm:right-4 sm:top-[50%] sm:translate-y-[-50%] sm:flex sm:flex-col hidden">
        <span className="mb-[8px]">
          <img
            src="../public/image/logo-social/facebook.png"
            className="w-[40px] h-[40px] cursor-pointer"
            alt=""
            onClick={() =>
              window.open(
                "https://www.facebook.com/patmpong.kongwanpanit/",
                "_blank"
              )
            }
          />
        </span>
        <span className="mb-[8px]">
          <img
            src="../public/image/logo-social/github.png"
            className="w-[40px] h-[40px] cursor-pointer"
            alt=""
            onClick={() =>
              window.open("https://github.com/PathomKwpn", "_black")
            }
          />
        </span>
        <span className="mb-[8px]">
          <img
            src="../public/image/logo-social/linkin.png"
            className="w-[40px] h-[40px] cursor-pointer"
            alt=""
            onClick={() =>
              window.open("https://www.linkedin.com/in/pathomkwpn/", "_blank")
            }
          />
        </span>
      </div>
      <div className="sm:hidden fixed right-4 top-[25%] translate-y-[-50%] flex flex-col">
        <div className="flex text-[40px] sm:hidden" onClick={handleClick}>
          <span className="mb-[8px] w-[45px] h-[45px] flex justify-center items-center bg-white rounded-[50%]  shadow-lg shadow-[#8f8f8f]">
            <img
              src="../public/image/logo-social/Social.png"
              className="w-[30px] h-[30px]"
              alt=""
            />
          </span>
        </div>
        <div className={socailState ? "flex flex-col" : "hidden"}>
          <span className="mb-[8px]">
            <img
              src="../public/image/logo-social/facebook.png"
              className="w-[40px] h-[40px]"
              alt=""
            />
          </span>
          <span className="mb-[8px]">
            <img
              src="../public/image/logo-social/github.png"
              className="w-[40px] h-[40px]"
              alt=""
            />
          </span>
          <span className="mb-[8px]">
            <img
              src="../public/image/logo-social/linkin.png"
              className="w-[40px] h-[40px]"
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Social;
