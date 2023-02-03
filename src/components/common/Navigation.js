import React, { useState } from "react";
import '../common/navigation.css';
import logoimg from "../../assets1/assets/svg/app_icon.svg";
import dashboardlogo from "../../assets1/assets/side_nav_icon-black/speedometer.svg";
import Membership from "../../assets1/assets/side_nav_icon-black/membership_b.svg";
// import membership from '../../asset1/assets/side_nav_icon-black/membership_b.svg'
import giftwaleetlogo from "../../assets1/assets/side_nav_icon-black/gift-wallet.svg";
import bonuseslogo from "../../assets1/assets/side_nav_icon-black/bounces.svg";
import networklogo from "../../assets1/assets/side_nav_icon-black/network.svg";
import transation from "../../assets1/assets/side_nav_icon-black/transactions.svg";
import ranks from "../../assets1/assets/side_nav_icon-black/rank.svg";
import downloadlogo from "../../assets1/assets/side_nav_icon-black/download.svg";
import supportlogo from "../../assets1/assets/side_nav_icon-black/support.svg";
import profilelogo from "../../assets1/assets/side_nav_icon-black/user.svg";
import wallet from "../../assets1/assets/side_nav_icon-black/wallet.svg";


function Navigation() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div>
        <div className="shadow navigation_img drop-shadow-md  pb-2  ">
          <img src={logoimg} alt="" className="  select-none " />
        </div>

        {/* toggle button of sidebar navigation commented */}
        {/* 
<div className="text-center">
   <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 pl-3 .5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
   Show navigation
   </button>
</div> */}

        <div
          id="drawer-navigation"
          className="fixed sidebar left-0 z-40 h-screen    transition-transform bg-white w-120  "
        >
          {/* // sidebar hide and show class Commented
// tabIndex="-1" aria-labelledby="drawer-navigation-label"  aria-modal="true"
// className="-translate-x-full " */}

          <div className=" overflow-y-auto">
            <ul className="space-y-2">
              <li className="li">
                <a
                  href="/dashboard"
                  className="a flex items-center py-4 pl-3 pt-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <img src={dashboardlogo} alt="" />
                  <span className="ml-5">DASHBOARD</span>
                </a>
              </li>
              <li className="li">
                <a
                  href="/membership"
                  className="a flex items-center py-3 pl-3  text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <img src={Membership} alt="" />
                  <span className="flex-1 ml-5 text-left whitespace-nowrap">
                    MEMBERSHIP
                  </span>
                </a>
              </li>
              <li className="li">
                <a
                  href=""
                  className="a flex items-center py-3 pl-3  text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <img src={wallet} alt="" />
                  <span className="flex-1 ml-5 whitespace-nowrap">
                    WALLET
                  </span>
                </a>
              </li>
              <li className="li">
                <a
                  href="/giftwallet"
                  className="a flex items-center py-3 pl-3  text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <img src={giftwaleetlogo} alt="" />
                  <span className="flex-1 ml-5 whitespace-nowrap">
                    GIFT WALLET
                  </span>
                </a>
              </li>
              <li className="li">
                <a
                  href="#"
                  className="a flex items-center py-3 pl-3  text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <img src={bonuseslogo} alt="" />
                  <span className="flex-1 ml-5 whitespace-nowrap">BONUSES</span>
                </a>
              </li>
              <li className="li">
                <a
                  href="network"
                  className="a flex items-center py-3 pl-3  text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <img src={networklogo} alt="" />
                  <span className="flex-1 ml-5 whitespace-nowrap">NETWORK</span>
                </a>
              </li>
              <li className="li">
                <a
                  href="transaction"
                  className="a flex items-center py-3 pl-3  text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <img src={transation} alt="" />
                  <span className="flex-1 ml-5 whitespace-nowrap">
                    TRANSACTION
                  </span>
                </a>
              </li>
              <li className="li">
                <a
                  href="ranks&rewards"
                  className="a flex items-center py-3 pl-3  text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <img src={ranks} alt="" />
                  <span className="flex-1 ml-5 whitespace-nowrap">
                    RANK & REWARDS
                  </span>
                </a>
              </li>
              <li className="li">
                <a
                  href="#"
                  className="a flex items-center py-3 pl-3  text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <img src={profilelogo} alt="" />
                  <span className="flex-1 ml-5 whitespace-nowrap">PROFILE</span>
                </a>
              </li>
              <li className="li">
                <a
                  href="#"
                  className="a flex items-center py-3 pl-3  text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <img src={supportlogo} alt="" />
                  <span className="flex-1 ml-5 whitespace-nowrap">SUPPORT</span>
                </a>
              </li>
              <li className="li">
                <a
                  href="/download"
                  className="a flex items-center py-3 pl-3  text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <img src={downloadlogo} alt="" />
                  <span className="flex-1 ml-5 whitespace-nowrap font-extrabold ">
                    DOWNLOAD
                  </span>
                </a>
              </li>
              <li className="li">
                <a
                  href="#"
                  className=" a flex items-center py-3 pl-3  text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <img src={bonuseslogo} alt="" />
                  <span className="flex-1 ml-5 whitespace-nowrap">
                    V-MASTERY
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navigation;
