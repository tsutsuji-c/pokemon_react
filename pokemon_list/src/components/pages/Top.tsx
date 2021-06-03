import { memo, useEffect, VFC } from "react";
import {
    Center,
    Spinner,
    Wrap,
    WrapItem,
  } from "@chakra-ui/react";

import { PokemonCard } from '../organisms/layout/pokemon/PokemonCard'
import { useAllPokemon } from '../../hooks/useAllPokemon'




export const Home: VFC = memo(() => {
    const { getPokemon,loading,pokemon } = useAllPokemon();
    // console.log(pokemon)
    useEffect(() => getPokemon(), [getPokemon]);
    console.log(pokemon.map(obj => {
        return obj.sprites
    }))
    return(
    <>
    {loading ? (
    <Center h="100vh">
        <Spinner color="teal.200" />
    </Center>
    ) : (
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
      )}
   
    </>
    );
});