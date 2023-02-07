import React from "react";
import "../dashboard/Dashboard.css";
import Blocks from "./cards/Blocks";
import RankCards from "./cards/RankCards";
import PieCharts from "./charts/PieCharts";
import ActivityTable from "./table/ActivityTable";
import MemberShipCards from "./cards/MemberShipCards";
import LineCharts from "./charts/LineCharts";
import BarCharts from "./charts/BarCharts";
import Navigation from "../common/Navigation";
import Header from '../common/Headers'

const Dashboard = () => {
  return (
    <>

   <Header/>
   <Navigation/>
    <div className="pt-6 lg:ml-[292px] mt-16 mx-1 sm:mx-0  sm:mt-[70px]">
      <div className="lg:flex justify-between">
        <div className="lg:w-[70%] md:w-[100%] w-[100%]">
          <Blocks />
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 ">
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
        <div className="sm:w-[28%] mr-2">
          <div className="small_box flex items-center px-8 ">
            <h2 className="font_f text-[12px] font-semibold">Your Sponsor:</h2>
            <div className="bg-[#853fd5] h-8 w-8 rounded-full mx-5"></div>
            <h2 className="font_f text-sm font-semibold">Aug 7</h2>
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
