import React from "react";
import Chart from "react-apexcharts";
import RewardTable from "./RewardTable";
const Reward = () => {
  var state = {
    series: [
      {
        name: "Actual",
        data: [
          {
            x: "2011",
            y: 1292,
            goals: [
              {
                name: "Expected",
                value: 1400,
                strokeHeight: 5,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2012",
            y: 4432,
            goals: [
              {
                name: "Expected",
                value: 5400,
                strokeHeight: 5,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2013",
            y: 5423,
            goals: [
              {
                name: "Expected",
                value: 5200,
                strokeHeight: 5,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2014",
            y: 6653,
            goals: [
              {
                name: "Expected",
                value: 6500,
                strokeHeight: 5,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2015",
            y: 8133,
            goals: [
              {
                name: "Expected",
                value: 6600,
                strokeHeight: 13,
                strokeWidth: 0,
                strokeLineCap: "round",
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2016",
            y: 7132,
            goals: [
              {
                name: "Expected",
                value: 7500,
                strokeHeight: 5,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2017",
            y: 7332,
            goals: [
              {
                name: "Expected",
                value: 8700,
                strokeHeight: 5,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2018",
            y: 6553,
            goals: [
              {
                name: "Expected",
                value: 7300,
                strokeHeight: 2,
                strokeDashArray: 2,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2019",
            y: 7332,
            goals: [
              {
                name: "Expected",
                value: 8700,
                strokeHeight: 5,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2020",
            y: 7332,
            goals: [
              {
                name: "Expected",
                value: 8700,
                strokeHeight: 5,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2021",
            y: 7332,
            goals: [
              {
                name: "Expected",
                value: 8700,
                strokeHeight: 5,
                strokeColor: "#775DD0",
              },
            ],
          },
        ],
      },
    ],
    chart: {
      height: 100,
      type: "",
    },
    plotOptions: {
      bar: {
        columnWidth: "70%",
        barHeight: "30%",
      },
    },
    colors: ["#000000"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      customLegendItems: ["Actual", "Expected"],
      markers: {
        fillColors: ["#000000", "#775DD0"],
      },
    },
  };
 
  return (
    <div>
      <div className="py-10 bg-white drop-shadow-md rounded-lg">
        <div className="flex m-5">
          <div className="border-r  max-w-[100%]  ">
            <div className="py-6 flex mx-4">
              <h2 className=" font-weight-800 font-bold text-sm font_f   m-0 w-5 ">
                Membership Tier
              </h2>

              <div className="m-0 ml-20 flex ">
                <div className="font-weight-600 font-bold text-[31px] font_f font-size-32 font-f font-color m-0  ">
                  2,550
                </div>
                <div className="font-weight-600 font-semibold text-xs font_f  font-size-12 font-f font-color -mt-1  pl-1">
                  Points
                </div>
              </div>
            </div>
            <div className="bg-[#e5e7eb] h-[1px] w-60 mt-3"></div>
            <div className="py-8  flex mx-4 ">
              <h2 className=" font-weight-800 font-bold text-sm font_f   m-0 w-5 ">
                Total Earned Till Date
              </h2>

              <div className="m-0 ml-20 flex ">
                <div className="font-weight-600 font-bold text-[31px] font_f font-size-32 font-f font-color m-0  ">
                  2,550
                </div>
                <div className="font-weight-600 font-semibold text-xs font_f  font-size-12 font-f font-color -mt-1  pl-1">
                  Points
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 w-full ">
            <div className=" py-4 px-2 flex items-center">
              <h2 className="font-size-16 font-weight-600 font-f font-color  m-0">
                REWARDS STATS
              </h2>
            </div>

            <Chart
              options={state.plotOptions}
              series={state.series}
              type="bar"
              height="250px"
              dataLabels={state.dataLabels}
              xaxis={state.xaxis}
            />
          </div>
        </div>
      </div>
      <RewardTable />
    </div>
  );
};

export default Reward;
