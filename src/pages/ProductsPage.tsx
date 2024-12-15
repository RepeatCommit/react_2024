import React, {useEffect, useState} from 'react';
import PaginationComponent from "../components/PaginationComponent";
import {apiService} from "../services/api.service";
import {useSearchParams} from "react-router-dom";
import ProductsComponent from "../components/ProductsComponent";
import {IProduct} from "../models/IProduct";

const ProductsPage = () => {

    const[query, setQuery] = useSearchParams({page: '1'});
    const [products, setProducts] = useState<IProduct[]>([]);


    useEffect(() => {
        const page = query.get('page');
        console.log(page)

        if(page) {
            apiService.products.getAll(+page).then(value => setProducts(value.products));
        }




    }, [query]);



    return (
        <div>
            <ProductsComponent products={products}/>
            <PaginationComponent />
        </div>
    );
};

export default ProductsPage;