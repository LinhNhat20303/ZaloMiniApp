import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Page, useStore } from "zmp-framework/react";

import NavbarBack from "../../components/navbar-back";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const lineBarChartPage = () => {
    const [dataDataCharComponent,setDataCharComponent] =useState([])
    const dataCharComponent = useStore('getDataCharComponent')
    const dataCharComponent2 = useStore('getDataCharComponent2')
    // const dataSecondSwipper = useStore('dataSecondSwipper')
    useEffect(()=>{
    //     console.log(dataSecondSwipper);
        // setDataCharComponent(dataCharComponent)
        console.log(dataCharComponent);
        
    },[dataCharComponent])

  const labels = dataCharComponent.x;
  const data = {
    labels,
    datasets: [
      {
        label: "Sản Phẩm 1",
        data: dataCharComponent2.y,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Sản Phẩm 2",
        data: dataCharComponent.y,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  
  return (
    <Page name="user">
      <NavbarBack
        title="Doanh Thu San Pham"
        linkRight="/form"
        labelRight="Edit"
      />
      <Line options={options} data={data} />;
    </Page>
  );
};

export default lineBarChartPage;
