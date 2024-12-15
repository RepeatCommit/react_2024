import React from 'react';
import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {


  const[query, setQuery] = useSearchParams({page: '1'});



    const onclickPrevHandler = () => {
        const page = query.get('page');
        if(page && +page > 0) {
            let currentPage = +page;
            currentPage--;
            setQuery({page:currentPage.toString()});

        }



    };

    const onclickNextHandler = () => {
       const page = query.get('page');
       if(page) {
           let currentPage = +page;
           currentPage++;
           setQuery({page:currentPage.toString()});

       }
     //todo something
    };






    return (
        <div>
            <button onClick={onclickPrevHandler}>prev</button>
            <button onClick={onclickNextHandler}>next</button>
        </div>
    );
};

export default PaginationComponent;