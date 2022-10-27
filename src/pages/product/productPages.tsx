import React, { useEffect } from "react";
import {
  Card,
  Page,
  Box,
  List,
  Swiper,
  SwiperSlide,
  Navbar,
  Tabbar,
  Link,

  zmp,
  useStore,
} from "zmp-framework/react";
import NavbarBack from "../../components/navbar-back";
import CountdownTimer from "../../components/CountdownTimer";
const dataFirstSlider = [
  "https://salt.tikicdn.com/cache/w750/ts/banner/bd/7e/44/e3953927880a02a85cf1f0f6c34d437d.png.webp",
  "https://salt.tikicdn.com/cache/w750/ts/banner/40/77/b2/c78c5363ddfecf88c4dea91f5d789ac5.jpg.webp",
  "https://salt.tikicdn.com/cache/w750/ts/banner/1c/be/29/bc1092922f8d53134918a949f7f79682.png",
];
export default function productPages() {
  const productDescriptionData = useStore('getProductDescriptionData')
useEffect(()=>{
  console.log(productDescriptionData);
  
},[])
  return (
    
    <Page>
       

      <div className="tagItem">
        <div slot="before-inner" className="tagItem1">
          <div>
            {" "}
            <img
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

      <Navbar>
        
        <div className="navbar">
          <div className="navbar-bg"></div>
          <div>Before</div>
          <div className="navbar-inner p-0 timer">
            <div className="setTime">
              <span>Ket thuc sau </span>
              <div>
                <CountdownTimer
                  className="Time"
                  targetDate2={"2022-10-05 22:00:00"}
                />
              </div>
            </div>
            <div className="stop1">
              <h1>16:00</h1>
              <span> Up comming...</span>
            </div>
            <div className="stop2">
              <h1>22:00</h1>
              <span> Up comming...</span>
            </div>
          </div>
        </div>
      </Navbar>
<NavbarBack
        title="Mô Tả Sản Phẩm"
        linkRight="/form"
        labelRight="Edit"
      />
      
      <Card className="mx-2 py-2">
        <Swiper
          navigation
          speed={400}
          loop={true}
          slidesPerView="auto"
          spaceBetween={50}
          onSlideChange={(sw) => {
            console.log("activeIndex: ", sw.activeIndex);
          }}
        >
          {dataFirstSlider.map((slider, index) => {
            return (
              <SwiperSlide key={`product-${index}`}>
                <img className="rounded" src={slider} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Card>
      <List className="m-0 productPagesList ">
        <Card className="p-0">
          <ul>
            {productDescriptionData.map((item, index) => (
              <li onClick={()=> zmp.views.main.router.navigate( {path:"/product/productDescription", query:{product_id: item.id}})} >
                <div className="wrapper"  key={index} >
                  <div  className="mb-3 element1" >
                    <img src={item.descriptionImg} alt="#" />
                  </div>
                  <div   className="element2  mt-3 ml-3">
                    <div className="mb-2">
                      <h3>{item.label}</h3>
                    </div>
                    <div className="m-0 priceTag ">{item.price}</div>
                    <div className="m-0 line-through ">{item.old_price}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </List>
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
