

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {
  Avatar,
  List,
  ListItem,
  Page,
  useStore,
  Icon,
} from "zmp-framework/react";
import src from "zmp-sdk";
import NavbarBack from "../../components/navbar-back";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const verticalBarChartPage = () => {
  const options = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
      title: {
        display: true,
        text: " Horizontal Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Product 1",
        data: ['-1500','-2000','-1000','-900','-700','300','900',],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Product 2",
        data: ['200','700','-1000','-500','-1200','-2000','100',],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <Page name="user">
      <NavbarBack
        title="Thông tin tài khoản"
        linkRight="/form"
        
      />
      <Bar options={options} data={data} />
    </Page>
  );
};

export default verticalBarChartPage;
