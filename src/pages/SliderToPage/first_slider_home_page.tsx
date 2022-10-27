import React, { useEffect, useState } from "react";
import {
  Card,
  Navbar,
} from "zmp-framework/react";
import CountdownTimer from "../../components/CountdownTimer";
import NavbarBack from "../../components/navbar-back";
import ProductSlider from "../../components/product-swipper";

export default function SliderToPage() {
  return (
    <div className="bg-[#ffd0dc] overflow-scroll h-full">
      <div>
      <Navbar backLink  title={
          <img src="https://salt.tikicdn.com/ts/upload/d4/ca/89/28d85ed27396c1beebad8a3fec18bfe4.png"></img>
        }>

      </Navbar>
        
        <Card className="py-0">
          <img
            src="https://salt.tikicdn.com/cache/w600/ts/brickv2og/54/60/43/2b6882c99ee6fa422628629b31cd6573.png.webp"
            alt=""
          />
        </Card>
        <Card className="py-0">
          <img
            src="https://salt.tikicdn.com/cache/w600/ts/brickv2og/43/dc/89/6ad6fb96111c74f6e246e6e3e3c66f7e.png.webp"
            alt=""
          />
        </Card>
        <Card className="py-0">
          <img
            src="https://salt.tikicdn.com/cache/w600/ts/brickv2og/e5/63/d8/9f276d3565da3fec03846865f5543c99.png.webp"
            alt=""
          />
        </Card>
        <Card className="py-0">
          <img
            src="https://salt.tikicdn.com/cache/w1125/ts/brickv2og/db/42/b4/a3ed68e71a43162416ea21585fcf3f5b.png.webp"
            alt=""
          />
        </Card>
        <Card className="py-0">
          <img
            src="	https://salt.tikicdn.com/cache/w1170/ts/brickv2og/b7/55/a1/dd22188f93c75d66efc03b7055a5e031.jpg.webp"
            alt=""
          />
          <Card className="bg-[#ffd0dc]">
          <div className="homePageFifthCardDiv">
       
          <div>
            {/* <CountdownTimer  /> */}
            <CountdownTimer targetDate2={"2022-10-25 22:00:00"}/>           
          </div>
        </div>
            <ProductSlider />
          </Card>
        </Card>
      </div>
    </div>
  );
}
