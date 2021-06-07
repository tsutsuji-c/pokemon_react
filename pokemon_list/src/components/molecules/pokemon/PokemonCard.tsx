import { memo, VFC} from "react";

import { Box, Stack, Image, Text } from "@chakra-ui/react";

type Props = {
    id: string;
    sprites:{front_default:string;}
    // height: string;
    // weight: string;
  };
export const PokemonCard: VFC<Props> = memo((props) => {
    const { id, sprites } = props;
    // const pokemon ={
    //     id: data.id; strings
    //     name: data.name; strings
    //     height: data.height;
    //     type: data.type; array
    //     img: data.sprites.front_default; strings
    //     species:data.species.url; array
    // "https://pokeapi.co/api/v2/pokemon/80"
    // "https://pokeapi.co/api/v2/pokemon-species/80/"

    // name:names[0].name; strings
    // 説明文
    // res.data.flavor_text_entries.filter((text)=>{
    //     return text.version.name ==="lets-go-pikachu" && text.language.name ==="ja";[0].flavor_text
    // ここまで

    // }
    return (
        <Box
          w="260px"
          h="260px"
          bg="white"
          borderRadius="10px"
          shadow="md"
          p={4}
          _hover={{ cursor: "pointer", opacity: 0.8 }}
        >
             <Text fontSize="sm" color="gray" textAlign="center">
                {id}
            </Text>
          <Stack textAlign="center">
            <Image
              borderRadius="full"
              boxSize="160px"
              m="auto"
              src={sprites.front_default}
            />
          </Stack>
        </Box>
      );
    });