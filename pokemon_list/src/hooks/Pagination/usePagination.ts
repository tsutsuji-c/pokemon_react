/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

export const usePagination = () => {

  const history = useHistory();
 
  const [paginationObject, setPaginationObject] = useState<{'page': number, 'isCurrentPage': boolean}[]>([]);
  
  const maxPokemon = 151;
  const getTotalPage = (maxPokemon:number):number=> {
  
  return (maxPokemon /10 | 0) +1
  };

  const isFirstPage = (totalPage:number):boolean => {
    return !totalPage && 1 >= totalPage;
  };

  const isMoreThanFirstPage = (index:number):boolean => {
    return 0 < index;
  };

  const isLessThanTotalPages = (totalPage:number,num:number):boolean => {
    return totalPage >= num
  };

  const createPrevPaginationArray = (currentPage:number,paginationArray:number[]) => {
    const FirstPrevIndex = currentPage-1;
    const SecondPrevIndex = currentPage-2;

    if (isMoreThanFirstPage(SecondPrevIndex) ) {
      paginationArray.push(SecondPrevIndex);
    }
    
    if (isMoreThanFirstPage(FirstPrevIndex) ) {
      paginationArray.push(FirstPrevIndex);
    }
  };

  const createNextPaginationArray = (totalPage:number, currentPage:number,paginationArray:number[]) => {
    const FirstNextIndex = currentPage+1;
    const SecondNextIndex = currentPage+2;

    if (isLessThanTotalPages(totalPage,FirstNextIndex) ) {
      paginationArray.push( FirstNextIndex );
    }
    if (isLessThanTotalPages(totalPage,SecondNextIndex) ) {
      paginationArray.push( SecondNextIndex );
    }
  };

  const makePaginationObject = (paginationArray:Array<number>,currentPage:number) => {
    const PaginationObjectt  = paginationArray.map((obj)=>{
      if (currentPage===obj) return { 'page': obj, 'isCurrentPage': true}
      return { 'page': obj, 'isCurrentPage': false}
    })
    return PaginationObjectt
  };


  const createPaginationLinks = ( currentPage:number ) => {
    const totalPage = getTotalPage(maxPokemon)
    const array: number[] = [];
    // If there is only one page, return an empty array.
    if (isFirstPage(totalPage)) {
      return array;
    };

    createPrevPaginationArray(currentPage,array);
    // Push the current page index item.
    array.push( currentPage );
    createNextPaginationArray(totalPage,currentPage, array);
 
    const object = makePaginationObject(array,currentPage)
    setPaginationObject(object);
  };

  const onClickPage = useCallback((id:number) => {
    history.push(`/?page=${String(id)}`)
  },[]);
  return { maxPokemon, getTotalPage, paginationObject,createPaginationLinks, onClickPage };
};
