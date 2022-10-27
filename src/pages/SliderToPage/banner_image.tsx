import React, { useEffect, useState } from "react";
import { Card, Page, Link, Icon } from "zmp-framework/react";
import CountdownTimer from "../../components/CountdownTimer";
import NavbarBack from "../../components/navbar-back";

export default function BannerImage() {
  return (
    <div className="page h-full overflow-scroll ">
      <Link
        className="no-ripple absolute top-[10px] left-[10px] "
        noLinkClass
        back
      >
        <Icon zmp="zi-arrow-left" className="text-white" />
      </Link>
      <div className="styles__InfoAstraView">
        <div className=" cardInBannerImage  absolute m-[16px] h-auto w-11/12 top-[195px] left-0">
          {/* content */}
          <div className="inlayLogo"></div>
          <div className="upper flex">
            <div className="statistic-contain  ">
              <div className="statistic-price">
                <div className="">
                  <div className="tiltle text-[12px] text-white m-0">
                    GIA ASTRA HIEN TAI
                  </div>
                  <span
                    className="price text-[#f16f5b]"
                    style={{ color: "rgb(255, 159, 65)" }}
                  >
                    <b className="text-white mr-[3px]">1 Astra =</b>
                    "325 xu"
                  </span>
                </div>
              </div>
            </div>
            <div className="chart ml-[30px]">
              <svg viewBox="0 0 82 42" className="w-full h-[42px]">
                <polyline
                  fill="none"
                  stroke="#1a94ff"
                  strokeWidth={2}
                  points="3,30.6 4.9,24.2 6.800000000000001,30.6 8.7,30.6 10.600000000000001,11.399999999999999 12.5,24.2 14.4,37 16.299999999999997,37 18.200000000000003,17.8 20.1,17.8 22,37 23.900000000000002,24.2 25.8,24.2 27.7,30.6 29.599999999999998,30.6 31.5,30.6 33.400000000000006,17.8 35.3,24.2 37.2,24.2 39.1,30.6 41,24.2 42.9,30.6 44.800000000000004,17.8 46.699999999999996,30.6 48.6,24.2 50.5,17.8 52.4,24.2 54.300000000000004,17.8 56.199999999999996,11.399999999999999 58.1,17.8 60,17.8 61.9,17.8 63.800000000000004,24.2 65.69999999999999,24.2 67.6,11.399999999999999 69.5,24.2 71.4,24.2 73.3,24.2 75.2,24.2 77.1,5"
                ></polyline>
              </svg>
            </div>
            <div className="statistic-percent ml-[10px]">
              <div className="title text-[11px] text-white">Thay doi 24h</div>
              <div className="percent bg-[#ff9f41]">0%</div>
            </div>
          </div>
          <div className="line"></div>
          <div className="total">
            <div className="point"></div>
            <span>
              Tổng Astra trao đổi trên sàn hôm nay:
              <b>314.291</b>
            </span>
          </div>
        </div>
        <img
          src="https://salt.tikicdn.com/cache/w400/ts/ta/e3/17/af/3928aa5d96bc97247e20414dcf9ce904.png"
          alt="#"
        />
        <div>
          <img
            className="absolute h-auto w-full top-[90px] left-0 object-cover "
            src="	https://salt.tikicdn.com/cache/w400/ts/ta/fe/e8/50/e8b01b16e65999170f51a2a113a42865.png.webp"
            alt=""
          />
        </div>
      </div>
      <div className="object">
        <div className="item flex mt-[85px]">
          <img
            src="https://salt.tikicdn.com/ts/ta/5d/ae/dc/eb6b7149785769888024c290a5974ef7.png"
            alt=""
            className="left_image"
          />
          <div>
            <p className="text">
              <b>Mua hàng thưởng điểm Astra cho 99% sản phẩm trên Tiki,</b>"
              hạng thành viên càng cao thưởng càng nhiều"
            </p>
          </div>
        </div>
        <div className="item flex">
          <img
            src="https://salt.tikicdn.com/ts/ta/76/a5/17/ecc0bb6d894550fc7c5129e0e3088872.png"
            alt=""
            className="left_image"
          />
          <div>
            <p className="text">
              <b>Nhận ngay gói mã giảm giá và freeship đến 900k</b>" khi đăng ký
              gói thành viên cao cấp"
            </p>
          </div>
        </div>
        <div className="item flex">
          <img
            src="https://salt.tikicdn.com/ts/ta/27/43/a6/b56de747fa23cf9999f8369c7d910fd0.png"
            alt=""
            className="left_image"
          />
          <div>
            <p className="text">
              <b>
                Dùng Astra đổi thêm mã giảm giá, gửi tiết kiệm Heo Vàng Astra
              </b>
              " và vô số ưu đãi khác"
            </p>
          </div>
        </div>
        <div className="item flex">
          <img
            src="https://salt.tikicdn.com/ts/ta/42/8c/75/43d013b70bd4b497006c057793a258a2.png"
            alt=""
            className="left_image"
          />
          <div>
            <p className="text">
              <b>Điểm thưởng có thể có lời</b>
              "khi đổi Astra ↔ TikiXu ở sàn Tiki Exchange"
            </p>
          </div>
        </div>
        <button
          type="button"
          className="my-2 inline-block px-6 py-2.5 bg-[#6f55ed] text-white font-medium text-xs uppercase rounded shadow-md hover:bg-[#6f57ef] hover:shadow-lg focus:bg-[#6f57ef] focus:shadow-lg  focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Đổi gói thành viên ngay
        </button>
      </div>
      <div className="image&descrip">
        <div className="image relative ">
          <img
            className="w-full absolute top-0 left-0 object-cover"
            src="https://salt.tikicdn.com/cache/w400/ts/ta/26/d9/07/361581cb5a1c2bdc997c0c32dc0ca6ac.png.webp"
            alt=""
          />
          <div className="descrip absolute top-[200px] px-[5px] text-white">
            <span className="text-[28px] my-[16px] ">
              Ra mắt gói thành viên Astra Rewards
            </span>
            <div>
              <p>
                Astra Rewards là chương trình ưu đãi dành cho mọi khách hàng
                Tiki với điểm thưởng Astra (ASA). Mua sắm là thưởng điểm, giá
                trị đơn hàng càng cao thưởng điểm ASA càng nhiều.
              </p>
              <p>
                Đặc biệt hơn, bạn có thể dùng ngay điểm thưởng Astra để nâng cấp
                từ hạng Thành Viên cơ bản lên gói Đồng, Bạc, Vàng & Astranium,
                để tận hưởng các đặc quyền hấp dẫn như: Thưởng Astra cao hơn khi
                mua sắm, nhận Gói mã ưu đãi giá trị, gửi tiết kiệm Heo Vàng
                Astra với lãi khủng 20%, và hàng ngàn ưu đãi khác cho mỗi hạng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
