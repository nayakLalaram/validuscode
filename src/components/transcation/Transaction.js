import React , { useState } from "react";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import Deposit from "./Deposit";
import Internaltrans from "./Internal";
import Membership from "./Membership";
import OtherTrans from "./Othertrans";
import Withdraw from "./Withdraw";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "../transcation/transaction.css";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Header from "../common/Headers";
import Navigation from "../common/Navigation";

function Transaction() {
  const [activeTab, setActiveTab] = useState(4);

  let tabs = [
    " MEMBERSHIP ",
    " INTERNALTRANSATION",
    "DEPOSIT ",
    "WITHDRAWTRANSACTION",
    "OTHERTRANSACTION",
  ];

  const onTabClick = (e, index) => {
    setActiveTab(index);
  };

  const TabScreen = ({ activeTab, idx, ...props }) => {
    return (
      <div
        className="animate__animated animate__fadeInLeft"
        role="tabpanel"
        {...props}
      >
        {activeTab === 0 && (
          <div className="mx-4">
            <Membership /> 
          </div>
        )}
         {activeTab === 1 && (
          <div className="mx-4">
            
            <Internaltrans />
          </div>
        )}
        {activeTab === 2 && (
          <div className="mx-4">
            
            <Deposit />
          </div>
        )}
        {activeTab === 3 && (
          <div className="mx-4">
            
            <Withdraw />
          </div>
        )}
        {activeTab === 4 && (
          <div className="mx-4">
            
            <OtherTrans />
          </div>
        )} 
      
      </div>
    );
  };

  return (
    <>
      <Header />
      <Navigation />
      <div className="lg:ml-[290px] mt-[90px] bg-white ">
      <div className="App">
          <Tabs
            activeTab={activeTab}
            onTabClick={onTabClick}
            hideNavBtnsOnMobile={false}
            className='mx-4'
          >
            {tabs.map((item) => (
              <Tab key={item}> {item}
                  <div className="mat-ink-bar px-3 rounded-sm "></div></Tab>
            ))}
          </Tabs>
           
           <TabScreen activeTab={activeTab}>
            </TabScreen>
       
        
        </div>
        
      </div>
    </>
  );
}
export default Transaction;
