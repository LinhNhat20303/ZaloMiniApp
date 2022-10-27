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

const horizonBarChartPage = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Doanh Thu Theo Tháng của 2 sản phẩm",
      },
    },
  };
  const labels = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6 ",
    "Tháng 7",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Sản Phẩm 1",
        data: ["100", "150", "50", "500", "300", "900", "1000"],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Sản Phẩm 2",
        data: ["200", "150", "70", "900", "1200", "800", "1200"],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <Page name="user">
      <NavbarBack
        title="Thông tin tài khoản"
        linkRight="/form"
        labelRight="Edit"
      />
      <Bar options={options} data={data} />
    </Page>
  );
};

export default horizonBarChartPage;
