import React, {useState} from 'react';
import {IProduct} from "../models/IProduct";
import {loadAuthProducts, refresh} from "../services/api.services";
import {AxiosError} from "axios";

const AuthResourcesPage = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    return (
        <div>
         <div>
             <button onClick={async () =>{

             try {
              let responseProducts =  await loadAuthProducts();
              setProducts(responseProducts);

             }catch(er){
                 let error = er as AxiosError;
                 alert(error.message);
                await refresh()
             }


             }}>
                 show auth products
             </button>
         </div>
            {
                products.length > 0 &&
                <div>
                    {products.map(product => <div key={product.id}>{product.title}</div>)}
                </div>
                    }
        </div>
    );
};

export default AuthResourcesPage;