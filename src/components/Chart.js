import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import React, { useState, useEffect } from "react";

const Thene = () => {
  const [state, setstate] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Revenue Overview",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  });

  return (
    <div className="theme">
      <div className="graph">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={350}
        />
      </div>
      <div className="graph">
        <Chart
          type="donut"
          width={500}
          height={500}
          series={[45, 67, 89]}
          options={{
            labels: ["Direct", "Social", "Referral"],
            title: {
              text: "Revenue Sources",
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      show: true,
                      fontSize: 20,
                      color: "#F44336",
                    },
                  },
                },
              },
            },
            dataLabels: {
              enabled: true,
            },
          }}
        />
      </div>
    </div>
  );
};

export default Thene;
