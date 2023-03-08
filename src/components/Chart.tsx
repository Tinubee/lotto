import React, { useEffect, useRef } from "react";
import ApexCharts, { ApexOptions } from "apexcharts";
import { countNumber, isDarkAtom, selectNumber } from "../atoms";
import { useRecoilValue } from "recoil";

const Chart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const isDark = useRecoilValue(isDarkAtom);

  useEffect(() => {
    const chartOptions: ApexOptions = {
      series: [
        {
          name: "",
          data: countNumber,
        },
      ],
      chart: {
        type: "bar",
        height: 1200,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: selectNumber,
      },
      theme: {
        mode: isDark ? "dark" : "light",
      },
      title: {
        text: "번호별 출현 횟수",
        align: "center",
        style: {
          fontSize: "28",
        },
      },
      colors: ["#0fbcf9"],
    };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, chartOptions);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [isDark]);

  return <div ref={chartRef}></div>;
};

export default Chart;
