import React, { useState, useEffect } from "react";

import {
  Page,
  Navbar,
  Card,
  useStore,
  Link,
  Tabbar,
  Tabs,
  Tab,
  Swiper,
  SwiperSlide,
  Icon,
  Box,
} from "zmp-framework/react";

const names = [
  "Zalo Developer",
  "Zalo Mini App",
  "Bao moi",
  "Zing News",
  "Zing mp3",
];
import NavbarBack from "../components/navbar-back";
const avatars = ["ZD", "ZP", "BM", "ZN", "Z", "VNG", "AB", "XM"];

export default () => {
  const products = useStore("getSubCategoryItem");
  return (
    <Page>
      <Navbar backLink title="Luot"></Navbar>
      <Tabbar top>
        {/* slidesPerView={4} spaceBetween={1} */}

        <Swiper slidesPerView={4} spaceBetween={1}>
          <SwiperSlide>
            <Link tabLink="#tab-1" tabLinkActive>
              Tất cả
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link tabLink="#tab-2">Bỉm sữa</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link tabLink="#tab-3">Cộng Đồng Xe</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link tabLink="#tab-4"> Công Nghệ</Link>
          </SwiperSlide>
        </Swiper>
      </Tabbar>
      <Tabs>
        <Tab
          id="tab-1"
          className="page-content p-0 my-[5px]"
          tabActive
        >
          <Card className="swipeCard  bg-white  ">
            <div className="wrapper">
              <div className="infor flex">
                <img
                  className="w-1/6"
                  src="https://vcdn.tikicdn.com/ts/seller/e8/09/c9/d7ba4998e3f8db0139e9864134770b8a.jpg?date=2022-10-23T06:50"
                  alt=""
                />
                <div className="nameCard ml-[7px] ">
                  <p className="font-bold mt-[13px] mb-0 ">Hồng Hạnh Mobile</p>
                  <div className="time flex ">
                    <p className="text-[#979797] text-[12px] my-0 ">Nhà bán </p>
                    <p className="text-[#979797] text-[12px] my-0 ml-[4px]">
                      10:45 18/10
                    </p>
                  </div>
                </div>
                <div className="flex pl-[39px] space-x-2  items-center  ">
                  <button
                    type="button"
                    className="bg-blue-600 py-1 px-1 text-white font-medium text-s  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    FOLLOW
                  </button>
                </div>
              </div>
              <div className="content"></div>
            </div>
            <div className="content mt-[4px]">
              <span>
                💰 DEAL HOÀNH TRÁNG - NÂNG CẤP 'DẾ' CHO NÀNG 💐 📱 GHÉ HỒNG HẠNH
                MOBILE - NHANH TAY CHỐT ĐƠN NGAY 🔷 Mua HÀNG CHÍNH HÃNG
              </span>
              <img
                className="rounded"
                src="https://salt.tikicdn.com/cache/492x492/ts/social/d2/c8/da/3605b5cb9c5a6784d0ac0afa7db27ff3.jpg.webp?h=960&w=960"
                alt=""
              />
              <Swiper slidesPerView={5} spaceBetween={2}>
                {" "}
                {products.map((product, index) => {
                  return (
                    <SwiperSlide className="pb-[5px]" key={`product-${index}`}>
                      <div className=" w-20 ml-2">
                        <div
                          key={product.id}
                          className="bg-transparent relative group "
                        >
                          <div className="w-full rounded-md overflow-hidden ">
                            <img src={product.imgSrc} />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="react mx-[10px] my-[10px] ">
            <div className="flex">
            <div className="flex ">
                <img
                  src="https://tiniapp.tikicdn.com/resources/apps/social/like.svg"
                  alt=""
                />
                <div className="font-bold text-[12px] ml-[5px] mt-[4px] text-[#a4a7b1]">1</div>
              </div>
              <div className="flex pl-[20px] ">
                <img
                  src="	https://tiniapp.tikicdn.com/resources/apps/social/comment.svg"
                  alt=""
                />
                <div className="font-bold text-[12px] ml-[5px] mt-[4px] text-[#a4a7b1]">0</div>
              </div>
              <div className="flex pl-[20px]">
                <img
                  src="https://tiniapp.tikicdn.com/resources/apps/social/see.svg"
                  alt=""
                />
                <div className="font-bold text-[12px] ml-[5px] mt-[4px] text-[#a4a7b1]">6950</div>
              </div>
            </div>
            </div>
          </Card>
        </Tab>
        <Tab id="tab-2" className="page-content">
          <Card>
            <p>Tab 2 content</p>
          </Card>
        </Tab>
        <Tab id="tab-3" className="page-content">
          <Card>
            <p>Tab 3 content</p>
          </Card>
        </Tab>
        <Tab id="tab-4" className="page-content">
          <Card>
            <p>Tab 4 content</p>
          </Card>
        </Tab>
      </Tabs>
    </Page>
  );
};
