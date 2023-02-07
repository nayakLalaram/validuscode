import React, { useState } from "react";
import { MdOutlineNotificationsOff } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BiCheckShield } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai"
import { CiLock } from "react-icons/ci";
import right from "../../assets1/assets/svg/right.svg";
import userimg from "../../assets1/assets/img/user.png";
import "./headerr.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openprofile, setOpenprofile] = useState(false);        
  const [hidesetting, setHidesetting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const opens = () => {
    setOpen(true);
  };
  const falsseopen = () => {
    setOpen(false);
  };

  let pricelist = [
    { value: "950.00", id: 1, label: "Active Wallet" },
    { value: "1270.00", id: 2, label: "Passive Wallet" },
    { value: "1050.00", id: 3, label: "Gift Wallet" },
    { value: "431.00", id: 4, label: "Cash Wallet" },
  ];
  function handleclose() {
    if (openprofile === true) {
      setOpenprofile(false);
    } else {
      setOpenprofile(true);
    }
  }

  function hideSettingtxt() {
    if (hidesetting === true) {
      setHidesetting(false);
    } else {
      setHidesetting(true);
    }
  }
  function valueSplit1(val) {
    val = val.split(".")[0];
    return val;
  }

  return (
    <>
      <div>
        <div className="  ">
          <div
            //   [classNameName.container]="isVerticalLayout$ | async"
            className="shadow-toolbar toolbar w-full  flex items-center border-b  hheadersss"
            style={{
              minHeight: "4rem",
              width: "calc(100% - 16rem)",
              position: "fixed",
              left: "16rem",
              top: "0rem",
              zIndex: "9999",
            }}
          >
             <button
          className="menu_btn"
              // onClick={openSidenav}
            //  [className.hidden]="!mobileQuery"
            type="button"
            style={{ display :'none' , 
            
          }}

          > 
          < AiOutlineMenu className="ml-3" />
          </button>

            <div className="ml-2 " style={{ width: "100%", maxWidth: "200px" }}>
              <div className=" ">
                <span className="text-[12px] font-f font-color">
                  Wed, 21 Sept 2022 09:42:44 GMT
                </span>
              </div>
            </div>

            <div className="w-full    py-2    px-1 grid grid-cols--1   sm:grid-cols-1  md:grid-cols-4 gap-1">
              {pricelist.map((item, i) => (
                <>
                  <div className="   ">
                    <button
                      onMouseEnter={opens}
                      onMouseLeave={falsseopen}
                      className={`Btn h-full w-full    toolbar font-color flex items-center justify-center + ${
                        i + 1 === 1
                          ? "b1"
                          : i + 1 === 2
                          ? "b2"
                          : i + 1 === 3
                          ? "b3"
                          : "b4"
                      }`}
                      color="#000000"
                      type="button"
                    >
                      <div fxLayout="column">
                        {open && (
                          <span
                            style={{ fontSize: "9px" }}
                            className=" font-f "
                          >
                            {item.label}
                          </span>
                        )}

                        <div className="flex justify-center ">
                          <div className=" font-size-10  font-f font-weight-600"></div>

                          <div className="text-[22px  ] font-f ">
                            {valueSplit1(item.value)}
                          </div>
                          <div className=" text-[10px]   font-f font-weight-600">
                            &nbsp; Points
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </>
              ))}
            </div>

            <div className=" flex items-center ">
              <div className="px-2 mr-2">
                <button
                  className="top_btn text-[12px] px-6 py-2 rounded-full bg-vilotate border border-addmoney font-f text-center"
                  type="button"
                  style={{
                    width: "100%",
                    minWidth: "100px",
                  }}
                >
                  TOP UP
                </button>
              </div>

              <div className="flex-end px-1 border-l mr-1">
                <div
                  className="userimg mat-ripple flex items-center rounded cursor-pointer relative trans-ease-out select-none py-1 pr-1 pl-1 hover\:bg-hover "
                  onClick={handleclose}
                >
                  <div>
                    <img src={userimg} alt="" className="h-7 " style={{width:"11rem"}}/>
                  </div>
                  <div className=" body-1 ltr\:mr-3 rtl\:ml-3 hidden.sm\:block font-bold font-f text-[16px]">
                    AUSB
                  </div>
                </div>
              </div>
              {openprofile && (
                <>
                  <div className="dropdown rounded-lg">
                    <div className="dropdown-header flex items-center justify-between py-5">
                      <div className="flex items-center">
                        <div className="dropdown-heading-icon flex items-center justify-center">
                          {/* {/ <img src={person} alt="" className="dropdown-heading-icon" /> /} */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="#ffffff"
                            viewBox="0 0 256 256"
                          >
                            <rect width="256" height="256" fill="none"></rect>
                            <circle
                              cx="128"
                              cy="96"
                              r="64"
                              fill="none"
                              stroke="#ffffff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="8"
                            ></circle>
                            <path
                              d="M31,216a112,112,0,0,1,194,0"
                              fill="none"
                              stroke="#ffffff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="8"
                            ></path>
                          </svg>
                        </div>
                        <div className="dropdown-heading font-f font-weight-600 text-white ml-3 text-[18px] ">
                          AUSB
                        </div>
                      </div>

                      <button
                        // mat-icon-button
                        matTooltip="Settings"
                        matTooltipPosition="before"
                        type="button"
                        onClick={hideSettingtxt}
                        data-tooltip-target="tooltip-left"
                        data-tooltip-placement="left"
                      >
                        <div
                          id="tooltip-left"
                          role="tooltip"
                          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                        >
                          Setting
                          <div className="tooltip-arrow" data-popper-arrow>
                            Setting
                          </div>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="#ffffff"
                          viewBox="0 0 256 256"
                        >
                          <rect width="256" height="256" fill="none"></rect>
                          <circle
                            cx="128"
                            cy="128"
                            r="48"
                            fill="none"
                            stroke="#ffffff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="16"
                          ></circle>
                          <path
                            d="M183.7,65.1q3.8,3.5,7.2,7.2l27.3,3.9a103.2,103.2,0,0,1,10.2,24.6l-16.6,22.1s.3,6.8,0,10.2l16.6,22.1a102.2,102.2,0,0,1-10.2,24.6l-27.3,3.9s-4.7,4.9-7.2,7.2l-3.9,27.3a103.2,103.2,0,0,1-24.6,10.2l-22.1-16.6a57.9,57.9,0,0,1-10.2,0l-22.1,16.6a102.2,102.2,0,0,1-24.6-10.2l-3.9-27.3q-3.7-3.5-7.2-7.2l-27.3-3.9a103.2,103.2,0,0,1-10.2-24.6l16.6-22.1s-.3-6.8,0-10.2L27.6,100.8A102.2,102.2,0,0,1,37.8,76.2l27.3-3.9q3.5-3.7,7.2-7.2l3.9-27.3a103.2,103.2,0,0,1,24.6-10.2l22.1,16.6a57.9,57.9,0,0,1,10.2,0l22.1-16.6a102.2,102.2,0,0,1,24.6,10.2Z"
                            fill="none"
                            stroke="#ffffff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="16"
                          ></path>
                        </svg>
                        <mat-icon
                          className="notifications-header-icon"
                          svgIcon="mat:settings"
                        ></mat-icon>
                      </button>
                    </div>

                    <div className="dropdown-footer flex items-center justify-between  py-3">
                      <button
                        className="dropdown-footer-select flex items-center justify-center px-6 py-2 rounded-full"
                        mat-button
                        type="button"
                      >
                        <img src={right} alt="" style={{ width: "18px" }} />  
                        <span className="ml-2 font-f  text-[14px] pr-1  ">
                          online{" "}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          fill="#67636c"
                          viewBox="0 0 256 256"
                        >
                          <rect width="256" height="256" fill="none"></rect>
                          <polygon
                            points="208 96 128 176 48 96 208 96"
                            opacity="0.2"
                          ></polygon>
                          <polygon
                            points="208 96 128 176 48 96 208 96"
                            fill="none"
                            stroke="#67636c"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="16"
                          ></polygon>
                        </svg>
                      </button>
                      <span className="primary font-f font-bold rounded-full text-[14px] px-8 py-2 ">
                        <a href="/"> Logout</a>
                      </span>
                    </div>

                    {hidesetting && (
                      <div className="setting_txt rounded  ">
                        <button className="flex items-center my-1 btns pb-1  ">
                          <HiOutlineBuildingOffice2 className="w-5" />
                          <span className="text-[12px] font-f ml-2">
                            Change Address
                          </span>
                        </button>

                        <button className="flex items-center my-1 btns pb-1 pt-1 ">
                          <BiCheckShield className="w-5" />
                          <span className="text-[12px] font-f ml-2">
                            Change Username
                          </span>
                        </button>

                        <button className="flex items-center my-1 btns pb-1 pt-1 ">
                          <CiLock className="w-5" />
                          <span className="text-[12px] font-f ml-2">
                            Change Password
                          </span>
                        </button>

                        <button className="flex items-center my-1  btns  pb-2">
                          <MdOutlineNotificationsOff className="w-5 mb-1 " />
                          <span className="text-[12px] font-f ml-2 mb-1 ">
                            Disable Notifications
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {/* <div class=" lg:hidden mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="relative  grid items-center grid-cols-2 lg:grid-cols-3">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              class="inline-flex items-center lg:mx-auto"
            >
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                Companydcxzfs
              </span>
            </a>

            <div class="ml-auto lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full">
                  <div class="p-5 bg-white border rounded shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Company"
                          title="Company"
                          class="inline-flex items-center"
                        >
                          <svg
                            class="w-8 text-deep-purple-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                          >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                          </svg>
                          <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Company
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4">
                        <li>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Product
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Features
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Product pricing"
                            title="Product pricing"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Sign in"
                            title="Sign in"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Sign in
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Sign up
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default Header;
