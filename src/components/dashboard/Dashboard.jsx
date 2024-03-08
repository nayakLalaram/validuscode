import React, { useState } from "react";
import "../dashboard/Dashboard.css";
import Blocks from "./cards/Blocks";
import RankCards from "./cards/RankCards";
import PieCharts from "./charts/PieCharts";
import ActivityTable from "./table/ActivityTable";
import MemberShipCards from "./cards/MemberShipCards";
import LineCharts from "./charts/LineCharts";
import BarCharts from "./charts/BarCharts";
import Navigation from "../common/Navigation";
import Header from "../common/Headers";

const Dashboard = () => {
 
  return (
    <>
      <Header />
      <Navigation  />
      <div className="pt-3 lg:ml-[294px] mt-16 mx-1 lg:mx-0 sm:mx-4  sm:mt-[80px]">
        <div className="lg:flex justify-between">
          <div className="lg:w-[70%] md:w-[100%] w-[100%]">
            <Blocks />
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 ">
              <div className="">
                <PieCharts />
              </div>
              <div>
                <ActivityTable />
              </div>
            </div>
            <BarCharts />
            <LineCharts />
          </div>
          <div className="lg:w-[28%] mr-[6px]">
            <div className="flex flex-col lg:flex-col sm:flex-row">
            <div className="py-3 flex items-center pl-4 rounded-lg lg:w-full sm:w-[370px] w-full sm:mr-6 mr-0 lg:mr-0" style={{backgroundColor:"white", boxShadow:"0px 3px 6px #272d3b12"}}>
              <h2 className="font_f text-[13px] font-semibold">
                Your Sponsor:
              </h2>
              <div className="bg-[#853fd5] h-8 w-8 rounded-full mx-5"></div>
              <h2 className="font_f text-sm font-semibold">Aug 7</h2>
            </div>
            <RankCards />
            </div>
            <MemberShipCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
