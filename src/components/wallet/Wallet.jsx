import React, { useState } from "react";
import Header from "../common/Headers";
import Navigation from "../common/Navigation";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../wallet/Wallet.css";
import Pagination from "react-custom-pagination";
import ActiveWallet from "./ActiveWallet";
import PassiveWallet from "./PassiveWallet";
import RewardWallet from "./RewardWallet";
import CashWallet from "./CashWallet";
const Wallet = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const onSearch = () => {
    console.log("search", value);
  };
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
      date: "19/08/2022",
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
      date: "21/08/2022",
      Wallet: "21.00",
      passive: "	9.00",
      Total: "	30.00",
      bonus: "	Network Bonus",
    },
    {
      id: 4,
      date: "18/08/2022",
      Wallet: "20.00",
      passive: "	9.00",
      Total: "	30.00",
      bonus: "	Network Bonus",
    },
    {
      id: 5,
      date: "18/08/2022",
      Wallet: "19.00",
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

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = table.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };
  return (
    <div>
      <Header />
      <Navigation />
      <div className="py-6 lg:ml-[280px] mt-[70px] sm:pr-5 sm:pl-6 pr-2 pl-2">
        <Tabs>
          <TabList className="walletParent">
            {blocks.map((title) => {
              return (
                <Tab id={title.id} onClick={() => setShow(!show)}>
                  <div className="">
                    <div className=" pt-3 group  bottom-2  hover:border-[#8633DA] border-[1px] pl-4 pb-2 h-[200px] rounded-lg  relative hover:shadow-lg  flex flex-col items-left ">
                      <div className="  mb-2">
                        <h2 className="font_f text-sm font-semibold text-black">
                          {title.header}
                        </h2>
                        <div className="flex pt-6">
                          <h2 className=" font-weight-600  font-size-32 font-color text-black font-extrabold text-[30px] ">
                            {title.coins}
                          </h2>
                          <div className=" font-weight-600 text-black -mt-2 font_f  font-semibold font-size-14 text-sm  font-color">
                            {title.points}
                          </div>
                        </div>
                      </div>
                      <h3 className=" font-normal font_f font-color text-[12px] m-0 ">
                        {title.cash}
                      </h3>
                      <div className="flex">
                        <button
                          className="absolute bottom-3 right-3 h-[40px] w-[40px] group-hover:bg-[#950dd0] rounded-full flex justify-center items-center  shadow-xl btn_color"
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
                </Tab>
              );
            })}
          </TabList>

          <TabPanel>
            {show && (
              <ActiveWallet/>
            )}
          </TabPanel>
          <TabPanel>
          <PassiveWallet/>
          </TabPanel>
          <TabPanel>
           <RewardWallet/>
          </TabPanel>
          <TabPanel>
          <CashWallet/>
          </TabPanel>
        </Tabs>
        <div className="mr-top-5">
          <div
            className="card overflow-hidden pb-16 pt-8"
            style={{
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              boxShadow: "0px 3px 6px #272D3B12",
              border: "none",
              borderRadius: "9px",
              opacity: 1,
            }}
          >
            <div className="px-6 h-16  sticky left-0 flex items-center">
              <h2 className="title my-0 ltr:pr-4 rtl:pl-4 ltr:mr-4 rtl:ml-4 ltr:border-r rtl:border-l hidden sm:block flex-none">
                <span className=" font-size-22 text-[22px] font_f font-f-bold font-semibold text-black font-color">
                  ACTIVE & PASSIVE WALLET HISTORY
                </span>
              </h2>
              <div className="bg-foreground rounded-full  px-4 lg:max-w-[300px] flex-auto flex items-center border border-gray-300 lg:mx-12 mx-4">
                <input
                  className="px-4  lg:py-[6px] py-1 border-0 outline-none w-full bg-transparent placeholder:text-xs placeholder:px-3"
                  placeholder="Search..."
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onClick={onSearch}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="#727272"
                  viewBox="0 0 256 256"
                  className="relative lg:right-[250px]"
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
            <div className="overflow-x-auto">
              <table className="w-full ">
                <thead className="border-[#00000033]  border-y-[1px] justify-between h-[52px] ">
                  <tr className="px-4">
                    <th className="text-start font_f font-bold text-sm lg:px-6 px-3">
                      Date
                    </th>
                    <th className="text-start font_f font-bold text-sm">
                      Active Wallet
                    </th>
                    <th className="text-start font_f font-bold text-sm">
                      Passive Wallet
                    </th>
                    <th className="text-start font_f font-bold text-sm">
                      Total
                    </th>
                    <th className="text-start font_f font-bold text-sm">
                      Description
                    </th>
                  </tr>
                </thead>
                {currentPosts
                  .filter((tables) =>
                    tables.Wallet.toLowerCase().includes(value)
                  )
                  .map((tables) => {
                    return (
                      <tbody id={tables.id}>
                        <tr
                          className="border-[#00000033
]   border-y-[1px] justify-between h-[52px] hover:bg-[#0000000a]"
                        >
                          <td className="text-start font_f font-normal text-sm lg:px-6 px-3">
                            {tables.date}
                          </td>
                          <td className="font_f font-normal text-sm">
                            {tables.Wallet}
                          </td>
                          <td className="font_f font-normal text-sm">
                            {tables.passive}
                          </td>
                          <td className="font_f font-normal text-sm">
                            {tables.Total}
                          </td>
                          <td className="font_f font-normal text-sm">
                            {tables.bonus}
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
            <div className="mr-3 text-[15px] ">
              <Pagination
                totalPosts={table.length}
                postsPerPage={postsPerPage}
                paginate={paginate}
                showIndex={true}
                view={1}
                showLast={false}
                showFirst={false}
                bgColor="white"
                color="black"
                indexbgColor="white"
                selectColor="white"
                justify="end"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
