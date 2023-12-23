import React from "react";
import Typewriter from "typewriter-effect";
const Homepage = () => {
  return (
    <div className="p-[40px] md:px-[100px] sm:min-h-[100vh] bg-[url('/image/bg-Home2.jpg')] bg-cover flex items-center">
      <div className="py-[70px] w-full">
        <div className="text-xl lg:text-5xl font-medium">Hi,my name is</div>
        <div className=" font-bold text-3xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[400px] pb-[15px]">
          Pathompong Kangwanpanitch.
        </div>
        <p className="text-2xl md:text-5xl font-semibold text-[black]">I'm a</p>
        <div className="text-[#146C94] font-bold text-3xl sm:text-5xl md:text-5xl lg:text-7xl">
          <Typewriter
            options={{
              strings: ["Junior Frontend Developer", "Fresh Graduated"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <p className="pt-[20px] sm:pt-[40px] text-sm md:text-xl md:max-w-[500px] max-w-[300px] text-center">
          I am a fresh graduate of Information Technology currently looking for
          an entry-level Front-end Developer position to learn and gain
          experience from real work and seek new challenges. In order to be
          successful in this career
        </p>
      </div>
    </div>
  );
};

export default Homepage;
