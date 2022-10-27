import React, { useEffect, useState } from "react";
import {
  Page,
  Card,
  Icon,
  useStore,
  Grid,
  GridItem,
  Tabbar,
  Button,
  zmp
} from "zmp-framework/react";
import NavbarBack from "../../components/navbar-back";
import store from "../../store";
import { randomString } from "../../helper";

export default function ProductsDescriptionFromSubCate({ zmproute }) {
  const queries = zmproute.query;
  // set quries để filter cho hai trang cùng id
  const descriptionFromSubCate = useStore("getProductsStyleSubCate");
  // sử dụng store để lấy danh sách sản phẩm 
  let product = descriptionFromSubCate.filter(
    (product) => product.id == queries.id
  )[0];
  // filtered
  function trimText(str, wordCount) {
    var strArray = str.split(" ");
    var subArray = strArray.slice(0, wordCount);
    var result = subArray.join(" ");
    return result + "...";
  }
  // hàm rút gọn mô tả thành ... với tham số đầu vào là trimText(đoạn muốn rút gọn, số chữ muốn rút gọn thành)
  // Function khi nhấn nút mua 

  function buyProducts(id){
    console.log(id);
    
  }
  return (
    <Page>
      <NavbarBack />
      <Card className="firstCardProducDescription">
        <img src={product.imageSrc} alt="" />
        <h1>{product.price}</h1>
        <h4>{product.label}</h4>
        <div className="flex votingStar">
          <p className="star">
            <Icon zmp="zi-star-solid"></Icon>
            <Icon zmp="zi-star-solid"></Icon>
            <Icon zmp="zi-star-solid"></Icon>
            <Icon zmp="zi-star-solid"></Icon>
            <Icon zmp="zi-star-solid"></Icon>
          </p>
          <p className="starText">2591 | Đã bán 5000+</p>
        </div>
        <p>{product.description}</p>
      </Card>
      <Card className="firstCardProducDescription ">
        <text> Customer Voting: </text>
        <div className="flex customerVoting">
          <h1>4.8</h1>
          <p className="star">
            <Icon zmp="zi-star-solid"></Icon>
            <Icon zmp="zi-star-solid"></Icon>
            <Icon zmp="zi-star-solid"></Icon>
            <Icon zmp="zi-star-solid"></Icon>
            <Icon zmp="zi-star-solid"></Icon>
          </p>
          <p> 2589 vote </p>
        </div>
      </Card>
      <Card className="secondCardProductDescription">
        <Grid noBorder columns={2}>
          {descriptionFromSubCate.map((suggestionItem, index) => {
            return (
              <GridItem key={`slide-${index}`}  onClick={()=> zmp.views.main.router.navigate({path:"/tableContent/product_description_from_sub_cate",query:{id:suggestionItem.id}})}>
                <img src={suggestionItem.imageSrc} />
                <text>{suggestionItem.price}</text>
                <text>{trimText(suggestionItem.label, 5)}</text>
              </GridItem>
            );
          })}
        </Grid>
      </Card>
      <Card className="firstCardProducDescription">
        <Card inset>
          <div className="Wrapper">
            <img
              src="https://salt.tikicdn.com/ts/upload/72/5e/10/8c1938c984cbd6cf2b73731d94ff01bf.png"
              alt=""
            />
            <p>Trước 23:59 hôm nay</p>
          </div>
        </Card>
      </Card>
      <Tabbar className="tabbar" bottom>
        <Button
          className="filter-button"
          typeName="destructive"
          responsive
          large
          onClick={()=>buyProducts("")}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          MUA NGAY
        </Button>
      </Tabbar>
    </Page>
  );
}
