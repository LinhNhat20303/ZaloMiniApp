import React, { useEffect, useState } from 'react';
import {  Swiper, SwiperSlide, zmp, useStore } from 'zmp-framework/react';
import { formatCurrency } from '../helper';

export default function ProductSlider() {
    const campaignSlide = useStore("getCarouselContainerData")
    const products = useStore('getSubCategoryItem')
    return (

        <Swiper slidesPerView={4} spaceBetween={1}> {products.map((product, index) => {
            return (
                <SwiperSlide key={`product-${index}`} >
                    <div onClick={() =>
                  zmp.views.main.router.navigate({
                    path: "/tableContent/product_view_from_sub_cate",
                    query: { id: product.id },
                  })} 
               /*  { <div onClick={()=>{
                    zmp.views.main.router.navigate("/product/productPages")
                 }} }*/
                  className=" w-25 ml-2" >
                        <div key={product.id} className="bg-transparent relative group "  >
                    
                            <div className="w-full rounded-md overflow-hidden ">
                                <img
                                    src={product.imgSrc}
                                />
                            </div>
                            <div  className=" relativeInfor mt-2 flex justify-between">
                                <p className='deals__price'>{product.label}</p>
                         
                            </div>
                        </div></div>
                </SwiperSlide>
            )
        })}</Swiper>

    )
};



