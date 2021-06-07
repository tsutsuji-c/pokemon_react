/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from 'react-router-dom';

export const usePagequery = () => {
    const search = useLocation().search;
    const queryString = new URLSearchParams(search);

    const getPageId = (totalPage:number) => {
        
        let pageId = Number(queryString.get("page"));
        if (pageId === null ||pageId <= 0  ) {
          pageId = 1
        } 
  
        if (pageId >= totalPage) {
          pageId = totalPage
        } 
        return pageId
    };
  return { getPageId };
};