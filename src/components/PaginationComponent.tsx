import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

type PaginationProps = {flag:boolean};
const PaginationComponent:FC<PaginationProps> = ({flag}) => {

  const[query,setQuery]= useSearchParams({page:'1'});





   const onclickPrevSet = () => {
       const page = query.get('page');
       if (page && +page > 0) {
           let currentPage = +page;
           currentPage--;
           setQuery({page:currentPage.toString()});
       }
   };



    const onclickNextSet = () => {

        const page = query.get('page');
        if (page) {
          let currentPage = +page;
          currentPage++;
          setQuery({page:currentPage.toString()});
        }
    };


    return (
        <div>
            <button onClick={onclickPrevSet}>prev</button>
            <button onClick={onclickNextSet} disabled={flag}>next</button>
        </div>
    );
};

export default PaginationComponent;