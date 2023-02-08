import React from "react";
import person_svg from "../../../assets1/assets/svg/person.svg";

const ActivityTable = () => {
  const Activity = [
    {
      id: 1,
      name: "aus9",
      version: "V50",
    },
    {
      id: 2,
      name: "hhhq001",
      version: "V5000",
    },
    {
      id: 3,
      name: "aus9",
      version: "V10000",
    },
    {
      id: 4,
      name: "aus9",
      version: "V50",
    },
    {
      id: 5,
      name: "hhhq001",
      version: "V100",
    },
    {
      id: 6,
      name: "aus9",
      version: "V5000",
    },
    {
      id: 7,
      name: "aus9",
      version: "V50",
    },
    {
      id: 8,
      name: "hhhq001",
      version: "V5000",
    },
  ];
  return (
    <div className="card_new">
      <div className="flex items-center justify-between md:px-8 px-5 pt-5 mb-5">
        <h2 className=" text-black uppercase font-bold text-[14px]">
          LATEST ACTIVITY
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="22"
          fill="#6e6e6e"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <polyline
            points="48 160 128 80 208 160"
            fill="none"
            stroke="#6e6e6e"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></polyline>
        </svg>
      </div>
      <div className="bg-menu_bor h-[1px] max-w-sm"></div>
      <div>
        <ul className="mx-5 pb-1">
          {Activity.map((items) => {
            return (
              <li
                id={items.id}
                className="flex justify-between border-dotted py-2 pb-3 border-b-2 border-[#808080] border-opacity-50 last_border"
              >
                
                <div className="flex items-center ">
                  <img src={person_svg} className="h-7"></img>
                  <h2 className="font_f font-bold text-black text-xs mx-2">
                    {items.name}
                  </h2>
                </div>

                <h2 className="font_f font-bold text-black text-xs">
                  {items.version}
                </h2>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ActivityTable;
