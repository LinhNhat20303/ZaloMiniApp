import React, { useEffect, useState } from "react";
import {
  Page,
  Card,
  Button,
  Tabbar,
  Link,
  Icon,
  useStore,
  NavLeft,
  NavRight,
  NavTitle,
  Navbar,
} from "zmp-framework/react";
import NavbarBack from "../../components/navbar-back";
import store from "../../store";
import { randomString } from "../../helper";

export default function ProductsDescription({ zmproute }) {
  const queries = zmproute.query;
  let order = useStore("getOrder");
  const prodcutsInformation = useStore("getProductDescriptionData");
  let product = prodcutsInformation.filter(
    (product) => product.id == queries.product_id
  )[0];

  function handleOnDeleteButton(){
    let product = prodcutsInformation.filter(
      (product) => product.id != queries.product_id
    )[0];
  
  }
  useEffect(() => {
    console.log(order);
  }, [order]);

  let [temp, setTemp] = useState(0);
  // khi nhan nut mua

  function buyProducts(product_id) {
  
    // Function mua san pham
    order.buy_time = new Date();
    // lay thoi gian luc bat dau su kien

      // loc danh sach sp da mua dung array.filter
      if(order.product_list.filter(pd=>pd.product_id==product_id).length == 0){
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
        order.product_list?.map(pd=>{
           if(pd.product_id == product_id) {
             //neu co obj co id = id cua product
               pd.quantity += 1
               // tang quantity 
           }
        })
      


    }
    temp = 0;
    // temp: so sp co trong gio hang
    order.total = 0;
    // dua bien dem ve 0 khi thuc hien vong lap
    order.product_list?.map((product) => {
      order.total += product.price*product.quantity;
      temp += 1;
      setTemp(temp);
      //tang mot don vi khi thuc hien funtion
    });
    store.dispatch('setOrder',order)
    console.log(order);
  }
  return (
    <Page>
      <Navbar>
        <NavLeft>
          <Link className="no-ripple" noLinkClass back>
            <Icon zmp="zi-arrow-left" />
          </Link>
        </NavLeft>
        <NavTitle>21143</NavTitle>
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

      <img src={product.carouselImg} alt="#" />

      <Card className="firstCardProducDescription">
        <h4>{product.label}</h4>
        <span> {product.price}</span>
        <Button onClick={()=>handleOnDeleteButton()} typeName="secondary" responsive >
        Submit
      </Button>
      </Card>

      <Card className="firstCardProducDescription">
        <h4> Mô Tả Sản Phẩm </h4>
        <img src={product.descriptionImg} alt="" />
        <p> {product.description} </p>
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
      <Card className="customerVoting" inset>
        <span>Khach Hang Danh Gia</span>
        <div className="Wrapper">
          <div>
            <h1>4.8</h1>
          </div>
          <div className="Icon">
            <Icon zmp="zi-star-solid"></Icon>
            <Icon zmp="zi-star-solid"></Icon>
            <Icon zmp="zi-star-solid"></Icon>
            <Icon zmp="zi-star-solid"></Icon>
            <Icon zmp="zi-star-solid"></Icon>
          </div>
          <div className="voting">
            <p>418 voting</p>
          </div>
        </div>
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
