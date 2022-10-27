import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Page, Card } from "zmp-framework/react";

import NavbarBack from "../../components/navbar-back";

ChartJS.register(ArcElement, Tooltip, Legend);

const pieBarChartPage = () => {
  const data = {
    labels: [
      "Cây Lương Thực ",
      "Cây Rau Đậu ",
      "Cây Công Nghiệp ",
      "Cây Ăn Quả",
      "Cây Khác",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [24, 44, 35, 7, 11, 23],
        backgroundColor: [
          "#042940",
          "#005C53",
          "#9FC131",
          "#DBF227",
          "#D6D58E",
        ],
        borderColor: ["white", "white", "white", "white", "white"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Page name="user">
      <NavbarBack
        title="Doanh Thu San Pham"
        linkRight="/form"
        labelRight="Edit"
      />
        
      <Pie data={data} />
    </Page>
  );
};

export default pieBarChartPage;
