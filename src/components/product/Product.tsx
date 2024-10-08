import React, {FC} from 'react';
import {IProductModel} from "../models/IProductModel";




type TypeProps = {item: IProductModel}

const Product:FC<TypeProps> = ({item}) => {
    return (
        <ul>
            <li>{item.title}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
        </ul>
    );
};

export default Product;