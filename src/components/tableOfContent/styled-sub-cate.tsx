import React, { useEffect, useState, useReducer } from "react";

import {
  useStore,
  Tab,
  Box,
  Card,
  Grid,
  GridItem,
  Icon,
  zmp,
} from "zmp-framework/react";

export default function TableOfContentRight() {
  const [styleSubCate, setStyleSubCate] = useState([]);
  const productsElementClone = useStore("getStyleSubCate");
  const subCategoryItem = useStore("getSubCategoryItem");
  const familySelected = useStore("getFamilySelected");

  let [productsElementFilter, setProductsElementFilter] = useState([]);
  useEffect(() => {
    if (familySelected.length === 0) {
      productsElementFilter = subCategoryItem;
    } else {
      productsElementFilter = subCategoryItem.filter(
        (subCategoryProduct) =>
          subCategoryProduct.category_id == familySelected[0]
      );
    }
    setProductsElementFilter(productsElementFilter);
  }, [familySelected]);

  useEffect(() => {
    setStyleSubCate(subCategoryItem);
  }, [subCategoryItem]);
  return (
    <Card className="rightCol bg-[#eeeeee] p-1">
      <div className="bg-white pb-[32px] rounded-md">
      <Grid noBorder columns={3}>
        {productsElementFilter.map((subCategoryProduct, index) => {
          return (
            <GridItem key={`product-${index}`}>
              <div
                onClick={() =>
                  zmp.views.main.router.navigate({
                    path: "/tableContent/product_view_from_sub_cate",
                    query: { id: subCategoryProduct.id },
                  })
                }
              >
                <div key={index}>
                  <img src={subCategoryProduct.imgSrc} alt="" />
                </div>
                <div>
                  <p className="text-[12px]">{subCategoryProduct.label}</p>
                </div>
              </div>
            </GridItem>
          );
        })}
      </Grid>
      </div>
    </Card>
  );
}
