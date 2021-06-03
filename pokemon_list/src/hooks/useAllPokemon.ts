/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import axios from "axios";

import { Pokemon } from "../types/api/pokemon";
import { useMessage } from "./useMessage"

export const useAllPokemon = () => {
  const { showMessage } = useMessage();
  
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState<Array<Pokemon>>([]);

  const getPokemon = useCallback(() => {
    setLoading(true);

    // idを用いてソート
    function compare(a, b) {
        const idA = Number(a.id);
        const idB = Number(b.id);
      
        let comparison = 0;
        if (idA > idB) {
          comparison = 1;
        } else if (idA < idB) {
          comparison = -1;
        }
        return comparison;
      }
      
    // ここでループ(1~151番目のポケモン取得)
    for (let num = 1; num < 152; num++) {
        axios
      .get<Pokemon>("https://pokeapi.co/api/v2/pokemon/"+num)
      .then(res => {
          const getData=res.data
          setPokemon(pokemon => [...pokemon,getData].sort(compare))

      })
      .catch(() =>
        showMessage({ title: "情報取得に失敗しました", status: "error" })
      )
      .finally(() => {
          if(num>150)return setLoading(false)
        });
        
      }
  }, []);

  return { getPokemon,loading,pokemon };
};