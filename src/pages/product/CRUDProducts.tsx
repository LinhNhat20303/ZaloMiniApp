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
import NavbarBack from "../../components/navbar-back";
import store from "../../store";
import api from "zmp-sdk";

export default function CrudProducts({ zmproute }) {
  const optionView = useStore("getSubCategoryItem");
  const products = useStore("getProductsStyleSubCate");
  const submitProduct = useStore("getProductsStyleSubCate");
  const queries = zmproute.query;

  useEffect(() => {
  

    if (queries.id) {
      const item = submitProduct.filter((item) => item.id == queries.id)[0];
      // khi filter lay object thi sau cung phai co [0]
      zmp.form.fillFromData("#my-form", item);
    }
  }, []);

  const handleOnSubmitForm = () => {
    const newProduct = zmp.form.convertToData("#my-form");
    let isValid = false;
    if (
      !newProduct.label ||
      !newProduct.imageSrc ||
      !newProduct.price ||
      !newProduct.description
    ) {
      isValid = false;
    } else {
      isValid = true;
    }
    try {
      if (isValid) {
        newProduct.tab_id = "#tab-1";
        newProduct.id = submitProduct.length + 1;
        submitProduct.push(newProduct);
        store.dispatch("setProductsStyleSubCate", submitProduct);
        //setStorage
        //  store.dispatch("setProductsStyleSubCate",submitProduct);
        // setStorage
        api.setStorage({
          data: {
            storageProduct: submitProduct,
          },
          
        });
        zmp.views.main.router.navigate("/product/ItemListCRUD");
      } else {
        alert("thieu du lieu");
      }
    } catch (error) {
      alert("Submit fail");
    }
  };

  function handleOnUpdateButton() {
    const newProduct = zmp.form.convertToData("#my-form");
    let isValid = false;
    if (
      !newProduct.label ||
      !newProduct.imageSrc ||
      !newProduct.price ||
      !newProduct.description
    ) {
      isValid = false;
    } else {
      isValid = true;
    }
    try {
      if (isValid) {
        let newproductList = [];
        submitProduct.map((product) => {
          if (product.id == queries.id) {
            product = { ...product, ...newProduct };
          }
          newproductList.push(product);
        });
     
        store.dispatch("setProductsStyleSubCate", newproductList);
        //set Storage
        api.setStorage({
          data: {
            storageProduct: newproductList,
          },
          
        });
        zmp.views.main.router.navigate("/product/ItemListCRUD");
      } else {
        alert("thieu du lieu");
      }
    } catch (error) {
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
          id="my-form"
          noHairlines
          // onSubmit={()=>handleOnSubmitForm()}
        >
          {/* text input */}
          <ListInput
            label="T??n S???n Ph???m"
            type="text"
            placeholder="Nh???p t??n S???n Ph???m"
            clearButton
            info="S???n Ph???m"
            name="label"
            required
            errorMessage="Invalid"
            validate
          ></ListInput>
          {/* number input */}
          <ListInput
            label="Gi?? S???n Ph???m"
            type="number"
            min={1}
            placeholder="nh???p gi?? s???n ph???m"
            clearButton
            info="gi?? s???n ph???m"
            name="price"
            validate
            errorMessage="Invalid price, please try agian"
            required
          ></ListInput>
          {/* image */}
          <ListInput
            label="H??nh ???nh s???n ph???m"
            type="text"
            placeholder="link url s???n ph???m "
            clearButton
            info="h??nh ???nh s???n ph???m"
            name="imageSrc"
            validate
            required
          ></ListInput>
          {/* description*/}
          <ListInput
            label="M?? t??? s???n ph???m"
            type="text"
            placeholder="nh???p m?? t??? s???n ph???m"
            clearButton
            info="m?? t??? san ph???m"
            name="description"
            validate
            required
          ></ListInput>
          {/*select */}
          <ListInput
            label="Lo???i s???n ph???m"
            type="select"
            placeholder="Ch???n lo???i s???n ph???m"
            validate
            name="sub_category_id"
          >
            {optionView.map((option, index) => {
              return (
                <option key={`option${index}`} value={option.id}>
                  {option.label}
                </option>
              );
            })}
          </ListInput>

          <Box>
            <Button
              onClick={() =>
                queries.id ? handleOnUpdateButton() : handleOnSubmitForm()
              }
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
