import { memo, VFC } from "react";

import { Box } from "@chakra-ui/react";
export const Footer: VFC = memo(() => {
    return (
        <>
        <Box 
        height="150px"
        mt="150px"
        as="footer"
        bg="red.500"
        color="gray.50"
        >
            <Box 
            p={2}
            as="div"
            textAlign='center'
            fontSize="sm"
            >COPYRIGHT © tsutsuji-c All rights Reserved.</Box>
        </Box>
        </>
              );
});