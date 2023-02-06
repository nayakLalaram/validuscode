import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Deposit from "./Deposit";
import Internaltrans from "./Internal";
import Membership from "./Membership";
import OtherTrans from "./Othertrans";
import Withdraw from "./Withdraw";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "../transcation/membership.css";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Header from "../common/Header";
import Navigation from "../common/Navigation";

function Transaction() {
  let tabs = [
    " MEMBERSHIP ",
    " INTERNALTRANSATION",
    "DEPOSIT ",
    "WITHDRAWTRANSACTION",
    "OTHERTRANSACTION",
  ];
  return (
    <>
      <Header />
      <Navigation />
      <div className="sm:ml-[290px] mt-[90px] bg-white ">
        <Tabs className="vex-tabs">
          <ScrollMenu
            style={{ marginRight: "30px" }}
            LeftArrow={<FaChevronLeft className="h-3 text-gray-400" />}
            RightArrow={
              <FaChevronRight className="h-3 text-gray-400 drop-shadow-md " />
            }
          >
            <TabList className="flex gap-5 font-bold ">
              {tabs.map((items) => (
                <Tab className="ml-7 font-bold text-gray-500  ">
                  {items} <br />
                  <div className="mat-ink-bar mt-3 "></div>
                </Tab>
              ))}
            </TabList>
          </ScrollMenu>

          <TabPanel>
            <div>
              <Membership />
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <Internaltrans />
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <Deposit />
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <Withdraw />
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <OtherTrans />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
export default Transaction;
