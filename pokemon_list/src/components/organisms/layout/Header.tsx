/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, VFC } from "react";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";

import { useHistory } from "react-router-dom";

export const Header: VFC = memo(() => {

    const history = useHistory();
    const onClickTop = useCallback(() => history.push("/"), []);

    return (
    <>
    <Flex
          as="nav"
          bg="red.500"
          color="gray.50"
          align="center"
          justify="space-between"
          padding={{ base: 3, md: 5 }}
        >
          <Flex
            align="center"
            as="a"
            mr={8}
            _hover={{ cursor: "pointer" }}
            onClick={onClickTop}
          >
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
              ポケモン図鑑
            </Heading>
          </Flex>
          <Flex
            align="center"
            fontSize="sm"
            display={{ base: "none", md: "flex" }}
            flexGrow={2}
          >
            <Box pr={4}>
              <Link onClick={onClickTop}>Topページ</Link>
            </Box>
          </Flex>
    </Flex>
    </>
          );
          });