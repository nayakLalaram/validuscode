import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../bonuses/Bonuses.css";
import "react-tabs/style/react-tabs.css";
import Reward from "./tabs/Reward";
import DirectBonus from "./tabs/DirectBonus";
import NetworkBonus from "./tabs/NetworkBonus";
import MatrixTable from "./tabs/tables/MatrixTable";
import PassiveTable from "./tabs/tables/PassiveTable";
import Header from "../common/Headers";
import Navigation from "../common/Navigation";
const BonuSes = () => {

  const slideLeft = () =>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  const slideRight = () =>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  return (
    <> 
    <Header/>
  <Navigation/>
    <div className="lg:ml-[270px] mt-[70px] ">
      <div className="sm:ml-5">
        <Tabs className="myalltabs   sm:mx-5 mx-2" style={{background:"#FFFFFF 0% 0% no-repeat padding-box", boxShadow:"0px 3px 6px #272D3B12", border:"none", borderRadius:"9px", opacity:1}}>
          <TabList id="slider" className="new_tabs border-b-[1px] border-[#00000033] pt-3 flex">
            <div className="lg:hidden bg-white shadow-lg p-2 fixed left-0"><svg onClick={slideLeft} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="160 208 80 128 160 48" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg></div>
            <Tab>REWARDS</Tab>
            <Tab>DIRECT BONUS</Tab>
            <Tab>NETWORK BONUS</Tab>
            <Tab>MATRIX BONUS</Tab>
            <Tab>PASSIVE BONUS</Tab>
            <div className="lg:hidden  bg-white shadow-lg p-2 fixed right-0">
            <svg xmlns="http://www.w3.org/2000/svg"  onClick={slideRight} width="22" height="22" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="96 48 176 128 96 208" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
            </div>
          </TabList>

          <TabPanel>
            <Reward />
          </TabPanel>
          <TabPanel>
            <DirectBonus />
          </TabPanel>
          <TabPanel>
            <NetworkBonus />
          </TabPanel>
          <TabPanel>
            <h2>
              <MatrixTable />
            </h2>
          </TabPanel>
          <TabPanel>
            <h2>
              <PassiveTable />
            </h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
    </>
  );
};

export default BonuSes;
