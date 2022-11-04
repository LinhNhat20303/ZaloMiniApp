import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import {
  Avatar,
  List,
  ListItem,
  Page,
  useStore,
  Icon,
  Card,
} from "zmp-framework/react";
import src from "zmp-sdk";
import NavbarBack from "../../components/navbar-back";
import { nominalTypeHack, number } from "prop-types";
import ChartDataLabels from 'chartjs-plugin-datalabels';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const horizonBarChartPage = () => {
  const optionsBar = {
    responsive: true,
    plugins: {
      datalabels: {
        anchor: "start",
        backgroundColor: function (context) {
          return context.dataset.backgroundColor;
        },
        borderColor: "white",
        borderRadius: 25,
        borderWidth: 2,
        color: "white",
        font: {
          weight: "bold",
        },
        formatter: Math.round,
        padding: 6,
      },
    },

    // Core options
    aspectRatio: 5 / 3,
    layout: {
      padding: {
        top: 24,
        right: 16,
        bottom: 0,
        left: 8,
      },
    },
    elements: {
      line: {
        fill: false,
      },
      point: {
        hoverRadius: 7,
        radius: 5,
      },
    },
    //   scales: {
    //     x: {
    //       stacked: true
    //     },
    //     y: {
    //       stacked: true
    //     }
    //   }
    // ,

    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Doanh Thu Theo Tháng của 2 sản phẩm",
    },
  };
  const optionPie = {
    responsive: true,
    plugins: {
      datalabels: {
        datalabels: {
          backgroundColor: function (context) {
            return context.dataset.backgroundColor;
          },
          borderColor: "white",
          borderRadius: 25,
          borderWidth: 2,
          color: "white",
          display: function (context) {
            var dataset = context.dataset;
            var count = dataset.data.length;
            var value = dataset.data[context.dataIndex];
            return value > count * 1.5;
          },
          font: {
            weight: "bold",
          },
          padding: 6,
          formatter: Math.round,
        },
      },
    },
    legend: {
      position: "top" as const,
    },
  };
  const [dataSmartPhoneMarket, setDataSmartPhoneMarket] = useState([]);
  const data = useStore("getDataSmartPhoneMarket");

  const labels = ["2022Q1", "2021Q1"];
  let newDataConvertToData4 = [];

  /////////////////////////////////////////////////////////////////////////////////
  //Chart data
  data.map((number) => {
    let dts = {};
    dts.label = number.brand;
    dts.data = [number.Shipments2022Q1, number.Shipments2021Q1];
    dts.backgroundColor = number.color;
    newDataConvertToData4.push(dts);
  });
  const data4 = {
    labels,
    datasets: newDataConvertToData4,
  };
  ////////////////////////////////////////////////////////////////////////////////
  //accessoriesData
  const accessoriesData = useStore("getOrder");
  const color_list = ["#012030", "#13678A", "#45C4B0", "#9AEBA3", "#DAFDBA"];
  const accessoriesLabel = [
    new Date(accessoriesData.buy_time).toLocaleDateString(),
  ];
  // ham split : cat chuoi tai ky tu
  const accessoriesConvertData = [];
  const accessoriesConvertDataPie = [];
  const accessoriesConvertDataPieLabels = []
  const dataTempPie = []
  let dtsPie =[{}];
  
  accessoriesData.product_list.map((pd, index) => {
    let dts = {};

    //// push vao dts
    dts.label = pd.product_id;
    dts.data = [pd.quantity * pd.price];
    dts.backgroundColor = color_list[index];

    //// push vao dtsPie
    //accessoriesConvertDataPie.labels = pd.product_id;
    
    accessoriesConvertDataPieLabels.push(pd.product_id)
    dataTempPie.push(pd.quantity * pd.price);

    ////////
    accessoriesConvertData.push(dts);

  });
  dtsPie[0].borderColor = ["white", "white", "white", "white", "white"];
  dtsPie[0].borderWidth =1;
  dtsPie[0].label = "name of chart"
  dtsPie[0].data = dataTempPie
  dtsPie[0].backgroundColor = color_list;

  const accessoriesDataChart = {
    labels: accessoriesLabel,
    datasets: accessoriesConvertData,
  };

  //pie data
  const accessoriesDataPie ={
    labels: accessoriesConvertDataPieLabels,
    datasets: dtsPie,
  }
  //pie convert


  ////1/////
  let newDataConvertToData = [];
  let piedts = {};
  let piedts2 = {};
  let datasets = [{}];
  let labelArray = [];
  let dataArray = [];
  let colorArray = [];

  data.map((number) => {
    labelArray.push(number.brand);
    piedts2.labels = labelArray;

    piedts2.datasets = datasets;

    colorArray.push(number.color);

    dataArray.push(number.Shipments2021Q1);
  });
  datasets[0].backgroundColor = colorArray;
  datasets[0].data = dataArray;
  datasets[0].label = "# of Votes";
  datasets[0].borderColor = ["white", "white", "white", "white", "white"];
  datasets[0].borderWidth = 1;

  // data.map((number) => {
  //   dataArray.push(number.Shipments2022Q1);
  //   datasets[0].data = dataArray

  //   labelArray.push(number.brand);
  //   piedts.labels = labelArray;

  //   colorArray.push(number.color);
  //   datasets[0].backgroundColor = colorArray;

  //   newDataConvertToData.push();
  // });
  //   datasets[0].label =  "# of Votes",
  //   datasets[0].borderColor = ["white", "white", "white", "white", "white"],
  //   datasets[0].borderWidth = 1
  //   piedts.datasets= datasets

  useEffect(() => {
    console.log(piedts2);
    console.log(datasets[0]);
  }, []);

  ////2/////
  let newDataConvertToData2 = [];
  let piedts3 = {};
  let labelsClone2 = [];
  let colorClone2 = [];
  let dataClone2 = [];
  let datasetsClone = [{}];
  data.map((number) => {
    labelsClone2.push(number.brand);
    piedts3.labels = labelsClone2;

    piedts3.datasets = datasetsClone;
    colorClone2.push(number.color);
    dataClone2.push(number.Shipments2022Q1);
  });
  datasetsClone[0].backgroundColor = colorClone2;
  datasetsClone[0].data = dataClone2;
  datasetsClone[0].label = "# of Votes";
  datasetsClone[0].borderColor = ["white", "white", "white", "white", "white"];
  datasetsClone[0].borderWidth = 1;

  useEffect(() => {
    console.log(piedts3);
    console.log(datasetsClone[0]);
  }, []);
  /////////

  const Shipments2022Q1 = {
    labels,
    datasets: newDataConvertToData,
  };

  const Shipments2021Q1 = {
    labels,
    datasets: newDataConvertToData2,
  };
 
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data2 = {
    labels: ["OPPO ", "Honor ", "Vivo ", "Apple", "Xiaomi", "Others"],
    datasets: [
      {
        label: "# of Votes",
        data: [24, 44, 35, 7, 11, 23, 32],
        backgroundColor: [
          "#042940",
          "#005C53",
          "#9FC131",
          "#DBF227",
          "#D6D58E",
          "#D6D58F",
        ],
        borderColor: ["white", "white", "white", "white", "white"],
        borderWidth: 1,
      },
    ],
  };

  function sumShipments(dt, field) {
    let sumShipments = 0;
    dt.map((number, index) => (sumShipments += Number(number[`${field}`])));
    return sumShipments.toFixed(1);
  }

  useEffect(() => {
    // console.log(sumShipments(data, "Shipments2021Q1"));
    // console.log(sumShipments(data, "Shipments2022Q1"));
  }, []);
  return (
    <Page name="user">
      <NavbarBack title="" linkRight="/form" labelRight="Edit" />

      {/* <img
        src="https://www.idc.com/getfile.dyn?containerId=prAP49064922&attachmentId=47448745"
        alt=""
      /> */}
      <table className="smartPhoneDataTable" style={{ background: "white" }}>
        <tr style={{ fontSize: "10px", padding: "0 2px 2px 2px" }}>
          <td className="border border-slate-600">
            <th>Company</th>
          </td>
          <td className="border border-slate-600">
            <th>Shipment Q12021</th>
          </td>
          <td className="border border-slate-600">
            <th>MarketShare Q12021</th>
          </td>
          <td className="border border-slate-600">
            <th>Shipment Q12022</th>
          </td>
          <td className="border border-slate-600">
            <th>MarketShare Q12022</th>
          </td>
          <td className="border border-slate-600">
            <th>YoY</th>
          </td>
        </tr>
        {data.map((number, index) => {
          return (
            <tr key={`number-${index}`}>
              <td className="border border-slate-700">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {number.brand}
                </div>
              </td>
              <td className="border border-slate-700">
                <div>{number.Shipments2021Q1}</div>
              </td>
              <td className="border border-slate-700">
                <div>
                  {(
                    (number.Shipments2021Q1 /
                      Number(sumShipments(data, "Shipments2021Q1"))) *
                    100
                  ).toFixed(1)}
                  %
                </div>
              </td>
              <td className="border border-slate-700">
                <div>{number.Shipments2022Q1}</div>
              </td>
              <td className="border border-slate-700">
                <div>
                  {(
                    (number.Shipments2022Q1 /
                      Number(sumShipments(data, "Shipments2022Q1"))) *
                    100
                  ).toFixed(1)}
                  %
                </div>
              </td>
              <td className="border border-slate-700">
                <div>
                  {(
                    ((number.Shipments2022Q1 - number.Shipments2021Q1) /
                      number.Shipments2021Q1) *
                    100
                  ).toFixed(1)}
                  %
                </div>
              </td>
            </tr>
          );
        })}
        <tr>
          <td className="border border-slate-700">
            <div>Total</div>
          </td>
          <td className="border border-slate-700">
            <div>{sumShipments(data, "Shipments2021Q1")}</div>
          </td>
          <td className="border border-slate-700">
            <div>100%</div>
          </td>
          <td className="border border-slate-700">
            <div>{sumShipments(data, "Shipments2022Q1")}</div>
          </td>
          <td className="border border-slate-700">
            <div>100%</div>
          </td>
          <td className="border border-slate-700">
            <div>
              {(
                ((Number(sumShipments(data, "Shipments2022Q1")) -
                  Number(sumShipments(data, "Shipments2021Q1"))) /
                  Number(sumShipments(data, "Shipments2021Q1"))) *
                100
              ).toFixed(1)}
              %
            </div>
          </td>
        </tr>
      </table>

      <Pie data={piedts3}></Pie>
      <Bar
        plugins={[ChartDataLabels]}
        options={optionsBar}
        data={accessoriesDataChart}
      />
      <Pie data={accessoriesDataPie} options={optionPie} />
    </Page>
  );
};

export default horizonBarChartPage;
