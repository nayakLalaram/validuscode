import React from "react";
import Chart from "react-apexcharts";
const BarCharts = () => {
  const state = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
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
    fill: {
      colors: ['#1A73E8', '#B32824', '#000000'],
      opacity: 1,
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
    <div className="py-2 mt-4">
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
