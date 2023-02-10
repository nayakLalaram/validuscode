import React, { useState } from "react";
import Header from "../common/Headers";
import Navigation from "../common/Navigation";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../wallet/Wallet.css";
import Pagination from "react-custom-pagination";
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
  const passivetable = [
    {
      id: 0,
      mamberid: "18/08/2022",
      mamberdate: "21.00",
      rate: "9.00",
      date: "30.00",
      percent: "Network Bonus",
      admin: "44",
      realease: "988",
    },
    {
      id: 1,
      mamberid: "19/08/2022",
      mamberdate: "21.00",
      rate: "9.00",
      date: "30.00",
      percent: "Network Bonus",
      admin: "44",
      realease: "988",
    },
    {
      id: 2,
      mamberid: "20/08/2022",
      mamberdate: "21.00",
      rate: "9.00",
      date: "30.00",
      percent: "Network Bonus",
      admin: "44",
      realease: "988",
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
              <div className="card flex-auto pt-4">
                <div className="px-6 py-4 border-b-black border-[1px] border-opacity-10 flex items-center">
                  <h2 className=" text-sm m-0 font-f-bold font-bold">
                    Transfer Active Bonus Amount into Cash Wallet
                  </h2>
                </div>

                <div className="px-6 py-4 flex flex-col sm:flex-row sm:gap-6  pt-2 ">
                  <div className="flex flex-col sm:flex-row sm:gap-4  flex-auto">
                    <div className="flex-auto">
                      <div className="text-left mt-2 ml-3 font-weight-600 text-[10px]  font-f font-color">
                        AMOUNT
                      </div>
                      <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                        <input
                          className="textbox text-[14px] pl-4 pr-20 py-2 border-0 outline-none w-full font-f bg-transparent value:text-[4px]"
                          value="100"
                          placeholder="AMOUNT"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="flex-auto">
                      <div className="text-left mt-2 ml-3 font-weight-600 text-[10px]  font-f font-color">
                        FEE IN USD
                      </div>
                      <div className="mt-2 bg-foreground rounded-full px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                        <input
                          className="textbox text-[14px] pr-20 px-4 py-2 border-0 outline-none w-full bg-transparent  font-f"
                          value="0"
                          placeholder=" Fee In USD"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex-auto">
                      <div className="text-left mt-2 ml-3 font-weight-600 text-[10px]  font-f font-color">
                        RECEIVABLE AMOUNT
                      </div>
                      <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                        <input
                          className="textbox text-[14px] px-4 pr-20 py-2 border-0 outline-none w-full bg-transparent font-f"
                          value="receivable amount"
                          placeholder=" Receivable Amount"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex-auto">
                      <div className="text-left mt-2 ml-3 font-weight-600 text-[10px]  font-f font-color">
                        2FA
                      </div>
                      <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                        <input
                          className="textbox text-[14px] pr-12 font-f px-4 py-2 border-0 outline-none w-full bg-transparent text-secondary"
                          value="2FA"
                          placeholder=" 2FA"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="  flex items-end pt-2">
                    <button
                      mat-raised-button
                      className="bg-lenier-gradient  w-full flex items-center justify-center  rounded-full px-5 font-f text-[10px] font-weight-600"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                          stroke-width="16"
                        ></line>
                        <polyline
                          points="144 56 216 128 144 200"
                          fill="none"
                          stroke="#ffffff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="16"
                        ></polyline>
                      </svg>
                      <p className="text-white text-[10px] font-semibold">
                        TRANSFER
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </TabPanel>
          <TabPanel>
            <div>
              <div className="card overflow-auto mt-2 mb-3 bg-white ">
                <div className=" h-16  flex mt-4 items-center ml-6 justify-between ">
                  <h2 className="title my-0 ltr:pr-4 rtl:pl-4 ltr:mr-4 rtl:ml-4 ltr:border-r rtl:border-l hidden sm:block flex-none">
                    <span className="font_f text-[16px]  m-0 font-semibold">
                      Passive Amount Cycle
                    </span>
                  </h2>
                  <div className="flex mx-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-4"
                      width="20"
                      height="20"
                      fill="#757575"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <path d="M160.1,40A88.1,88.1,0,0,0,81.3,88.7h0a86.6,86.6,0,0,0-9.3,39,8.2,8.2,0,0,1-7.4,8.3,8,8,0,0,1-8.6-8,105,105,0,0,1,5.3-32.9,4,4,0,0,0-4.7-5.2A64,64,0,0,0,8,152c0,35.2,29.8,64,64.9,64H160a88,88,0,0,0,.1-176Zm31.5,123.7-33.9,34A8.5,8.5,0,0,1,152,200a8.3,8.3,0,0,1-5.7-2.3l-33.9-34a8,8,0,0,1,11.3-11.3L144,172.7V112a8,8,0,0,1,16,0v60.7l20.3-20.3a8,8,0,0,1,11.3,11.3Z"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#757575"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <path d="M156,128a28,28,0,1,1-28-28A28.1,28.1,0,0,1,156,128ZM48,100a28,28,0,1,0,28,28A28.1,28.1,0,0,0,48,100Zm160,0a28,28,0,1,0,28,28A28.1,28.1,0,0,0,208,100Z"></path>
                    </svg>
                  </div>
                </div>

                <div className="mex_w">
                  <table className="table-fixed">
                    <thead className="border-t-[#00000033] border-b-[#9626cb] border-b-[5px] border-t-[1px] justify-between h-[52px] ">
                      <tr className="">
                        <th className="text-start font_f text-sm">Date</th>
                        <th className="text-start font_f text-sm ">Amount</th>
                        <th className="text-start font_f text-sm">Total</th>
                        <th className="text-start font_f text-sm">
                          Total Cycles
                        </th>
                        <th className="text-start font_f text-sm">
                          Total Cycles Left
                        </th>
                        <th className="text-start font_f text-sm">
                          Amount Left
                        </th>
                        <th className="text-start font_f text-sm">
                          Amount Relesed
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {passivetable.map((item) => {
                        return (
                          <tr
                            id={item.id}
                            className="border-[#00000033] border-y-[1px] justify-between h-[48px] hover:bg-[#0000000a]"
                          >
                            <td className="text-start font_f font-normal text-sm">
                              {item.mamberid}
                            </td>
                            <td className="font_f text-start  font-normal text-sm">
                              {item.mamberdate}
                            </td>
                            <td className="font_f text-start font-normal text-sm">
                              {item.rate}
                            </td>
                            <td className="font_f text-start font-normal text-sm">
                              {item.date}
                            </td>
                            <td className="font_f text-start font-normal text-sm">
                              {item.percent}
                            </td>
                            <td className="font_f text-start font-normal text-sm ">
                              {item.admin}
                            </td>
                            <td className="font_f text-start font-normal text-sm">
                              {item.realease}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="bg_table py-2 text-white text-[14px] text-center">
                  (10% will be automatically released to the Active Wallet on
                  1st of every month)
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="card flex-auto pt-8">
              <div className="px-6 py-4 border-b-black border-[1px] border-opacity-10 flex items-center">
                <h2 className=" text-sm m-0 font-f-bold font-bold">
                  Transfer Active Bonus Amount into Cash Wallet
                </h2>
              </div>

              <div className="px-6 py-4 flex flex-col sm:flex-row sm:gap-6  pt-2 ">
                <div className="flex flex-col sm:flex-row sm:gap-4  flex-auto">
                  <div className="flex-auto">
                    <div className="text-left mt-2 ml-3 font-weight-600 text-[10px]  font-f font-color">
                      AMOUNT
                    </div>
                    <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                      <input
                        className="textbox text-[14px] pl-4 pr-20 py-2 border-0 outline-none w-full font-f bg-transparent value:text-[4px]"
                        value="100"
                        placeholder="AMOUNT"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="flex-auto">
                    <div className="text-left mt-2 ml-3 font-weight-600 text-[10px]  font-f font-color">
                      FEE IN USD
                    </div>
                    <div className="mt-2 bg-foreground rounded-full px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                      <input
                        className="textbox text-[14px] pr-20 px-4 py-2 border-0 outline-none w-full bg-transparent  font-f"
                        value="0"
                        placeholder=" Fee In USD"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="text-left mt-2 ml-3 font-weight-600 text-[10px]  font-f font-color">
                      RECEIVABLE AMOUNT
                    </div>
                    <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                      <input
                        className="textbox text-[14px] px-4 pr-20 py-2 border-0 outline-none w-full bg-transparent font-f"
                        value="receivable amount"
                        placeholder=" Receivable Amount"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="text-left mt-2 ml-3 font-weight-600 text-[10px]  font-f font-color">
                      2FA
                    </div>
                    <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                      <input
                        className="textbox text-[14px] pr-12 font-f px-4 py-2 border-0 outline-none w-full bg-transparent text-secondary"
                        value="2FA"
                        placeholder=" 2FA"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="  flex items-end pt-2">
                  <button
                    mat-raised-button
                    className="bg-lenier-gradient  w-full flex items-center justify-center  rounded-full px-5 font-f font-size-10 font-weight-600"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
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
                        stroke-width="16"
                      ></line>
                      <polyline
                        points="144 56 216 128 144 200"
                        fill="none"
                        stroke="#ffffff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="16"
                      ></polyline>
                    </svg>
                    <p className="text-white text-[10px] font-semibold">
                      TRANSFER
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="card flex-auto">
              <div className="px-6 py-4 border-b flex items-center">
                <h2 className="text-[16px]   font-f-bold font-bold font-color m-0">
                  Withdraw Wallet Balance
                </h2>
              </div>

              <div className="px-6 py-4 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:gap-4 px-6">
                  <div className="flex-auto w-72">
                    <div className="text-left   text-[10px] font-weight-600  font-f font-color mt-2 ml-3 ">
                      SELECT WITHDRAW MODE
                    </div>
                    <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                      <select
                        className="textbox font-f px-4 py-[6px] border-0 outline-none w-full bg-transparent "
                        placeholder=" receivable amount"
                        type="text"
                      >
                        <option className="text-[14px]">bitcoin</option>
                      </select>
                    </div>

                    <div className="">
                      <div className="text-left mt-2 ml-3 text-[10px] font-weight-600  font-f font-color ">
                        RECEIVABLE AMOUNT
                      </div>
                      <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                        <select
                          className="textbox font-f text-[16px] px-4 py-[6px] border-0 outline-none w-full bg-transparent "
                          placeholder=" receivable amount"
                          type="text"
                        >
                          <option className="text-[10px]">
                            receivable amount
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex-auto">
                    <div className="text-left mt-2 ml-3 text-[10px] font-weight-600  font-f font-color">
                      AMOUNT IN USD
                    </div>
                    <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[300px] flex-auto flex items-center border border-gray-300">
                      <input
                        className="textbox  px-4 py-[6px] border-0 outline-none w-full bg-transparent font-f "
                        placeholder="amount"
                        type="text"
                      />
                    </div>

                    <div className="">
                      <div className=" mt-2 ml-3 text-[10px] font-weight-600  font-f font-color">
                        2FA
                      </div>
                      <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[300px] flex-auto flex items-center border border-gray-300">
                        <input
                          className="textbox font-f px-4 py-[6px] border-0 outline-none w-full bg-transparent text-secondary"
                          placeholder=" 2FA"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="text-left mt-2 ml-3 text-[10px] font-weight-600  font-f font-color ">
                      ADDRESS
                    </div>
                    <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[300px] flex-auto flex items-center border border-gray-300">
                      <input
                        className="textbox font-f px-4 py-[6px] border-0 outline-none w-full bg-transparent "
                        placeholder="address"
                        type="text"
                      />
                    </div>
                    <div className="">
                      <div className=" mt-2 ml-3 text-[10px] font-weight-600  font-f font-color ">
                        OTP
                      </div>
                      <div className="mt-2 bg-foreground rounded-full px-4 max-w-[300px] flex-auto flex items-center border border-gray-300">
                        <input
                          className="textbox  px-4 py-[6px] border-0 outline-none w-full bg-transparent  font-f"
                          placeholder=" enter OTP (check your email) "
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="text-left mt-2 ml-3 text-[10px] font-weight-600  font-f font-color ">
                      FEE IN USD (5%)
                    </div>
                    <div className="mt-2 bg-foreground rounded-full  px-4 max-w-[400px] flex-auto flex items-center border border-gray-300">
                      <input
                        className="textbox font-f px-4 py-[6px] border-0 outline-none w-full bg-transparent text-secondary"
                        placeholder=" fee"
                        type="text"
                      />
                    </div>

                    <div className="  flex-auto flex items-center  pt-8">
                      <button
                        className=" w-full bg-lenier-gradient text-white px-3 py-3 rounded-full text-[10px] font-weight-600  font-f"
                        type="button"
                      >
                        <fa-icon className="text-white px-2  "></fa-icon>
                        TRANSFER REWARDS
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-4 mt-4  px-6"></div>
              </div>
            </div>
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
