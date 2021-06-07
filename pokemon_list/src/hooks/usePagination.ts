/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

export const usePagination = () => {

  const history = useHistory();
 
  // // 現在のページ番号を取得
  const [paginationArray, setPaginationArray] = useState<Array<number>>([]);

  // ポケモン151匹からページ数を求める
  const maxPokemon = 151;
  const getTotalPage = (maxPokemon:number):number=> {
  
  return (maxPokemon /9 | 0) +1
  };

  // 最初のページかどうかの判定
  const isFirstPage = (totalPage:number):boolean => {
    return !totalPage && 1 >= totalPage;
  };

  // 現在のページ以下のページが0を超えているかどうかの判定
  const isMoreThanFirstPage = (index:number):boolean => {
    return 0 < index;
  };

  // 現在のページがtotalPage以下かどうかの判定
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


  const createPaginationLinks = ( currentPage:number ) => {
    const totalPage = getTotalPage(maxPokemon)
    const array: number[] = [];
    // If there is only one page, return an empty array.
    if (isFirstPage(totalPage)) {
      return array;
    };
    /**
       * Push the two index items before the current page.
       */
    createPrevPaginationArray(currentPage,array);
    // Push the current page index item.
    array.push( currentPage );
    createNextPaginationArray(totalPage,currentPage, array);
    // Push first index item in the array if it does not already exists.
    // if ( -1 === paginationArray.indexOf( 1 ) ) {
    //   paginationArray.unshift( 1 );
    // }
    // // Push last index item in the array if it does not already exists.
    // if ( -1 === paginationArray.indexOf( totalPages ) ) {
    //   paginationArray.push( totalPages );
    // }
    setPaginationArray(array);
  };

  const onClickPage = useCallback((id:number) => {
    history.push(`/?page=${String(id)}`)
  },[]);
  return { maxPokemon, getTotalPage, paginationArray,createPaginationLinks, onClickPage };
};