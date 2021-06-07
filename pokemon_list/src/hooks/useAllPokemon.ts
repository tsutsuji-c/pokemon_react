/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import axios from "axios";

import { Pokemon } from "../types/api/pokemon";
import { useMessage } from "./useMessage"

export const useAllPokemon = () => {
  const { showMessage } = useMessage();
  
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState<Array<Pokemon>>([]);

   // idを用いてソート
  const compareId = (a,b) => {
    const idA = Number(a.id);
    const idB = Number(b.id);
  
    let comparison = 0;
    if (idA > idB) {
      comparison = 1;
    } else if (idA < idB) {
      comparison = -1;
    }
    return comparison;
  };


  const setStartIndex = (currentPage:number) => {
    return ((currentPage-1)*10) +1;
  };

  const setEndIndex = (currentPage:number, maxPokemon:number) => {
    let end = currentPage *10;
    // ポケモンの最大値と比較する
    if (end >= maxPokemon) {
      end =maxPokemon;
    }
    return end
  };

  const getPokemon = useCallback((currentPage:number, maxPokemon:number) => {
    setLoading(true);
    

    const start = setStartIndex(currentPage);
    const end = setEndIndex(currentPage,maxPokemon);
   
    // ここでループ(start~end番目のポケモン取得)
    for (let num =start; num <end+1; num++) {
        axios
      .get<Pokemon>("https://pokeapi.co/api/v2/pokemon/"+num)
      .then(res => {
          const getData=res.data
          setPokemon(pokemon => [...pokemon,getData].sort(compareId))

      })
      .catch(() =>
        showMessage({ title: "情報取得に失敗しました", status: "error" })
      )
      .finally(() => {
          if(num>end-1)return setLoading(false)
        });
        
      }
  }, []);

  return { getPokemon,loading,pokemon, setPokemon };
};