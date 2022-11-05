import React, { useEffect, useState } from "react";

import { useStore, Box, Tab,zmp } from "zmp-framework/react";
import store from "../../store";

export default function TableOfContentLeft() {
  const [styleSubCate, setStyleSubCate] = useState([]);
  const productsElement = useStore("getCategoryItem")
 
  useEffect(() => {
    setStyleSubCate(productsElement);
  }, [productsElement]);
   function Selected(id){
  store.dispatch("setFamilySelected",[id])
  }
  
   return (
    <Tab id="tab-2" className="page-content">
      <Box className="leftCol">
        {productsElement.map((product, index) => {
          return (
            <div key={`product-${index}`}>
              
              <div className="flex flex-col justify-center" onClick={()=>Selected(product.id)}  >
              <div>
              <img className="w-[45px] h-[45px]" src={product.ImageSrc} alt="#" />
              </div>
              <div>
            
                <p>{product.label}</p>
              </div>
              </div>
            </div>
          );
        })}
      </Box>
      
    </Tab>
  );
}
