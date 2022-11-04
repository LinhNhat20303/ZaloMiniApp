import React, { useEffect, useState } from "react";
import AboutPage from "../pages/about";
import { zmp, DatePicker } from "zmp-framework/react";
import {
  Card,
  useStore,
  SwiperSlide,
  Swiper,
  Input,
  Icon,
  Grid,
  GridItem,
  
} from "zmp-framework/react";
import ProductSlider from "../components/product-swipper";
import ItemListHomePage from "../components/itemListHomePage";
import CountdownTimer from "../components/CountdownTimer";

const HomeComponent = ({}) => {
  const campaignSlide = useStore("getCampainSlide");
  const programSlide = useStore("getProgramSlide");
  const quick_link_data = useStore("getQuickLinkData");
  const tini_app_data = useStore("getTiniAppData");
  const carousel = useStore("getCarouselHomePage");
  const categories = useStore("getCategoryItem")
  const [swipperAcitveLabel, setSwiperActiveLabel] = useState("");
 
  return (
    <div className="homePageReturn">
     <header className="mx-3">
     <div className="flex justify-between items-center py-[5px]">
      <div className="">  <img src="https://salt.tikicdn.com/ts/brickv2og/db/eb/7c/a926af0ba3dc2802148bfc39563180c2.png" alt="" /></div>
        <div className="logo"><img className="w-[40px] h-[27px]" src="https://salt.tikicdn.com/ts/upload/d4/ca/89/28d85ed27396c1beebad8a3fec18bfe4.png" alt="" /></div>
      <div className="rightCol flex">
        <img className="w-[26px] h-[26px]" src="	https://salt.tikicdn.com/ts/upload/c5/0b/06/88e5d7fa1a7cb51144fff2933e7269d9.png" alt="" />
        <img className="w-[24px] h-[24px] ml-[12px]" src="https://salt.tikicdn.com/ts/upload/70/44/6c/a5ac520d156fde81c08dda9c89afaf37.png" alt="" />
      </div>
      </div>
      <a href="#" className="searchInput">
        <img
          src="https://salt.tikicdn.com/ts/upload/34/62/0c/6ae13efaff83c66f810c4c63942cf6c0.png"
          alt="icon-search"
        />
        <input
          type="search"
          aria-label="search"
          className="search"
          placeholder="Bạn tìm gì hôm nay?"
          readOnly
        />
      </a>
     </header>
      <Card className="homePageSecondCard  mx-3 my-1">
        <Swiper
          id="tabConsole"
          autoplay={true}
          loopedSlides={4}
          slidesPerView="auto"
          loop={true}
          speed={300}
          spaceBetween={50}
          onSlideChange={(sw) => {
            
          }}
        >
          {" "}
          {programSlide.map((slide, index) => {
            return (
              <SwiperSlide key={`slide-${index}`}>
                <img
                  onClick={() =>
                    zmp.views.main.router.navigate(
                      "/SliderToPage/first_slider_home_page"
                    )
                  }
                  src={slide}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Card>
      <Card className="homePageSecondCard mx-3 my-2 ">
        <Swiper
          autoplay={true}
          loopedSlides={4}
          slidesPerView="auto"
          loop={true}
          speed={1000}
          spaceBetween={50}
          onSlideChange={(sw) => {
           
          }}
        >
          {" "}
          {campaignSlide.map((slide, index) => {
            return (
              <SwiperSlide key={`slide-${index}`}>
                <img
                  onClick={() =>
                    zmp.views.main.router.navigate("/SliderToPage/banner_image")
                  }
                  className="rounded-xl"
                  src={slide}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Card>
      <div className="home_quick">
        <div className="home_brand">
          <div className="style_home_brand">
            <a className="side_brand" href="#">
              <img
                src="https://salt.tikicdn.com/cache/w280/ts/banner/b6/96/b0/1ff2f76a59db4a5ee6b7d41b39f33fdc.png.webp"
                srcSet="https://salt.tikicdn.com/cache/w200/ts/banner/b6/96/b0/1ff2f76a59db4a5ee6b7d41b39f33fdc.png 1x, https://salt.tikicdn.com/cache/w280/ts/banner/b6/96/b0/1ff2f76a59db4a5ee6b7d41b39f33fdc.png 2x"
                alt=""
              />
            </a>
            <a className="center_brand">
              <picture className="webpimg-container">
                <source
                  type="image/webp"
                  srcSet="https://salt.tikicdn.com/cache/w400/ts/banner/41/06/89/2d9f532a0793add1fd01e74b91a67e00.png.webp 1x, https://salt.tikicdn.com/cache/w750/ts/banner/41/06/89/2d9f532a0793add1fd01e74b91a67e00.png.webp 2x"
                />
                <img
                  src="https://salt.tikicdn.com/cache/w750/ts/banner/41/06/89/2d9f532a0793add1fd01e74b91a67e00.png.webp"
                  alt=""
                />
              </picture>
            </a>
            <a href="" className="side_brand">
              <picture>
                <img
                  src="https://salt.tikicdn.com/ts/banner/cf/75/82/cb8a69ae78a9b1bbf8b5893dbc85678b.png"
                  srcSet="https://salt.tikicdn.com/cache/w200/ts/banner/cf/75/82/cb8a69ae78a9b1bbf8b5893dbc85678b.png 1x, https://salt.tikicdn.com/cache/w280/ts/banner/cf/75/82/cb8a69ae78a9b1bbf8b5893dbc85678b.png 2x"
                  alt=""
                />
              </picture>
            </a>
          </div>
        </div>

        <div className="quick_link">
          <div className="style_quick_link">
            <div className="style_row flex">
              {quick_link_data.map((icon, index) => {
                return (
                  <div className="item flex" key={`icon-${index}`}>
                    <picture className="webpimg-container">
                      <img src={icon.img} alt="" />
                    </picture>
                    <span>{icon.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="tini_app">
        <div className="style_tini_app">
          <div className="wrap_heading">
            <h2>Tiện Ích Của Tôi</h2>
            <span className="more_link">XEM THÊM</span>
          </div>
          <div className="style_row flex">
            {tini_app_data.map((icon, index) => {
              return (
                <div className="item flex" key={`icon-${index}`}>
                  <picture className="webpimg-container">
                    <img src={icon.img} alt="" />
                  </picture>
                  <span>{icon.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Card className="homePageFifthCard">
        <div className="header">
          <div className="header_inner ">
            <div className="saleTag flex ">
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg"
                alt=""
              />
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg"
                alt=""
              />
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg"
                alt=""
              />
            </div>
            <div className="flex  ">
              <CountdownTimer targetDate2={"2022-12-30 22:00:00"} />
              <img
                src="https://frontend.tikicdn.com/_mobile-next/static/img/iconsChevronRight.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <ProductSlider />
      </Card>
      <div className="StaticBanner bg-[#efefef] py-[8px] ">
        <div className="static_banner bg-white">
          <div className="header_static_banner">Hôm Nay Có Gì Hot</div>
          <div className="carousel">
            <Card className="carouselSlide mx-3 p-0 ">
              <div className="carousel-img">
                <Swiper
                  autoplay={true}
                  loopedSlides={3}
                  slidesPerView={1.1}
                  loop={true}
                  speed={500}
                  spaceBetween={4}
                  centeredSlides={true}
                  onSlideChange={(sw) => {
                    setSwiperActiveLabel(sw.slides[sw.activeIndex]?.innerText);
                  }}
                >
                  {" "}
                  {carousel.map((slide, index) => {
                    return (
                      <SwiperSlide className="pt-[2px]" key={`slide-${index}`}>
                        <img className="rounded-xl" src={slide.img} alt="" />
                        <div style={{ opacity: "0" }} className=" absolute">
                          {slide.label}
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <div className="text-[12px] text-center bg-[#e5f2ff] styleBannerCarousel">
                  {swipperAcitveLabel}
                </div>
              </div>
            </Card>
          </div>
          <div className="fearture_item">
            <div className="home_today">
              <div className="right_img pr-[2px]">
                <img
                  src="https://salt.tikicdn.com/cache/w400/ts/banner/60/70/a1/d7a72c05ba265ca1c8023dcf1424961f.png.webp"
                  alt=""
                />

                <div className="text-[12px] text-center bg-[#e5f2ff] styleBannerCarousel">
                Mua AIA Trúng "Táo"
                </div>
              </div>
            </div>
            <div className="home_today">
              <div className="left_img pl-[2px]">
                <img
                  src="	https://salt.tikicdn.com/cache/w400/ts/banner/2b/e4/a0/8054262159cf4401c5af45e06027fb73.png.webp"
                  alt=""
                />
                <div className="text-[12px] text-center bg-[#e5f2ff] styleBannerCarousel">
                  Chốt Đơn Giảm 50%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="FeaturedCategory bg-[#efefef] py-[8px] ">
       <div className="featured_categories bg-white">
       <div className="wrap_heading">
            <h2>Danh Mục Nổi Bật</h2>
            <span className="more_link">XEM THÊM</span>
          </div>
      <Swiper className="inner" slidesPerView={5} spaceBetween={1}>
        {categories.map((item,index)=>{
        return(
        <SwiperSlide key={`slide${index}`}>
        <div>
       <img src={item.ImageSrc} alt="" /> 
       <p className="text-[9px] text-center">{item.label}</p>
       </div>
       <div>
       <img src={item.ImageSrc} alt="" /> 
       <p className="text-[9px] text-center">{item.label}</p>
       </div>
         </SwiperSlide>
        )
      })}
        </Swiper>
        </div>
      </div>
      <div className="header-title pb-[5px] bg-[#efefef]">
      <div className="bg-white p-[12px]" >
       <span>
       Gợi Ý Hôm Nay
       </span>
      </div>
    </div>
      <ItemListHomePage />
    </div>
  );
};
export default HomeComponent;
