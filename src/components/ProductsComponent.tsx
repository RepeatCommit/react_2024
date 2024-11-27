import React, {FC} from 'react';
import {IProduct} from "../models/IProduct";
import ProductComponent from "./ProductComponent";
import {productsList} from "../data";



const ProductsComponent:FC = () => {
   const products:IProduct[] =  productsList.products;
    return (
        <div>
            {
                products.map((product:IProduct) =>(<ProductComponent key={product.id} item={product}/>))
            }


        </div>
    );
};

export default ProductsComponent;