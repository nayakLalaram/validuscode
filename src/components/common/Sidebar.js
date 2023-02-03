import { Navbar } from "flowbite-react";
import React, { useState } from "react";
import logoimg from '../../assets1/assets/svg/app_icon.svg';
import BonuSes from "../bonuses/BonuSes";
import '../common/navbar.css'
import Dashboard from "../dashboard/Dashboard";
// import Home from "../home/Home";
import Profile from "../profile/Profile";
import Support from "../support/Support";
import Wallet from "../wallet/Wallet";
import Navigation from "./sidebar/Sidebar";
// import '../../assets1/assets/side_nav_icon-black';

const Sidebar = () => {
  const [itemlabel, setItemLabel] = useState(false);
  let pricelist = [
    { value: "950.00", id: 1, label: "Active Wallet" },
    { value: "1270.00", id: 2, label: "Passive Wallet" },
    { value: "1050.00", id: 3, label: "Gift Wallet" },
    { value: "431.00", id: 4, label: "Cash Wallet" },
  ];

  function openSidenav() {
    openSidenav();
  }
  return (
    <div>

      <nav>
        <div className="shadow-toolbar toolbar   border-b"  >
          <div className="mx-4">
            <img src={logoimg} className="h-[34px] w-auto" />
          </div>

          <span
            className="text-[12px]  font-f "
            style={{ width: "100%", maxWidth: "200px" }}
          >
            Wed , 21 Sept 2022 09:42:44 GMT
          </span>

          <div className="       px-2  ">
            <div className="flex" style={{ gap: '3rem' }} >
              {pricelist.map((items, index) => (
                <button
                  key={index}
                  className={`Btn h-full w-full px-1 font-normal  toolbar font-color fontw ${index + 1 == 1 ? 'b1' : index + 1 == 2 ? 'b2' : index + 1 == 3 ? 'b3' : 'b4'}`}
                  color="#000000"
                  type="button"
                  id="btn"
                  onMouseEnter={() => { setItemLabel(true) }}
                  onMouseLeave={() => { setItemLabel(false) }}
                >

                  <div
                  >
                    <div>
                      {
                        itemlabel &&
                        <span className="font-f text-[10px] text-white lavelName " >{items.label}</span>
                      }
                      <div className="flex">
                        <div className=" font-f text-[20px] ">{items.value}</div>
                        <div className=" text-[11px] font-medium mt-1 ml-1 ">
                          Points
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="  ">
            <div className="">
              <button
                className=" text-[12px] px-5 py-2 rounded-full  bg-vilotate border border-addmoney font-f text-center topup_btn "
                type="button"
              >
                TOP UP
              </button>
            </div>


          </div>

          <div className="userimg mat-ripple flex items-center rounded cursor-pointer relative trans-ease-out select-none py-1 pr-1 pl-1 hover\:bg-hover " >
            {/* <div ><img src={userimg} alt="" className="h-8 w-9" /></div> */}
            <div className=" body-1 ltr\:mr-3 rtl\:ml-3 hidden.sm\:block font-bold font-f text-[16px]">AUSB</div>
          </div>
        </div>
      </nav>



      <Navigation />

      <div className="p-4 sm:ml-[270px] ">
        <div className=" mt-14">
          {/* <Dashboard/> */}
          {/* <BonuSes /> */}
          {/* <Wallet/> */}
          {/* <Home/> */}
          {/* <Profile/> */}
          {/* <Support/> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
