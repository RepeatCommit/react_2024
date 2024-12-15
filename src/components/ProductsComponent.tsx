import React, {FC} from 'react';
import {IProduct} from "../models/IProduct";

type ProductsProps = {

products: IProduct[]
}

const ProductsComponent:FC<ProductsProps> = ({products}) => {
    return (
        <div>

            {
                products.map((product) => {
                    return <div key={product.id}>

                        <p>{product.description}</p>
                    </div>
                })
            }
            
        </div>
    );
};

export default ProductsComponent;