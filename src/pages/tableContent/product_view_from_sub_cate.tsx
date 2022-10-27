import React, { useEffect } from "react";
import {
  Card,
  Page,
  Box,
  List,
  Icon,
  Tabbar,
  Link,
  zmp,
  useStore,
  Swiper,
  SwiperSlide,
} from "zmp-framework/react";
import CountdownTimer from "../../components/CountdownTimer";
import NavbarBack from "../../components/navbar-back";

export default function subCategoryProductView({ zmproute }) {
  const campaignSlide = useStore("getCarouselContainerData");
  const queries = zmproute.query;
  const subCategoryProducts = useStore("getProductsStyleSubCate");
  let product = subCategoryProducts.filter(
    (product) => product.sub_category_id == queries.id
  );
  useEffect(() => {
    console.log(queries.id);
    console.log(product);
  }, []);
  return (
    <Page>
      <div className="headerDealhot relative ">
        <Link
          className="no-ripple absolute top-[10px] left-[10px] "
          noLinkClass
          back
        >
          <Icon zmp="zi-arrow-left" className="text-white" />
        </Link>
        <div className="saleTag flex absolute top-[18px] left-1/3">
          <img
            src="	https://frontend.tikicdn.com/_mobile-next/static/img/giasoc-white.svg"
            alt=""
          />
          <img
            src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg"
            alt=""
          />
          <img
            src="https://frontend.tikicdn.com/_mobile-next/static/img/homnay-white.svg"
            alt=""
          />
        </div>
        <div className=" absolute flex flex-col items-center justify-center top-[57px] left-[155px]">
          <div>
            <span className="text-white text-[10px] ml-[9px]">
              Kết thúc sau{" "}
            </span>
            <CountdownTimer
              className="Time"
              targetDate2={"2022-11-30 22:00:00"}
            />
          </div>
          <div className="styles__TabIndicator "></div>
        </div>
        <div className="tagItem absolute bottom-[4px]">
          <div slot="before-inner" className="tagItem1">
            <div>
              <div></div>
              <img
                className=""
                src="https://salt.tikicdn.com/cache/120x120/ts/tmp/e7/cf/b2/42722aa968e5d7a6ae3afe90bc9ea8b3.png.webp"
                alt=""
              />
            </div>
            <div className="text"> Tiki chon</div>
          </div>
          <div className="tagItem2">
            <div>
              {" "}
              <img
                src="https://salt.tikicdn.com/cache/120x120/ts/sellercenterFE/93/b3/9f/6a77d8f4f0d907769eb0626b3e2171de.png.webp"
                alt=""
              />
            </div>
            <div className="text">Giao hang</div>
          </div>
        </div>
        <img
          className="mt-[-10px] h-[80%]"
          src="https://salt.tikicdn.com/ts/brickv2og/70/97/43/b8c44bf5c9c46b19c0f28fe2f7c0398a.png"
          alt=""
        />
      </div>
      <div className="mx-[5px] py-[4px] carousel-item">
        <Swiper
          autoplay={true}
          loopedSlides={4}
          slidesPerView="auto"
          loop={true}
          speed={1000}
          spaceBetween={50}
          onSlideChange={(sw) => {
            console.log("activeIndex: ", sw.activeIndex);
          }}
        >
          {" "}
          {campaignSlide.map((slide, index) => {
            return (
              <SwiperSlide key={`slide-${index}`}>
                <img className="mx-[px] rounded" src={slide} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flash-deal-infinite-scroll  mx-[5px]">
        <List className="m-0 productPagesList ">
          <Card className="p-0 ">
            <ul>
              {product.map((subCateProduct, index) => (
                <li
                className="rounded"
                  key={index}
                  onClick={() =>
                    zmp.views.main.router.navigate({
                      path: "/tableContent/product_description_from_sub_cate",
                      query: { id: subCateProduct.id },
                    })
                  }
                >
                  <div className="wrapper">
                    <div className="mb-3 element1">
                      <img src={subCateProduct.imageSrc} alt="#" />
                    </div>
                    <div className="element2  mt-3 ml-3">
                      <div className="labelSubCate">
                        <h5>{subCateProduct.label}</h5>
                      </div>
                      <div className="m-0 priceTag ">
                        {subCateProduct.price}
                      </div>
                      <div className="m-0 line-through ">
                        {subCateProduct.old_price}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </List>
      </div>
      <Tabbar className="tabbar" bottom>
        <Link className="boostItem" tabLink="#tab-1" tabLinkActive>
          <img
            className="boostIcon"
            src="	https://salt.tikicdn.com/ts/sellercenterFE/59/5c/a3/0c45e41a47f6642844bab44b73aea08a.png"
            alt=""
          />
          <p>Trang Chủ</p>
        </Link>
        <Link className="boostItem">
          <img
            className="boostIcon"
            src="		https://salt.tikicdn.com/ts/sellercenterFE/d4/0c/11/a5b4eb5224b7ff926dcdd872c0a68cd0.png"
            alt=""
          />
          <p> Danh Mục</p>
        </Link>
        <Link className="boostItem">
          <img
            className="boostIcon"
            src="	https://salt.tikicdn.com/ts/sellercenterFE/5d/30/67/cc3d054b5b60b32fc02f6f8e68320355.png"
            alt=""
          />
          <p> Lướt</p>
        </Link>
      </Tabbar>
    </Page>
  );
}
