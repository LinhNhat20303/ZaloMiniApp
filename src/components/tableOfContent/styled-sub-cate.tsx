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
    // <Card className="">
    //   <Grid noBorder columns={3}>
    //     {productsElementFilter.map((subCategoryProduct, index) => {
    //       return (
    //         <GridItem key={`product-${index}`}>
    //           <div
    //             onClick={() =>
    //               zmp.views.main.router.navigate({
    //                 path: "/tableContent/product_view_from_sub_cate",
    //                 query: { id: subCategoryProduct.id },
    //               })
    //             }
    //           >
    //             <div key={index}>
    //               <img src={subCategoryProduct.imgSrc} alt="" />
    //             </div>
    //             <div>
    //               <p>{subCategoryProduct.label}</p>
    //             </div>
    //           </div>
    //         </GridItem>
    //       );
    //     })}
    //   </Grid>
    // </Card>
    <div></div>
  );
}
