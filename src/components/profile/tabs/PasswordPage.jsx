import React from "react";
import "../Profile.css";
import authecated_svg from "../../../assets1/assets/svg/authentication.svg";

const PasswordPage = () => {
  return (
    <div className="sm:mx-10">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 shadow-md py-8 my-8 px-6 ">
        <div className="sm:col-span-1 border-r  justify-center">
          <div className="  mat-label w-full font-weight-600 font-f font-color ">
            Two Factor Authentification
          </div>
          <div className="   px-8  ">
            <img className="pt-8" src={authecated_svg} />
          </div>
        </div>

        <div className="sm:col-span-3 ">
          <div className="text-center my-2 font_f  w-full font-weight-600 font-bold  font-f-bold font-size-16 font-color ">
            Deactivate Two Factor Authentication
          </div>

          <div className=" flex justify-center items-center">
            <div className="       flex flex-col sm:flex-row sm:gap-4 mt-4  px-6">
              <div className="w-full">
                <h2 className="text-start  ml-3 font_f text-[10px] font-normal">
                  TWO FACTOR CODE
                </h2>
                <div className="mt-2 bg-foreground rounded-full  px-4  flex-auto flex items-center border border-gray-300">
                  <input
                    className="textbox  placeholder:text-[13px] placeholder:font-medium placeholder_font  pl-4 py-[6px] border-0 outline-none w-full bg-transparent "
                    value=""
                    placeholder="2FA CODE"
                    type="text"
                  />
                </div>
              </div>
              <button
                mat-raised-button
                className=" w-full mt-6 bg-lenier-gradient text-white font_f text-[10px] font-normal rounded-full flex items-center justify-center"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-2"
                  width="12"
                  height="12"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <polyline
                    points="144 56 216 128 144 200"
                    fill="none"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></polyline>
                </svg>
                DEAACTIVE 2FA
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 flex flex-col shadow-md">
        <div className="text-left my-2 mat-label w-full font-bold ">
          Two Factor Authentification
        </div>
        <div className="grid mx-6 py-6">
          <div className="flex flex-col sm:flex-row ">
            <div className="flex-auto">
              <div className="text-start  ml-3 font_f text-[10px] font-normal">
                CURRENT PASSWORD
              </div>
              <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[260px] flex-auto flex items-center border border-gray-300">
                <input
                  className="textbox font-f font-size-14 px-4 py-[7px] border-0 outline-none w-full bg-transparent "
                  value="0gfgfgf"
                  placeholder="New Password"
                  type="password"
                />
              </div>
            </div>
            <div className="flex-auto mx-4">
              <div className="text-start  ml-3 font_f text-[10px] font-normal">
                NEW PASSWORD
              </div>
              <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[260px] flex-auto flex items-center border border-gray-300">
                <input
                  className="textbox font-f font-size-14 px-4 py-[7px] border-0 outline-none w-full bg-transparent "
                  value="0gfgfgf"
                  placeholder="New Password"
                  type="password"
                />
              </div>
            </div>
            <div className="flex-auto">
              <div className="text-start  ml-3 font_f text-[10px] font-normal">
                2FA
              </div>
              <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[260px] flex-auto flex items-center border border-gray-300">
                <input
                  className="textbox  placeholder:text-[13px] placeholder:font-medium placeholder_font  pl-4 py-[6px] border-0 outline-none w-full bg-transparent "
                  value=""
                  placeholder="2FA"
                  type="text"
                />
              </div>
            </div>
            <button
              mat-raised-button
              className=" w-28 ml-4 mt-5 bg-lenier-gradient text-white px-6 font_f text-[10px] font-normal rounded-full flex items-center justify-center"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-2"
                width="12"
                height="12"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></line>
                <polyline
                  points="144 56 216 128 144 200"
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                ></polyline>
              </svg>
              UPDATE
            </button>
          </div>

          <div className="flex-auto sm:ml-[250px] py-2">
            <div className="text-start  ml-3 font_f text-[10px] font-normal">
              CONFIRM NEW PASSWORD
            </div>
            <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[260px] flex-auto flex items-center border border-gray-300">
              <input
                className="textbox  placeholder:text-[13px] placeholder:font-medium placeholder_font  pl-4 py-[6px] border-0 outline-none w-full bg-transparent "
                value=""
                placeholder="CONFIRM NEW PASSWORD"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordPage;
