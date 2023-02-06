import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Header from "../common/Headers";
import Navigation from "../common/Navigation";
import Compliance from "./Compliance";

// import '../Downloads.Download.css'


function Download() {
  return <>


  
    <Header/>
    <Navigation />
  <div className="sm:ml-[300px] mt-[100px] bg-white ">
  <Tabs  className="vex-tabs">
    <TabList className="flex gap-10 font-bold mb-6 ">
      <Tab>COMPLIANCE <br />
      <div className="mat-ink-bar  mt-4"></div>
       </Tab>
      <Tab>MARKETING METERIALS <br/> 
      <div className="mat-ink-bar  mt-4"></div>
      
      </Tab>
      <Tab>BUSINESS TOOLS <br />
      <div className="mat-ink-bar  mt-4"></div>
       </Tab>
      <Tab>TRAININGS <br />
      <div className="mat-ink-bar  mt-4"></div>
       </Tab>

    
    </TabList>

    <TabPanel>
      <div><Compliance /></div>

      
    </TabPanel>
    <TabPanel>
      <div><Compliance /></div>
    </TabPanel>
    <TabPanel>
      <div><Compliance /></div>
    </TabPanel>
    <TabPanel>
      <div><Compliance /></div>
    </TabPanel>
  </Tabs>
 
  </div>

</>;
}
export default Download;;
