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
  zmp,
  Navbar,
  NavLeft,
  Link,
  NavRight,
  NavTitle,
} from "zmp-framework/react";
import NavbarBack from "../../components/navbar-back";
import store from "../../store";
import { randomString } from "../../helper";
import api from "zmp-sdk";

export default function ProductsDescriptionFromSubCate({ zmproute }) {
  const queries = zmproute.query;
  // set quries để filter cho hai trang cùng id
  const order = useStore("getOrder");
 
 
  const descriptionFromSubCate = useStore("getProductsStyleSubCate");
  // sử dụng store để lấy danh sách sản phẩm
  let product = descriptionFromSubCate.filter(
    (product) => product.id == queries.id
  )[0];
 // delete button
  function deleteProduct() {
    let newProductList = descriptionFromSubCate.filter(
      (newProductList) => newProductList.id != queries.product_id
    );
  }

  // function updateProduct() {
  //   let dataform = zmp.form.convertToData("#form-data");
  //   let newProductList = descriptionFromSubCate.map((product, index) => {
  //     if (product.id == queries.id) {
  //       product.label = dataform.label;
  //     }
  //   });
  // }

  // filtered
  function trimText(str, wordCount) {
    var strArray = str.split(" ");
    var subArray = strArray.slice(0, wordCount);
    var result = subArray.join(" ");
    return result + "...";
  }
  // hàm rút gọn mô tả thành ... với tham số đầu vào là trimText(đoạn muốn rút gọn, số chữ muốn rút gọn thành)
  // Function khi nhấn nút mua

  let [temp, setTemp] = useState(0);
  // khi nhan nut mua

  function buyProducts(product_id) {
    // Function mua san pham
    order.buy_time = new Date();
    // lay thoi gian luc bat dau su kien

    // loc danh sach sp da mua dung array.filter
    if (
      order.product_list.filter((pd) => pd.product_id == product_id).length == 0
    ) {
      //neu ds loc ko co phan tu array.lenght == 0
      let other_new_buy_product = {
        product_id: product.id,
        quantity: 1,
        price: product.price,
      };
      //them sp vua mua
      order.product_list.push(other_new_buy_product);
    } else {
      //neu ds loc array.lenght > 0
      //tim trong product_list
      order.product_list?.map((pd) => {
        if (pd.product_id == product_id) {
          //neu co obj co id = id cua product
          pd.quantity += 1;
          // tang quantity
        }
      });
    }
    temp = 0;
    // temp: so sp co trong gio hang
    order.total = 0;
    // dua bien dem ve 0 khi thuc hien vong lap
    order.product_list?.map((product) => {
      order.total += product.price * product.quantity;
      temp += 1;
      setTemp(temp);
      //tang mot don vi khi thuc hien funtion
    });
    store.dispatch("setOrder", order);
   
  }
  // setStorage
  api.setStorage({
    data: {
      order: order,
    }
  });

  return (
    <Page>
      <Navbar>
        <NavLeft>
          <Link className="no-ripple" noLinkClass back>
            <Icon zmp="zi-arrow-left" />
          </Link>
        </NavLeft>
        <NavTitle></NavTitle>
        <NavRight>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
          >
            Cart
            <span className="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded ml-2">
              {temp}
            </span>
          </button>
        </NavRight>
      </Navbar>

      <Card className="firstCardProducDescription">
        <img src={product.imageSrc} alt="" />
        <div className="flex justify-between mx-[5px] items-center">
          <h1>{product.price}</h1>
          <Button
            className=""
            onClick={() => deleteProduct()}
            typeName="destructive"
            
          >
           Delete
          </Button>
        </div>
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
              <GridItem
                key={`slide-${index}`}
                onClick={() =>
                  zmp.views.main.router.navigate({
                    path: "/tableContent/product_description_from_sub_cate",
                    query: { id: suggestionItem.id },
                  })
                }
              >
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
          onClick={() => buyProducts(product.id)}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          MUA NGAY
        </Button>
      </Tabbar>
    </Page>
  );
}
