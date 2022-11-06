import React, { useEffect, useState } from "react";
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
  Button,
} from "zmp-framework/react";
import AppItems from "../../../components/app-items";
import CountdownTimer from "../../../components/CountdownTimer";
import NavbarBack from "../../../components/navbar-back";
import { showStringLength } from "../../../helper";
import store from "../../../store";
import api from "zmp-sdk";


export default function cloneProductsList() {


  const  cloneProductsList = useStore("getProdcutsInformationData");
  const [ newElements, setNewElements] = useState(cloneProductsList);
  function del(id){
    let newProductList = newElements.filter((item)=> item.id!=id)
    setNewElements(newProductList)
    store.dispatch("setProductsStyleSubCate",newProductList );
  }
 
 
  return (
    <Page>
        <NavbarBack/>
        <Button
                          onClick={() =>zmp.views.main.router.navigate("/product/CloneCRUDProduct/formCreateProduct")}
                          typeName="primary"
                          large
                          className="ml-2 my-2 "
                        >
                          Thêm Sản Phẩm
                        </Button>
      <div className="flash-deal-infinite-scroll mb-[5px]">
        <List className="m-0 productPagesList ">
          <Card className="p-0 ">
            <ul>
              {newElements.map((subCateProduct, index) => (
                <li
                  className="rounded mx-2"
                  key={index}
                //   onClick={() =>
                //     zmp.views.main.router.navigate({
                //       path: "/tableContent/product_description_from_sub_cate",
                //       query: { id: subCateProduct.id },
                //     })
                //   }
                >
                  <div className="wrapper">
                    <div className="w-[30%] p-1">
                      <img
                        className="w-[80%]"
                        src={subCateProduct.imageSrc}
                        alt="#"
                      />
                    </div>
                    <div className="w-full">
                      <div className="labelSubCate ">
                        {showStringLength(subCateProduct.name, 28)}
                      </div>
                      <div className="flex justify-between">
                        <div className="m-0 text-[red]">
                          {subCateProduct.price}
                        </div>
                      <div className=" flex justify-end">
                      <Button
                          onClick={() => del(subCateProduct.id)}
                          typeName="destructive"
                          small
                          className="ml-4"
                        >
                          Delete
                        </Button>
                        <Button
                           onClick={() =>zmp.views.main.router.navigate({path:"/product/CRUDProducts", query: { id: subCateProduct.id }}) }
                          typeName="secondary"
                          small
                          className="ml-2"
                        >
                          Update
                        </Button>
                      </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </List>
      </div>
    </Page>
  );
}
