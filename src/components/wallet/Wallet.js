import React from "react";
import Header from "../common/Headers";
import Navigation from "../common/Navigation";
import "../wallet/Wallet.css";
const Wallet = () => {
  const blocks = [
    {
      id: 0,
      header: "Active Wallet",
      coins: "950",
      points: "Points",
      cash: "Transfer Points To Cash Wallet",
    },
    {
      id: 1,
      header: "Passive Wallet",
      coins: "1270",
      points: "Points",
      cash: "Details",
    },
    {
      id: 2,
      header: "Reward Wallet",
      coins: "367",
      points: "Points",
      cash: "Transfer Points To Cash Wallet",
    },
    {
      id: 3,
      header: "Cash Wallet",
      coins: "2550",
      points: "Points",
      cash: "Redeem Points",
    },
  ];
  const table = [
    {
      id: 0,
      date: "18/08/2022",
      Wallet: "21.00",
      passive: "9.00",
      Total: "30.00",
      bonus: "Network Bonus",
    },
    {
      id: 1,
      date: "18/08/2022",
      Wallet: "21.00",
      passive: "	9.00",
      Total: "	30.00",
      bonus: "	Network Bonus",
    },
    {
      id: 2,
      date: "18/08/2022",
      Wallet: "21.00",
      passive: "	9.00",
      Total: "	30.00",
      bonus: "	Network Bonus",
    },
    {
      id: 3,
      date: "18/08/2022",
      Wallet: "21.00",
      passive: "	9.00",
      Total: "	30.00",
      bonus: "	Network Bonus",
    },
    {
      id: 4,
      date: "18/08/2022",
      Wallet: "21.00",
      passive: "	9.00",
      Total: "	30.00",
      bonus: "	Network Bonus",
    },
    {
      id: 5,
      date: "18/08/2022",
      Wallet: "21.00",
      passive: "	9.00",
      Total: "	30.00",
      bonus: "	Network Bonus",
    },
    {
      id: 6,
      date: "18/08/2022",
      Wallet: "21.00",
      passive: "	9.00",
      Total: "	30.00",
      bonus: "	Network Bonus",
    },
  ];
  return (
    <div>
      <Header/>
      <Navigation/>
      <div className="py-8 ml-[280px] mt-[70px]">
        <div className=" p-gutter grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mb-2 mx-2">
          {blocks.map((title) => {
            return (
              <div id={title.id} className="">
                <div className=" pt-3 group  bottom-2 border-2 hover:border-[#8633DA] pl-4 pb-2 h-[200px] rounded-lg  relative hover:shadow-lg shadow-inner trans-shadow flex flex-col items-left  my_gb">
                  <div className=" mt-4 mb-2">
                    <h2 className="font_f font-bold">{title.header}</h2>
                    <div className="flex py-6">
                      <h2 className=" font-weight-600 font_f font-size-32 font-color text-black font-extrabold text-3xl ">
                        {title.coins}
                      </h2>
                      <div className=" font-weight-600  -mt-2 font_f text-base font-semibold font-size-14  font-color">
                        {title.points}
                      </div>
                    </div>
                  </div>
                  <h3 className=" font-f-bold font-normal font_f font-color text-xs  font-size-16 m-0 ">
                    {title.cash}
                  </h3>
                  <div className="flex">
                    <button
                      className="absolute bottom-3 right-3 h-10 w-10 group-hover:bg-[#8633DA] rounded-full flex justify-center items-center  shadow-xl btn_color"
                      color="primary"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="rotate-0 group-hover:rotate-90"
                        width="18"
                        height="18"
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
            );
          })}
        </div>

        <div className="mr-top-5">
          <div className="card overflow-hidden pb-16 pt-8">
            <div className="px-6 h-16  sticky left-0 flex items-center">
              <h2 className="title my-0 ltr:pr-4 rtl:pl-4 ltr:mr-4 rtl:ml-4 ltr:border-r rtl:border-l hidden sm:block flex-none">
                <span className=" font-size-22 text-[22px] font_f font-f-bold font-bold font-color">
                  ACTIVE & PASSIVE WALLET HISTORY
                </span>
              </h2>
              <div className="bg-foreground rounded-full  px-4 max-w-[300px] flex-auto flex items-center border border-gray-300 mx-12">
                <input
                  className="px-4  py-[6px] border-0 outline-none w-full bg-transparent placeholder:text-sm placeholder:px-3"
                  placeholder="Search..."
                  type="search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="#727272"
                  viewBox="0 0 256 256"
                  className="relative right-[250px]"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <circle
                    cx="116"
                    cy="116"
                    r="84"
                    fill="none"
                    stroke="#727272"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></circle>
                  <line
                    x1="175.4"
                    y1="175.4"
                    x2="224"
                    y2="224"
                    fill="none"
                    stroke="#727272"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                </svg>
              </div>
              <span className="flex-1"></span>
            </div>
            <div>
              <table class="table-fixed w-full ml-5 ">
                <thead className="border-[#00000033]  border-y-[1px] justify-between h-[52px] ">
                  <tr className="px-4">
                    <th className="text-start font_f">Date</th>
                    <th className="text-start font_f">Active Wallet</th>
                    <th className="text-start font_f">Passive Wallet</th>
                    <th className="text-start font_f">Total</th>
                    <th className="text-start font_f">Description</th>
                  </tr>
                </thead>
                {table.map((tables) => {
                  return (
                    <tbody id={tables.id}>
                      <tr
                        className="border-[#00000033
]   border-y-[1px] justify-between h-[52px] hover:bg-[#0000000a]"
                      >
                        <td className="text-start font_f font-normal text-base">
                          {tables.date}
                        </td>
                        <td className="font_f font-normal text-base">
                          {tables.Wallet}
                        </td>
                        <td className="font_f font-normal text-base">
                          {tables.passive}
                        </td>
                        <td className="font_f font-normal text-base">
                          {tables.Total}
                        </td>
                        <td className="font_f font-normal text-base">
                          {tables.bonus}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
