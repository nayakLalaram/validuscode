import React from "react";
import "../../dashboard/Dashboard.css";
import credit_card from "../../../assets1/assets/img/credit_card.png";
import icon_card from "../../../assets1/assets/svg/More-Button.svg";
import arrow_bottom from "../../../assets1/assets/svg/arrow-bottom-left.svg";
import right_bottom from "../../../assets1/assets/svg/arrow-bottom-right.svg";
import cross_button from "../../../assets1/assets/img/delete-button.png";

const MemberShipCards = () => {
  const sopnsers = [
    {
      id: 0,
      text: "aus9",
    },
    {
      id: 1,
      text: "as9",
    },
    {
      id: 2,
      text: "hhhq001",
    },
    {
      id: 3,
      text: "aus9",
    },
    {
      id: 4,
      text: "hhhq001",
    },
  ];
  return (
    <div className="dark:border-gray-700">
      <div className="">
        <div className="card">
          <div className=" py-1  items-center justify-center mt-2">
            <h2 className=" py-4 text-center text-[13px] border-b-[1px] border-[#707070] border-opacity-20  text-black font-semibold font-color uppercase ">
              Criteria for next Rank
            </h2>
          </div>

          <div className="px-gutter py-2 grid grid-cols-1 sm:grid-cols-1 gap-4 ">
            <div className=" flex flex-col  ">
              <div cla color="#FFFFFF" size="1">
                <div className="flex items-center  px-2 py-2 ">
                  <ul>
                    <li className="flex items-center justify-between  border-dashed py-2 pb-3 border-b-2 border-[#00000033] dotted-border">
                      <h2 className=" py-2 text-center text-[14px] m-0  font-semibold  font-color ">
                        {" "}
                        Active 1L and 1R{" "}
                      </h2>
                    <img src={cross_button} className="h-4 mr-4"/>
                    </li>
                    <li className="flex items-center justify-between  border-dashed py-2 pb-3 border-b-2 border-[#00000033]">
                      <h2 className=" py-2 text-start text-[14px] m-0  font-semibold  font-color ">
                        {" "}
                        Left only Downline TV Required/Total 5000/49,050 Points
                      </h2>
                      <div>
                        <div  className="bg-[#00ba00] h-4 w-4 rounded-full mr-4 flex items-center justify-center">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                       
                        width="12"
                        height="12"
                        fill="#ffffff"
                        viewBox="0 0 256 256"
                      >
                        <rect width="256" height="256" fill="none"></rect>
                        <polyline
                          points="216 72 104 184 48 128"
                          fill="none"
                          stroke="#ffffff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        ></polyline>
                      </svg>
                        </div>
                      </div>
                    
                    </li>
                    <li className="flex items-center justify-between  border-dashed py-2 pb-3 ">
                      <h2 className=" py-2 text-start text-[14px] m-0  font-semibold  font-color ">
                        {" "}
                        Right only Downline TV Required/Points
                      </h2>
                      <div>
                        <div  className="bg-[#00ba00] h-4 w-4 rounded-full mr-4 flex items-center justify-center">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                       
                        width="12"
                        height="12"
                        fill="#ffffff"
                        viewBox="0 0 256 256"
                      >
                        <rect width="256" height="256" fill="none"></rect>
                        <polyline
                          points="216 72 104 184 48 128"
                          fill="none"
                          stroke="#ffffff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        ></polyline>
                      </svg>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card   card1 h2-card1  mt-2 px-2 py-2">
          <div className=" flex items-center justify-center mt-2">
            <div className=" text-primary-contrast ">
              <h2 className="text-[13px] font-semibold  text-white font_f pr-2  font-f font-weight-600 uppercase flex-auto">
                Active Membership
              </h2>
            </div>

            <div className=" justify-center   flex item-center max-w-[209px] max-h-[146px]">
              <img className="w-full h-[56] object-contain" src={credit_card} alt="my table"/>
            </div>

            <button
              className="    mr-5 item-center justify-center"
              color="primary"
              type="button"
            >
              <img className="icon_img_ht" src={icon_card} alt="my table"/>
            </button>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between px-8 pt-8 mb-6 border-b-[1px] border-[#707070] pb-4">
            <h2 className="font_f text-black uppercase font-bold text-sm ">
              Matrix Bonus
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

          <div className=" flex justify-center">
            <h2 className="font_f font-bold text-xl">230</h2>
            <span className="font_f font-semibold px-2 text-sm">Points</span>
          </div>
          <div className="px-gutter grid grid-cols-1 sm:grid-cols-1 gap-4">
            <div className=" flex flex-col gap-4 ">
              <div width="100%" color="#FFFFFF" size="1">
                <div className="flex items-center  px-2 py-2 ">
                  <ul>
                    <li className="flex items-center  py-2 pb-3 ">
                      <div>
                        <div   className="bg-[#00ba00] h-4 w-4 rounded-full mb-4 mr-2 flex items-center justify-center">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                      
                        width="14"
                        height="14"
                        fill="#ffffff"
                        viewBox="0 0 256 256"
                      >
                        <rect width="256" height="256" fill="none"></rect>
                        <polyline
                          points="216 72 104 184 48 128"
                          fill="none"
                          stroke="#ffffff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        ></polyline>
                      </svg>
                        </div>
                      </div>
                     
                      <h2 className=" py-2  text-xs m-0 text-start  font_f font-bold font-color ">
                        You must have an active v5000 or above membership
                      </h2>
                    </li>
                    <li className="flex items-center  py-2 pb-3 ">
                      <div>
                        <div   className="bg-[#00ba00] h-4 w-4 rounded-full mb-4 mr-2 flex items-center justify-center">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                      
                        width="14"
                        height="14"
                        fill="#ffffff"
                        viewBox="0 0 256 256"
                      >
                        <rect width="256" height="256" fill="none"></rect>
                        <polyline
                          points="216 72 104 184 48 128"
                          fill="none"
                          stroke="#ffffff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="24"
                        ></polyline>
                      </svg>
                        </div>
                      </div>
                     
                      <h2 className=" py-2  text-xs m-0 text-start  font_f font-bold font-color ">
                        You must have an active v5000 or above membership
                      </h2>
                    </li>
                   
                    <p className="text-[10px] font_f ">
                      * To qualify for the matrix bonus, you need to meet the
                      conditions above
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card  card2  mt-2 py-4">
        <div className="py-2 mt-1  items-center justify-center">
          <div className="pl-6  flex flex-col gap-4">
            <div className="flex items-center justify-between     ">
              <div className="flex ">
                <h2 className="  text-left   mr-20 font_f text-[14px] font-weight-600  text-white ">
                  REFERRAL LINK
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <polyline
                    points="48 160 128 80 208 160"
                    fill="none"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex px-4 py-2">
          <div className="bg-white h-10 rounded-full  px-4 max-w-[250px] flex-auto flex items-center border border-gray-300">
            <input
              className="px-4 py-2 border-0 outline-none w-full bg-transparent font-f  font-color"
              value="https://app.teamvalidus.com/auth/signup/aus8"
              type="url"
            />
          </div>

          <div className=" ml-2 rounded-full h-9 w-14 flex items-center justify-center text-primary my_bggradiant">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path
                d="M132.5,61.3l9.6-9.7a44.1,44.1,0,0,1,62.3,62.3l-30.3,30.2a43.9,43.9,0,0,1-62.2,0"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></path>
              <path
                d="M123.5,194.7l-9.6,9.7a44.1,44.1,0,0,1-62.3-62.3l30.3-30.2a43.9,43.9,0,0,1,62.2,0"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></path>
            </svg>
          </div>
        </div>
        <div className="px-4 mt-4">
          <h4 className=" ml-2 text-[14px]  m-0 font_f font-weight-600  text-white">
            New Member
          </h4>
        </div>
        <div className="flex w-full  items-center justify-between px-4 mt-2">
          <button className="border border-light w-full  rounded-full mr-2 flex  justify-between px-4 py-2">
            <img className="mt-2" src={arrow_bottom} />
            <span className="text-white ">Far Left</span>
          </button>
          <button className="border border-white items-center w-full rounded-full ml-2 flex  justify-between  px-4 py-2">
            <span className="text-white">Far Right</span>
            <img className="mt-2" src={right_bottom} />
          </button>
        </div>
      </div>
      <div className="mt-2 card">
        <div className=" py-1   items-center justify-center">
          <div className="px-6 py-4 flex flex-col gap-4">
            <div className="flex items-center    py-1">
              <div className="flex-auto">
                <h2 className="text-left font-size-14 font_f text-sm  font-bold  font-f-bold font-color flex-auto uppercase ">
                  {" "}
                  Direct Sponsor List
                </h2>
              </div>

              <h2 className=" font-size-14 font_f  font-color font-normal text-sm  ">
                <u>View all</u>
              </h2>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 pb-2 flex flex-col gap-4">
          <div>
            <hr width="100%" color="#FFFFFF" size="1" />
            {sopnsers.map((item) => {
              return (
                <div className="flex items-center mt-4 justify-center pt-2 border-dashed py-2 pb-3 border-b-2 border-[#00000033] last_border">
                  <div className="circle  ltr:mr-3 rtl:ml-3 flex-none "> </div>

                  <div className="flex-auto">
                    <h4 className="body-2 m-0  font-f font-weight-600 font-color mx-4">
                      {item.text}
                    </h4>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="bg-[#00ba00] h-4 w-4 rounded-full "
                      width="4"
                      height="4"
                      fill="#ffffff"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <polyline
                        points="216 72 104 184 48 128"
                        fill="none"
                        stroke="#ffffff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="24"
                      ></polyline>
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShipCards;
