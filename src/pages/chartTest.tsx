import React, {useRef, useEffect, useState} from 'react';
import { Button, Card, Input, Page, useStore, zmp, Box,Col, Row } from 'zmp-framework/react';
import NavbarBack from '../components/navbar-back';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import store from '../store'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const ChartPage = () => {
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'DOANH THU',
        
      },
    },
  };
  
  const labels = ['01/2022', '02/2022', '03/2022', '04/2022', '05/2022', '06/2022', '07/2022'];
  
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Doanh số năm 2022',
        data: ['200','300','250','100','0','500','900'],
        borderColor: '#55E8F2',
        backgroundColor: '#58DB86',
      },
    ],
  };
////////////////////////////////////////////////////////
const [dataCharTab,setDataCharTab] = useState([])
const saleman = useStore('getDataCharTab')
useEffect(()=>{
  console.log(saleman)
  setDataCharTab(saleman)
}, [saleman])
 

  return (
    <Page 
      name="user-form" 

    >
      <NavbarBack title="Chart" />
        <Card><Line options={options} data={data} /></Card>
        <Box px="0">
       
        <Row noGap mb={2} className="bg-color-w300">
          <Col>
            <Box m={0} className=''>
            Saleman
            </Box>
          </Col>
          <Col>
            <Box m={0} className=''>
            Total Policies
            </Box>
          </Col>
          <Col>
            <Box m={0} className=''>
            Revenue
            </Box>
          </Col>
          <Col>
            <Box m={0} className=''>
                Revenue Target
          
        <br></br>
            </Box>
          </Col>
        </Row>
     {saleman.map((sale,index)=>{
        return(<Row noGap>
            
            <Col>
              <Box m={0} className=''>
              {sale.saleman}
              </Box>
            </Col>
            <Col>
              <Box m={0} pl={2} className=''>
              {sale.totalPolicies}
              </Box>
            </Col>
            <Col>
              <Box m={0} className=''>
              {sale.revenue}
              </Box>
            </Col>
            <Col>
            
              <Box m={0} className=''>
                {sale.revenue/sale.target*100}% 
              <div className="w3-light-grey">
            <div
              className="w3-green"
             // style={{ width: `${sale.revenue/sale.target*100}%`}}
            style={sale.revenue/sale.target < 1 ? {width: `${sale.revenue/sale.target*100}%` } : { width:'100%'}}
            ></div> 
           </div>
          <br></br>
              </Box>
            </Col>
          </Row>
        )
     })}
        
       
      </Box>
      
    </Page>
  )
}

export default ChartPage;
