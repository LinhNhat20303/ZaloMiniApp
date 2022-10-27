import { any } from "prop-types";
import React, { useRef, useEffect, useState } from "react";

import {
  Page,
  Navbar,
  Card,
  Box,
  Icon,
  Link,
  Tab,
  Tabbar,
  Tabs,
  Sheet,
  zmp,
} from "zmp-framework/react";

import HomeComponent from "../components/home-page";
import TableOfContentRight from "../components/tableOfContent/styled-sub-cate";
import TableOfContentLeft from "../components/tableOfContent/styled-left-cate-list";
const HomePage = () => {
  const [customSheetOpened, setCustomSheetOpened] = useState(true);
  const sheet = useRef(null);
  const swipeRef = useRef(null);

  let [viewTableOfContent, setViewTableOfContent] = useState(false);

  const openCollapseStep = () => {
    if (swipeRef.current) {
      swipeRef.current.zmpSheet().open();
    }
  };

  useEffect(function () {}, [viewTableOfContent]);

  let [activeHome, setActiveHome] = useState(true);

  return (
    <Page noNavbar>
      {/* Top Navbar */}
      <Navbar
        backLink
        title={
          <img src="https://salt.tikicdn.com/ts/upload/d4/ca/89/28d85ed27396c1beebad8a3fec18bfe4.png"></img>
        }
      >
        <div className="flex space-x-2 justify-center">
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
          >
            Cart
            <span className="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded ml-2">
              7
            </span>
          </button>
        </div>
      </Navbar>

      {/* Page content */}
      <HomeComponent />

      <Tabs>
        <Tab id="tab-1" className="page-content" tabActive></Tab>
        <Tab id="tab-2" className="page-content">
          <Sheet
            ref={swipeRef}
            swipeToStep
            swipeToClose
            backdrop
            closeButton
            title="Danh Mục Sản Phẩm"
            className="demo-swipe-to-step-sheet"
            style={{ height: "95%" }}
          >
            <Box></Box>
            <div className="scroll">
              <div className="scrollPage" style={{ marginLeft: "25%" }}>
                <div className="px-2 scrollPageContent">
                  <TableOfContentRight />
                </div>
              </div>

              <div className="scrollPage" style={{ width: "25%" }}>
                <div className="scrollPageContent">
                  {<TableOfContentLeft />}
                </div>
              </div>
            </div>
          </Sheet>
        </Tab>
      </Tabs>

      <Tabbar className="tabbar" bottom>
        <Link tabLink="#tab-1" className="indexFirstLink" tabLinkActive>
        <div className="w-[20px] h-[20px]"> 
          <img  src="	https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/home.png" alt="" />
          </div>
          <p >Trang Chủ</p>
        </Link>
        <Link
          onClick={openCollapseStep}
          className="indexFirstLink"
          style={{ display: "flex", flexDirection: "column" }}
        >
         <div className="w-[20px] h-[20px]"> 
          <img  src="https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/cate.png" alt="" />
          </div>
          <p > Danh Mục</p>
        </Link>
        <Link className="indexFirstLink">
        <div onClick={() => zmp.view.main.router.navigate("/swipe")} className="w-[20px] h-[20px]"> 
          <img  src="https://salt.tikicdn.com/ts/upload/c3/9b/0e/1867ff54d9f4d07f3f7fe1a7f19a79ee.png" alt="" />
          </div>
          <p > Lướt</p>
        </Link>
        <Link className="indexFirstLink">
          {" "}
          <div onClick={() =>
              zmp.views.main.router.navigate("/chart/smartphoneMarket")
            } className="w-[20px] h-[20px]"> 
          <img  src="	https://salt.tikicdn.com/ts/upload/b6/cb/1d/34cbe52e6c2566c5033103c847a9d855.png" alt="" />
          </div>
          <p> Chart</p>
        </Link>
        <Link
          className="indexFirstLink"
          onClick={() => zmp.views.main.router.navigate("/user")}
        >
           <div className="w-[20px] h-[20px]"> 
          <img  src="https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/account.png" alt="" />
          </div>

          <p > Cá Nhân</p>
        </Link>
      </Tabbar>
 
    </Page>
  );
};

export default HomePage;
