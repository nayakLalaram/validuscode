import React from "react";
import Chart from "react-apexcharts";
const BarCharts = () => {
  const state = {
    series: [
      {
        name: "Net Profit",
        data: [20, 55, 40, 56, 55, 58, 63, 60, 66, 90, 53, 26,],
      },
      {
        name: "Revenue",
        data: [10, 30, 50, 80, 50, 35, 45, 70, 24, 32, 78, 58,],
      },
      
    ],
    chart: {
      type: "bar",
      height: 350,
    },
  
     
    
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
      fill: {
        colors: ['#853fd5', '#48b4fb',],
        opacity: 1,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
   
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };
  return (
    <div className="py-2 ">
      <h2 className="font_f font-semibold text-sm sm:px-6 px-5">NETWORK STATS</h2>
      <Chart
        options={state.plotOptions}
        series={state.series}
        type="bar"
        dataLabels={state.dataLabels}
        xaxis={state.xaxis}
      
      />
    </div>
  );
};

export default BarCharts;
