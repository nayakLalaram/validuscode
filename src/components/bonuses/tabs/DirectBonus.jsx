import React from "react";
import profile_svg from "../../../assets1/assets/img/profile.svg";
import DirectTable from "./tables/DirectTable";
const DirectBonus = () => {
  const directbonus = [
    {
      id: 0,
      text: "Direct Referrals",
      value: "1",
    },
    {
      id: 1,
      text: "Direct Referrals Membership",
      value: "0",
    },
    {
      id: 2,
      text: "Membership (points)",
      value: "500",
    },
  ];
 
  return (
    <div>
      <div className="py-6 bg-white drop-shadow-md rounded-lg">
        <div className="  px-2 flex items-center justify-center">
          <img src={profile_svg} alt="mtimg"/>
        </div>
        <h2 className="font-size-16 text-sm font-f font-color text-center font-weight-600  m-0 ">
          AU8
        </h2>
        <div className="mx-5">
          <div className="w-full justify-center   overflow-auto flex flex-col md:flex-row sm:mr-6 ">
            <div className="justify-start mr-1">
              {" "}
              <h2 className="font-size-19 text-[17px] font-f font_f font-color text-center mr-4  m-0 ">
                LEFT
              </h2>
            </div>

            <div className="border-r w-full mt-4 ">
              <div className="px-gutter border-t py-2 ">
                {directbonus.map((item) => {
                  return (
                    <div
                      id={item.id}
                      className="last_border   flex items-center justify-between py-[18px] border-b-[1px] border-[#e5e7eb]  px-5"
                    >
                      <p className="m-0 body-1 text-sm font-size-16 font-f font-color text-center font-weight-600">
                        {item.text}
                      </p>
                      <p className="m-0 font-size-16 text-sm font-f font-color text-right font-bold font-weight-800 ">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full mt-4">
              <div className="px-gutter border-t py-2 ">
                {directbonus.map((item) => {
                  return (
                    <div className="flex last_border   items-center justify-between py-[18px] px-5 border-b-[1px] border-[#e5e7eb]">
                      <p className="m-0 body-1 text-sm font-size-16 font-f font-color text-center font-weight-600">
                        {item.value}
                      </p>
                      <p className="m-0 font-size-16 text-sm font-f font-color text-center font-weight-600">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <h2 className="ml-4 font-size-19 font_f text-[17px]  font-color text-center  ">
              RIGHT
            </h2>
          </div>
        </div>
      </div>
      <DirectTable />
    </div>
  );
};

export default DirectBonus;
