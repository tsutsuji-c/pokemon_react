import { memo, VFC} from "react";

import { Box, Text } from "@chakra-ui/react";

type Props = {
  paginationArray: Array<number>;
  onClickPage: (id:number) => void;
  };
export const Pagination: VFC<Props> = memo((props) => {
    const { paginationArray, onClickPage} = props;
    return (
        <>
        <Box className="paginator" as="div"textAlign="center">
        <Box className="fa fa-angle-double-left" as="button">
        前のページ
        </Box>
        {paginationArray.map((item) => (
            <Text as="a" key={item} onClick={() => onClickPage(item)} >{String(item)}</Text>
        ))}
        <Box className="fa fa-angle-double-right" as="button">
          次のページ
        </Box>
        </Box>
    </>
    );
});