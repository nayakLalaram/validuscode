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
  return (
    <> 
    <Header/>
  <Navigation/>
    <div className="sm:ml-[270px] mt-[70px] ">
      <div className=" ml-5">
        <Tabs className="myalltabs">
          <TabList className="new_tabs border-b-[1px] border-[#00000033]">
            <Tab>REWARDS</Tab>
            <Tab>DIRECT BONUS</Tab>
            <Tab>NETWORK BONUS</Tab>
            <Tab>MATRIX BONUS</Tab>
            <Tab>PASSIVE BONUS</Tab>
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
