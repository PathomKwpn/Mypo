import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const ref = useRef();
  const [sendSucces, setSendSuccess] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_p887dx9",
        "template_eisaid8",
        ref.current,
        "f2NPRhaNrOivNRH8c"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSendSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSendSuccess(false);
        }
      );
  };
  return (
    <div className="sm:min-h-[100vh] bg-[url('/image/bg-contact.jpg')] flex flex-col items-center py-[70px] px-[15px] bg-cover">
      <div
        className="flex flex-col items-center justify-center mb-[30px] pb-2 font-bold text-[24px]  sm:text-3xl md:text-5xl lg:text-6xl  lg:mb-[60px] tracking-widest"
        id="contact"
      >
        Contact Me
        <div className="w-[30px] h-[3px] md:h-[5px] md:w-[40px] md:mt-[20px] lg:h-[7px] lg:w-[50px] bg-[#7843e9] rounded-md mt-[10px]"></div>
      </div>
      <form
        ref={ref}
        className="flex flex-col justify-center w-[90%] bg-white p-[20px] shadow-lg lg:max-w-[50%]"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-[12px] pb-[10px] font-semibold text-[#666]"
            >
              Name
            </label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Enter your name"
              className="bg-[#f0f0f0] p-[15px] mb-[15px] rounded-lg focus:outline-0"
            />
          </div>
          <div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-[12px] pb-[10px] font-semibold text-[#666]"
              >
                Email
              </label>
              <input
                name="email"
                id="email"
                type="text"
                placeholder="Enter your email"
                className="bg-[#f0f0f0] p-[15px] mb-[15px] rounded-lg focus:outline-0"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col mb-[30px]">
              <label
                htmlFor="message"
                className="text-[12px] pb-[10px] font-semibold text-[#666]"
              >
                Message
              </label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                id="message"
                type="text"
                placeholder="Enter your message"
                className="bg-[#f0f0f0] p-[15px] mb-[15px] rounded-lg focus:outline-0"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className=" bg-[#7843e9] text-white w-full p-[15px] font-bold rounded-lg md:max-w-[30%]">
              SEND
            </button>
          </div>
          <div className=" text-lime-500 font-bold flex justify-center my-[15px]">
            {sendSucces && `" Send email succesful "`}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
