import React from "react";
import "../Dashboard.css";
const LineCharts = () => {
  const ranks = [
    {
      id: 0,
      bignu: "4900",
      text: "RANK VOLUME",
      smnum: "54,050",
    },
    {
      id: 1,
      bignu: "49050",
      text: "TOTAL BUSINESS VOLUME",
      smnum: "54,050",
    },
    {
      id: 2,
      bignu: "4950",
      text: "TOTAL DOWNLINE",
      smnum: "54,050",
    },
  ];
  const members = [
    {
      id: 0,
      members: "7 Members",
      surname: "JADE",
      Category: "7 Members",
    },
    {
      id: 1,
      members: "6 Members",
      surname: "SAPPHIRE",
      Category: "6 Members",
    },
    {
      id: 2,
      members: "5 Members",
      surname: "RUBY",
      Category: "5 Members",
    },
    {
      id: 3,
      members: "3 Members",
      surname: "DIAMOND",
      Category: "7 Members",
    },
    {
      id: 4,
      members: "7 Members",
      surname: "JADE",
      Category: "7 Members",
    },

    {
      id: 5,
      members: "2 Members",
      surname: "BLUE DIAMOND",
      Category: "2 Members",
    },
    {
      id: 6,
      members: "1 Member ",
      surname: "JADE",
      Category: "1 Members",
    },
    {
      id: 7,
      members: "1 Members",
      surname: "CROWN DIAMOND",
      Category: "1 Members",
    },
  ];
  return (
    <div>
      <div className="card ">
        <div className="border-b py-4 px-6 flex items-center"></div>

        <div className="pt-3 pb-1 pr-6"></div>
      </div>

      <div className="mt-1 flex flex-col md:flex-row md:items-start ">
        <div className="flex-auto">
          <div className="card">
            <div className="bg-[#272d3b08]">
              <div className=" px-gutter   grid grid-cols-2 sm:grid-cols-2 gap-4 ">
                <div className="py-3 sm:ml-8 ml-5 flex ">
                  <h2
                    className="font-size-16 
           font-color   font-f-bold font-semibold text-left font_f text-base"
                  >
                    LEFT
                  </h2>
                </div>
                <div className=" ml-4  py-3 flex items-center  justify-center">
                  <h2
                    className="font-size-16 
           font-color   font-f-bold font-semibold text-left font_f text-base"
                  >
                    RIGHT
                  </h2>
                </div>
              </div>
              <div className="border-leniorgradient"> </div>
              {ranks.map((items) => {
                return (
                  <div
                    id={items.id}
                    className="px-gutter my-2 grid grid-cols-3 sm:grid-cols-3 sm:gap-4 gap-2 px-5 myhoverdot"
                  >
                    <div className="py-3 flex items-center">
                      <div>
                        <p className="font_f header_size-28 m-0 body-1 font-bold display-1 font-color font-f font-weight-600 ">
                          {items.bignu}
                        </p>
                      </div>
                    </div>

                    <div className=" flex items-center">
                      <div>
                        <p className=" header_size-16 m-0 body-1 text-xl display-1 font-f-bold font-bold font-color">
                          {items.text}
                        </p>
                      </div>
                    </div>

                    <div className="py-3 flex items-center">
                      <div>
                        <p className=" header_size-28  m-0 body-1  display-1 font-semibold font-color font-f font-weight-600 ">
                          {items.smnum}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className=" py-7 px-6 bg-[#272d3b12] items-center justify-center">
              <h2 className="header_size-16 text-center m-0 font_f font-semibold flex-auto font-f-bold font-color">
                Downline Rank Details
              </h2>
            </div>

            <div className="pb-0">
              {members.map((items) => {
                return (
                  <div
                    key={items.id}
                    className="border-dotted  border-b-2 border-[#00000033] last_border"
                  >
                    <div className=" bordered   px-gutter py-3 grid grid-cols-3 sm:grid-cols-3 sm:ml-6 ml-5 gap-4 border-dashed  pb-3 ">
                      <div className="py-3 flex items-center">
                        <div>
                          <p className="font-size-18 m-0  flex-auto font_f font-semibold text-[18px] font-weight-600 font-color">
                            {items.members}
                          </p>
                        </div>
                      </div>

                      <div className="py-3 flex items-center">
                        <div>
                          <p className=" font-size-18 m-0 font_f text-[20px] font-f-bold font-semibold font-color uppercase">
                            {items.surname}
                          </p>
                        </div>
                      </div>

                      <div className="py-3 flex items-center">
                        <div>
                          <p className="font-size-18 m-0 font_f text-[18px] font-f-bold font-semibold font-color ">
                            {items.Category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineCharts;
