import React from "react";
import "../Profile.css";
import Profile_img from "../../../assets1/assets/img/profile_img.jpg";
import Profile_img2 from "../../../assets1/assets/img/profile-image2.svg";
const InforMation = () => {
  return (
    <div>
      <div className="p-gutter grid grid-cols-1 sm:grid-cols-2 md:grid-cols-9 gap-1 py-12 shadow-md my-4 px-12">
        <div className="sm:col-span-2">
          <div className=" my-2   w-full font-weight-600 font_f font-color text-sm font-semibold">
            User Details
          </div>
          <div className="border-r flex px-6 justify-center items-center ">
            <button
              className=" upload  text-white px-6 py-1 rounded-full "
              type="button"
            >
              upload
            </button>
            <img src={Profile_img} />
          </div>
        </div>

        <div className="sm:col-span-5 ">
          <div className="px-6 py-4 flex flex-col">
            <div className="flex flex-col sm:flex-row sm:gap-1">
              <div className="flex-auto">
                <div className="text-left mt-2  font_f text-[10px] font-normal">
                  NAME
                </div>
                <div className="mt-2 bg-foreground rounded-full px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                  <input
                    className="textbox  placeholder:text-[14px] placeholder:font-normal placeholder:font_f placeholder:text-black  px-4 py-[6px] border-0 outline-none w-full bg-transparent  "
                    placeholder="$100"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex-auto">
                <div className="text-left mt-2  font_f text-[10px] font-normal">
                  USERNAME
                </div>
                <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                  <input
                    className="textbox  placeholder:text-[14px] placeholder:font-normal placeholder_font  px-4 py-[6px] border-0 outline-none w-full bg-transparent "
                    value=""
                    placeholder="aus8"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-1 ">
              <div className="flex-auto">
                <div className="text-left mt-2  font_f text-[10px] font-normal">
                  COUNTRY
                </div>
                <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                  <input
                    className="textbox  placeholder:text-[14px] placeholder:font-normal placeholder_font  px-4 py-[6px] border-0 outline-none w-full bg-transparent  "
                    value=""
                    placeholder="Australia"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex-auto">
                <div className="text-left mt-2  font_f text-[10px] font-normal ">
                  EMAIL
                </div>
                <div className="mt-2 bg-foreground rounded-full px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                  <input
                    className="textbox  placeholder:text-[14px] placeholder:font-normal placeholder_font  px-4 py-[6px] border-0 outline-none w-full bg-transparent  "
                    value=""
                    placeholder="johndoe@gmail.com "
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:col-span-2 pt-20  ">
          <div className=" mt-8">
            <div className="flex justify-center  item-center gap-1">
              <u className="text-left mt-2  font_f text-[10px] font-normal">
                Change Email
              </u>
              <button
                mat-raised-button
                className=" w-full  bg-lenier-gradient text-white px-10 font_f text-[10px] font-normal rounded-full flex items-center justify-center"
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
          </div>
        </div>
      </div>

      <div className="p-gutter grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-1 py-10 mx-10">
        <div className="sm:col-span-4 flex">
          <div className="border-r   px-6 justify-center flex items-center ">
            <div>
              <div className="border-r flex  card-Idproof px-10 justify-center items-center  py-10 ">
                <button
                  className=" upload  text-white px-6 py-1 rounded-full"
                  type="button"
                >
                  upload
                </button>
                <img src={Profile_img2} className="h-[70px] w-auto" />
              </div>
              <div className="text-center mt-2 ml-3 mat-label  mat-label w-full  font-f font-color font-size-13 ">
                ID front Image
              </div>
            </div>
            <div>
              <div className="border-r ml-2 card-Idproof flex justify-center items-center  py-10 px-10">
                <button
                  className=" upload  text-white px-6 py-1 rounded-full "
                  type="button"
                >
                  upload
                </button>
                <img src={Profile_img2} className="h-[70px] w-auto" />
              </div>
              <div className="text-center mt-2 ml-3 font-f font-color font-size-13 ">
                ID back Image
              </div>
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <div className="flex flex-col sm:flex-row sm:gap-4 px-6  max-w-[900px] ">
            <div className="">
              <div className="text-left mt-2  font_f text-[10px] font-normal">
                NAME
              </div>
              <div className="mt-2 bg-foreground rounded-full  px-4  flex-auto flex items-center border border-gray-300">
                <input
                  className="textbox  placeholder:text-[14px] placeholder:font-normal placeholder_font  px-4 py-[6px] border-0 outline-none w-full bg-transparent "
                  value=""
                  placeholder="aus8"
                  type="text"
                />
              </div>
            </div>

            <div className="">
              <div className="text-left mt-2  font_f text-[10px] font-normal">
                MOBILE
              </div>
              <div className="mt-2 bg-foreground rounded-full  px-4  flex-auto flex items-center border border-gray-300">
                <input
                  className="textbox  placeholder:text-[14px] placeholder:font-normal placeholder_font  px-4 py-[6px] border-0 outline-none w-full bg-transparent "
                  value=""
                  placeholder="9731302421"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="     max-w-[900px]   flex flex-col sm:flex-row sm:gap-4 mt-4  px-6">
            <div className="">
              <div className="text-left mt-2  font_f text-[10px] font-normal">
                ID NUMBER
              </div>
              <div className="mt-2 bg-foreground rounded-full  px-4  flex-auto flex items-center border border-gray-300">
                <input
                  className="textbox w-56 placeholder:text-[14px] placeholder:font-normal placeholder_font  px-4 py-[6px] border-0 outline-none bg-transparent "
                  value=""
                  placeholder="Australia"
                  type="text"
                />
              </div>
            </div>
            <button
              mat-raised-button
              className=" w-36 mt-7 bg-lenier-gradient text-white px-10 font_f text-[10px] font-normal rounded-full flex items-center justify-center"
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
        </div>
      </div>
    </div>
  );
};

export default InforMation;
