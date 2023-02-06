import React from "react";
import "../Dashboard.css";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
const PieCharts = () => {
  const state = {
    series: [87, 13],
    colors: ["#ffffff", "#000000"],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div className="myCards card_new pb-4">
      <div className="flex items-center justify-between px-8 pt-8 mb-5 ">
        <h2 className="font_f text-black uppercase font-bold text-sm">
          LIFETIME EARNING
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="22"
          fill="#6e6e6e"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <polyline
            points="48 160 128 80 208 160"
            fill="none"
            stroke="#6e6e6e"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></polyline>
        </svg>
      </div>
      <div className="bg-menu_bor h-[1px] max-w-full"></div>
      <div id="chart" className="my-16">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
          height={500}
          width={420}

        />
      </div>
    </div>
  );
};

export default PieCharts;
