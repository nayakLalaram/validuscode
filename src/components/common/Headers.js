import React, { useState } from "react";
import { MdOutlineNotificationsOff } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BiCheckShield } from "react-icons/bi";
import { CiLock } from "react-icons/ci";
import right from "../../assets1/assets/svg/right.svg";
import userimg from "../../assets1/assets/img/user.png";
import "./headerr.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const[openprofile , setOpenprofile]=useState(false)
  const[hidesetting, setHidesetting]=useState(false)

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
      <div className="hidden sm:block">
        <div
          //   [classNameName.container]="isVerticalLayout$ | async"
          className="shadow-toolbar toolbar w-full  flex items-center border-b" 
          style={{ minHeight :'4rem'  ,
          width: 'calc(100% - 16rem)' ,
          position: 'fixed' , 
          left: '16rem' , 
          top : '0rem' , 
        zIndex :'9999'
        }}
        >
          <button
            //   (click)="openSidenav()" [className.hidden]="!mobileQuery"
            mat-icon-button
            type="button"
          >
            <mat-icon svgIcon="mat:menu"></mat-icon>
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
                        <span style={{ fontSize: "9px" }} className=" font-f ">
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
                className=" text-[12px] px-6 py-2 rounded-full bg-vilotate border border-addmoney font-f text-center"
                type="button"
                style={{
                  width: '100%' , 
                  minWidth: '100px' }}
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
                  <img src={userimg} alt="" className="h-8 w-56" />
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
                {/* <img src={right} alt="" style={{ width: "18px" }} /> */}
                <span className="ml-2 font-f  text-[14px] pr-1  ">online </span>
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
      </div>
      </>
  )
}
export default Header;
