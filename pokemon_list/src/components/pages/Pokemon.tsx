import { Box, Text, Stack, Image} from "@chakra-ui/react"

import { memo, VFC } from "react";

export const Pokemon: VFC = memo(() => {
    return (
    <>
    <Box width="100%" height={40}>
    <Text>080</Text>
    <Text>ヤドラン</Text>
    <Stack>
            <Image
              borderRadius="full"
              boxSize="240px"
              src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"}
            />
          </Stack>
    </Box>
        <p></p>
        </>
        )
});