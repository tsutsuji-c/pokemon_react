import { memo, VFC} from "react";
import { Link } from 'react-router-dom'
import { Text, Flex, Square} from "@chakra-ui/react";

type Props = {
  totalPage: number;
  paginationObject:{'page': number, 'isCurrentPage': boolean}[];
  onClickPage: (id:number) => void;
  };
export const Pagination: VFC<Props> = memo((props) => {
    const { totalPage, paginationObject, onClickPage} = props;
    return (
        <>
        <Flex className="paginator"   justify="center" as="div">
          <Text m="12px"><Link to="/?page=1">最初のページ</Link></Text>
        {paginationObject.map((obj) => {
          if (obj.isCurrentPage===true){
            return(
            <Square 
            key={obj.page}
            bg="red.500"
            size="32px"
            as="div" 
            m="8px" 
            color="white" 
            borderRadius="16px"
            >
              <Text 
              m="12px"
              as="a" 
              key={obj.page} 
              onClick={() => onClickPage(obj.page)} 
              _hover={{ cursor: "pointer" }}
              >{String(obj.page)}</Text>
            </Square>
            )
          } else {
            return (
            <Square 
            key={obj.page}
            size="32px"
            as="div" 
            m="8px" 
            >
              <Text 
              m="12px"
              as="a" 
              key={obj.page} 
              onClick={() => onClickPage(obj.page)} 
              _hover={{ cursor: "pointer" }}
              >{String(obj.page)}</Text>
            </Square>
            )
          };
        })}
        <Text m="12px"><Link to={`/?page=${totalPage}`}>最後のページ</Link></Text>
        </Flex>
    </>
    );
});