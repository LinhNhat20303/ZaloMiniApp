import React, { useState, useEffect } from "react";
import {
  Avatar,
  List,
  ListInput,
  Page,
  Input,
  useStore,
  Card,
  Box,
  Button,
  zmp,
} from "zmp-framework/react";
import NavbarBack from "../../../components/navbar-back";
import store from "../../../store";
import api from "zmp-sdk";

export default function CrudProducts() {
  
  const submitProduct = useStore("getProdcutsInformationData");
//   const handleOnSubmitForm = (e) =>{
//     e.preventDefault();
//     const data = zmp.form.convertToData("#fillProductForm")
//   }
function handleOnSubmitForm(){
    const newProduct = zmp.form.convertToData("#fillProductForm");
    try{
        newProduct.id = submitProduct.length + 1;
        submitProduct.push(newProduct);
        console.log(newProduct);
        store.dispatch("setProductsStyleSubCate", submitProduct);
        zmp.views.main.router.navigate("/");
    }catch (error) {
        alert("Submit fail");
      }
    
    
}

  return (
    <Page>
      <NavbarBack />
      <Card inset>
        <List
          style={{ listStyle: "none" }}
          form
          id="fillProductForm"
          noHairlines
          onSubmit={()=>handleOnSubmitForm()}
        >
          {/* text input */}
          <ListInput
            label="Tên Sản Phẩm"
            type="text"
            placeholder="Nhập tên Sản Phẩm"
            clearButton
            info="Sản Phẩm"
            name="name"
            required
            errorMessage="Invalid"
            validate
          ></ListInput>
          {/* number input */}
          <ListInput
            label="Giá Sản Phẩm"
            type="number"
            min={1}
            placeholder="nhập giá sản phẩm"
            clearButton
            info="giá sản phẩm"
            name="price"
            validate
            errorMessage="Invalid price, please try agian"
            required
          ></ListInput>
          {/* image */}
          <ListInput
            label="Hình ảnh sản phẩm"
            type="text"
            placeholder="link url sản phẩm "
            clearButton
            info="hình ảnh sản phẩm"
            name="imageSrc"
            validate
            required
          ></ListInput>
          {/* description*/}
          <ListInput
            label="Mô tả sản phẩm"
            type="text"
            placeholder="nhập mô tả sản phẩm"
            clearButton
            info="mô tả san phẩm"
            name="description"
            validate
            required
          ></ListInput>
          {/*select */}
          

          <Box>
            <Button
            //   onClick={() =>
            //     queries.id ? handleOnUpdateButton() : handleOnSubmitForm()
            //   }
            // onClick={() =>
            //      handleOnSubmitForm()
            //   }
            type="submit"
              typeName="secondary"
              responsive
            >
              Submit
            </Button>
          </Box>
        </List>
      </Card>
    </Page>
  );
}
