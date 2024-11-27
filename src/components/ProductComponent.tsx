import React, {FC} from 'react';
import {IProduct} from "../models/IProduct";


type TypeProps = {
    item: IProduct
}

const ProductComponent:FC<TypeProps> = ({item}) => {
    return (
        <ul>
            <li>{item.title}</li>
            <li>{item.category}</li>
            <li>{item.price}</li>

        </ul>
    );
};

export default ProductComponent;