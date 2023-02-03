import React from "react";
import "../../dashboard/Dashboard.css";
import crown from "../../../assets1/assets/img/crown-diamond.png";

const RankCards = () => {
  return (
    <div>
      <div className="card mb-2 card1 group h1-card1 mt-20">
        <div className=" flex relative">
          <div className="pt-4 pl-4 text-primary-contrast flex-auto">
            <h2 className="font-size-14 m-0 w-5 font-f font-weight-600 font_f text-white text-sm font-semibold">
              CURRENT RANK
            </h2>
          </div>

          <div className=" pr-4  flex-none self-center hidden sm:block -mt-14">
            <img src={crown} className="w-[155px] h-[175px]" />
          </div>
        </div>

        <div className="flex items-center justify-between w-full  mt-2">
          <div className=" text-left text-primary-contrast  mt-0 pl-4 pb-2  ">
            <h2 className="font-size-22  font-f font-weight-600 font_f text-white text-xl font-semibold">
              CROWN DIAMOND
            </h2>

            <h2 className=" font-size-10 hidden group-hover:block  font_f font-weight-600 font-semibold text-white text-xs">
              Sept, 22. 2022
            </h2>
          </div>
          <button
            className="mr-5 item-center justify-center"
            color="primary"
            type="button"
          >
            <button
              className=" bg-crown-diamond rounded-full  shadow-xl flex justify-center items-center"
              color="primary"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="#ffffff"
                viewBox="0 0 256 256"
                className="-rotate-45 group-hover:rotate-45"
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
              </svg>{" "}
            </button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RankCards;
