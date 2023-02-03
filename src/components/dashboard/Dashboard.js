import React from "react";
import "../dashboard/Dashboard.css";
import Blocks from "./cards/Blocks";
import RankCards from "./cards/RankCards";
import PieCharts from "./charts/PieCharts";
import ActivityTable from "./table/ActivityTable";
import MemberShipCards from "./cards/MemberShipCards";
import LineCharts from "./charts/LineCharts";
import BarCharts from "./charts/BarCharts";
import Header from "../common/Header";
import Navigation from "../common/Navigation";

const Dashboard = () => {
  return (
    <>

   {/* <Header /> */}
   <Header/>
   <Navigation/>
    {/* <Navigation /> */}
    <div className="pt-6 sm: ml-[280px] mt-[70px]">
      <div className="flex justify-between">
        <div className="w-[70%]">
          <Blocks />
          <div className="grid grid-cols-2 gap-2 ">
            <div>
              <PieCharts />
            </div>
            <div>
              <ActivityTable />
            </div>
          </div>
          <BarCharts />
          <LineCharts />
        </div>
        <div className="w-[28%]">
          <div className="small_box flex items-center px-8 ">
            <h2 className="font_f text-xs font-bold">Your Sponsor:</h2>
            <div className="bg-[#853fd5] h-10 w-10 rounded-full mx-5"></div>
            <h2 className="font_f text-sm font-bold">Aug 7</h2>
          </div>
          <div>
            <RankCards />
            <MemberShipCards />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
