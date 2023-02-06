import React from "react";
import "../../dashboard/Dashboard.css";
import wallet_svg from "../../../assets1/assets/svg/wallet.svg";
import total_svg from "../../../assets1/assets/svg/total.svg";
import network_svg from "../../../assets1/assets/svg/network.svg";
import reward_svg from "../../../assets1/assets/svg/reward.svg";

const Blocks = () => {
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-1">
        <div className=" pt-3 group  bottom-2 border-[1px] hover:border-[#8633DA] pl-4 pb-2 h-[210px] rounded-lg  relative hover:shadow-lg shadow-inner trans-shadow flex flex-col items-left  my_gb">
          <div>
            <img className="h-[28px] w-auto" alt="block img" src={wallet_svg} />
          </div>

          <div className="flex mt-4 mb-2">
            <h2 className="font-color text-black font-bold text-3xl ">
              431
            </h2>
            <div className=" -mt-2 font_f text-[14px] font-semibold font-color">
              Points
            </div>
          </div>
          <h3 className=" font-bold   text-[16px]  m-0 w-20">
            Cash Wallet
          </h3>
          <div className="flex">
            <button
              className="absolute bottom-3 right-3 h-[38px] w-[38px] group-hover:bg-[#8633DA] rounded-full flex justify-center items-center  shadow-xl btn_color"
              color="primary"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-rotate-45 group-hover:rotate-0"
                width="14"
                height="14"
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
            </button>

            <button
              className="absolute bottom-3 right-3  shadow-xl"
              color="primary"
              type="button"
            >
              <fa-icon className="text-white"></fa-icon>
            </button>
          </div>
        </div>
        <div className=" pt-3 group  bottom-2 border-[1px] hover:border-[#8633DA] pl-4 pb-2 h-[210px] rounded-lg  relative hover:shadow-lg trans-shadow flex flex-col items-left  my_gb">
          <div>
            <img className="h-[28px] w-auto" src={total_svg} alt="block img"/>
          </div>

          <div className="flex mt-4 mb-2">
            <h2 className=" font-color text-black font-bold text-3xl ">
              2550
            </h2>
            <div className=" -mt-2 font_f text-[14px] font-semibold font-color">
              Points
            </div>
          </div>
          <h3 className=" font-bold   text-[16px]  m-0 w-20">
            Active Memberships{" "}
          </h3>
          <div className="flex">
            <button
              className="absolute bottom-3 right-3 h-[38px] w-[38px] group-hover:bg-[#8633DA] rounded-full flex justify-center items-center  shadow-xl btn_color"
              color="primary"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-rotate-45 group-hover:rotate-0"
                width="14"
                height="14"
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
            </button>

            <button
              className="absolute bottom-3 right-3  shadow-xl"
              color="primary"
              type="button"
            >
              <fa-icon className="text-white"></fa-icon>
            </button>
          </div>
        </div>
        <div className=" pt-3 group  bottom-2 border-[1px] hover:border-[#8633DA] pl-4 pb-2 h-[210px] rounded-lg  relative hover:shadow-lg trans-shadow flex flex-col items-left  my_gb">
          <div>
            <img className="h-[28px] w-auto" src={network_svg} alt="block img"/>
          </div>

          <div className="flex mt-4 mb-2">
            <h2 className=" font-color text-black font-bold text-3xl ">
              4905
            </h2>
            <div className=" -mt-2 font_f text-[14px] font-semibold font-color">
              Points
            </div>
          </div>
          <h3 className=" font-bold   text-[16px]  m-0 w-20">
            Network Bonus{" "}
          </h3>
          <div className="flex">
            <button
              className="absolute bottom-3 right-3 h-[38px] w-[38px] group-hover:bg-[#8633DA] rounded-full flex justify-center items-center  shadow-xl btn_color"
              color="primary"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-rotate-45 group-hover:rotate-0"
                width="14"
                height="14"
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
            </button>

            <button
              className="absolute bottom-3 right-3  shadow-xl"
              color="primary"
              type="button"
            >
              <fa-icon className="text-white"></fa-icon>
            </button>
          </div>
        </div>
        <div className=" pt-3 group  bottom-2 border-[1px] hover:border-[#8633DA] pl-4 pb-2 h-[210px] rounded-lg  relative hover:shadow-lg trans-shadow flex flex-col items-left  my_gb">
          <div>
            <img className="h-[28px] w-auto" src={reward_svg} alt="block img" />
          </div>

          <div className="flex mt-4 mb-2">
            <h2 className=" font-color text-black font-bold text-3xl ">
              674
            </h2>
            <div className=" -mt-2 font_f text-[14px] font-semibold font-color">
              Points
            </div>
          </div>
          <h3 className=" font-bold   text-[16px]  m-0 w-20">
            Vewards
          </h3>
          <div className="flex">
            <button
              className="absolute bottom-3 right-3 h-[38px] w-[38px] group-hover:bg-[#8633DA] rounded-full flex justify-center items-center  shadow-xl btn_color"
              color="primary"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-rotate-45 group-hover:rotate-0"
                width="14"
                height="14"
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
            </button>

            <button
              className="absolute bottom-3 right-3  shadow-xl"
              color="primary"
              type="button"
            >
              <fa-icon className="text-white"></fa-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blocks;
