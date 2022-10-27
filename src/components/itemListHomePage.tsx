import React, { useEffect, useState } from "react";
import {
  Card,
  Swiper,
  SwiperSlide,
  zmp,
  Box,
  useStore,
  Grid,
  GridItem,
  Tab,
  Tabs,
  Link
} from "zmp-framework/react";
import NavbarBack from "../components/navbar-back";
import { formatCurrency, showStringLength, trimText } from "../helper";

export default function ItemListHomePage() {
  const item = useStore("getNewItemSwiperHomePage");
  const item2 = useStore("getProductsStyleSubCate")
  const [tabSelected, setTabSelected] = useState(null)
  let [itemFiltered, setItemFiltered] = useState([])


  useEffect(()=>{
    itemFiltered= item2;
    setItemFiltered(itemFiltered)
  },[])
  
  useEffect(()=>{
    itemFiltered = []
      console.log(tabSelected);
      if( tabSelected == null ){
        itemFiltered= item2;
      } else {
        itemFiltered = item2.filter(i => i.tab_id == tabSelected)
      }
      setItemFiltered(itemFiltered)
  },[tabSelected])

  return (
   <div className="bg-white">
   <div className="sticky top-[60px] z-10">
     <Swiper className="bg-[#efefef]  " slidesPerView={4.6} spaceBetween={1}>
      {item.map((product, index) => {
        return (
        <SwiperSlide className="itemList bg-white rounded-lg ml-[1px] mb-[4px] " key={`product-${index}`}>
          <Link className="" tabLink={product.id}>
            <div
              onClick={() =>setTabSelected(product.id)}
              className="  tab w-[80px] flex flex-col shrink-0 p-[4px] item-center  "
            >
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-[40px] h-[40px] ml-[20px] "
                  />
                  <h3  className="text-sm my-[2px] text-[11px] text-center text-gray-700">
                      {product.label}
                    </h3>
            </div>
        </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
    </div>
     <Grid  columns={2} >
      {itemFiltered.map((suggestionItem,index)=>{
        return(
     
        <GridItem key={`product${index}`} className="py-0">
          <img src={suggestionItem.imageSrc} onClick={()=> zmp.views.main.router.navigate({path:"/tableContent/product_description_from_sub_cate",query:{id:suggestionItem.id}})} alt="" />
          <div className="w-full text-left">
          <div className="my-0 h-[40px] text-[10pt]">{showStringLength(suggestionItem.label,35)}</div>
          <h3 className="text-[13pt] my-1 font-semibold text-[red]">{formatCurrency(suggestionItem.price)} đ</h3>
          </div>
        </GridItem>

)})}
</Grid>

    
   </div>
  );
}
