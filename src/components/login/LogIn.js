import React from "react";
import "../login/LogIn.css";
import icon from "../../assets1/assets/svg/app_icon_white.svg";
const LogIn = () => {
  return (
    <div classNameName="">
      <div className="w-full h-full  screen-zoom">
        <div className="bg-image">
          <div className="mb-3 flex flex-col items-center justify-center px-2">
            <img className="appicon  mt-8 mb-5 pt-1" src={icon} />
            <div className="py-6 login-card  card overflow-hidden w-full max-w-[470px] box-shadow bg-white ">
              <div className="text-center mt-6">
                <h2 className=" text-header  font-weight-600 m-0 pt-0 font-f-bold">
                  LOGIN
                </h2>
              </div>

              <div className="  flex flex-col gap-4  mt-4">
                <div className="flex flex-col  ">
                  <div className="flex-auto  justify-center item-center w-full px-4">
                    {" "}
                    <div className="mt-2 text-center text-[12px] font-bold">
                      USERNAME
                    </div>
                    <div className="mt-1 bg-foreground rounded-full w-[394px] h-10 mx-auto px-6   flex items-center border border-gray-300">
                      <input
                        className="textbox  px-4 py-2 border-0 placeholder:text-[14px] outline-none w-full bg-transparent text-center font-size-14"
                        placeholder="Enter Username"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="flex-auto justify-center item-center w-full px-6 mt-4">
                    <div className="mt-2 text-center text-[12px] font-bold  ">
                      PASSWORD
                    </div>
                    <div className="mt-1 bg-foreground rounded-full w-[394px] h-10 mx-auto px-6   flex items-center border border-gray-300">
                      <input
                        className="textbox  placeholder:text-[14px] px-4 py-2 border-0 outline-none w-full bg-transparent text-center font-size-14"
                        placeholder="Enter password"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="">
                    <div className=" bg-[#cf9a6a] h-[75px] w-[320px] mt-8 mx-auto  justify-center flex items-center border border-gray-300">
                      <h2 className="text-3xl CaptchBox">1gh0i2o</h2>
                    </div>
                  </div>

                  <div className="mt-2 bg-foreground rounded-full w-[394px] h-10 mx-auto px-6   flex items-center border border-gray-300">
                    <input
                      className="textbox placeholder:text-[14px]  px-4 py-2 border-0 outline-none w-full bg-transparent text-center font-size-14"
                      placeholder="Enter the Captcha"
                      type="text"
                    />
                  </div>
                  <div className="mt-2 text-center text-[12px] font-bold underline">
                    Refresh the captcha
                  </div>

                  <div className="mt-4  flex-auto flex items-center justify-center ">
                    <div className=" text-center flex items-center justify-center text-sm text-white btn_sign_in font-f h-10 w-32 font-size-10 ">
                      <span className=" text-white  text-xs flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-1"
                          width="10"
                          height="10"
                          fill="#ffffff"
                          viewBox="0 0 256 256"
                        >
                          <rect width="256" height="256" fill="none"></rect>
                          <line
                            x1="40"
                            y1="128"
                            x2="216"
                            y2="128"
                            fill="none"
                            stroke="#ffffff"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                            stroke-width="24"
                          ></line>
                          <polyline
                            points="144 56 216 128 144 200"
                            fill="none"
                            stroke="#ffffff"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                            stroke-width="24"
                          ></polyline>
                        </svg>
                        LOGIN
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
