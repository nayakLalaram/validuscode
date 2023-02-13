import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import NetworkTree from "./Networktree";
import '../netwok/network.css'
import DounloadTV from "./Downloadtvdetail";
import TotalRank from "./Totalrank";
import Header from "../common/Headers";
import Navigation from "../common/Navigation";
import Matrixtree from "./Matrixtree";

function Newtork() {
  return <>


  
    <Header/>
    <Navigation />
  <div className="sm:ml-[300px] mt-[100px] bg-white ">
  <Tabs  className="vex-tabs">
    <TabList className="flex gap-10 font-bold ">
      <Tab>NETWORK TREE <br />
      <div className="mat-ink-bar  mt-4"></div>
       </Tab>
      <Tab>DOWNLINE TV DETAILS <br/> 
      <div className="mat-ink-bar  mt-4"></div>
      
      </Tab>
      <Tab>MATRIX TREE <br />
      <div className="mat-ink-bar  mt-4"></div>
       </Tab>
      <Tab>TOTAL RANK VOLUME DETAILS <br />
      <div className="mat-ink-bar  mt-4"></div>
       </Tab>

    
    </TabList>

    <TabPanel>
      <div><NetworkTree /></div>

      
    </TabPanel>
    <TabPanel>
      <div><DounloadTV /></div>
    </TabPanel>
    <TabPanel>
      <div><Matrixtree /></div>
    </TabPanel>
    <TabPanel>
      <div><TotalRank/></div>
    </TabPanel>
  </Tabs>
 
  </div>

</>;
}
export default Newtork;
