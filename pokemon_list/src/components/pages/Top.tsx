/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, VFC } from "react";
import {
    Center,
    Spinner,
    Wrap,
    WrapItem,
    Box,
  } from "@chakra-ui/react";

import { PokemonCard } from '../molecules/pokemon/PokemonCard'
import { useAllPokemon } from '../../hooks/useAllPokemon'
import { usePagination } from '../../hooks/Pagination/usePagination'
import { Pagination } from '../molecules/Pagination'
import { usePagequery } from '../../hooks/usePagequery'

export const Top: VFC = memo(() => {
    
    const { getPokemon,loading,pokemon, setPokemon} = useAllPokemon();
    const { maxPokemon, getTotalPage, paginationObject, createPaginationLinks, onClickPage} = usePagination();
    const { getPageId } = usePagequery();

    const totalPage =getTotalPage(maxPokemon);
    const pageId = getPageId(totalPage);
    useEffect(() => {
      const resetArray = [];
      setPokemon(resetArray);
      getPokemon(pageId,maxPokemon);
      createPaginationLinks(pageId);
    }, [pageId]);

    return(
    <>
    {loading ? (
    <Center h="100vh">
        <Spinner color="teal.200" />
    </Center>
    ) : (
      <Box>

        <Wrap p={{ base: 4, md: 10 }}>
            {pokemon.map(obj => (
            <WrapItem key={obj.id} mx="auto">
              <PokemonCard
                id={obj.id}
                sprites={obj.sprites}
              />
            </WrapItem>
          ))}
        </Wrap>
        <Pagination 
        totalPage = {totalPage}
        paginationObject={paginationObject}
        onClickPage = {onClickPage}
        />
      </Box>
        
      )}
    </>
    );
});