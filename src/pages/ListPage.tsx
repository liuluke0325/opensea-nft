import { SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NftModel, listAPI } from "../apis/list";
import Item from "../components/Item";

const ListPage = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/ban-types
    const [list, setList] = useState<NftModel[]>([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        (async () => {
            const resp = await listAPI.getNFTList('goerli', '0x85fD692D2a075908079261F5E351e7fE0267dB02')
            setList(resp.data.nfts);
        })();

    }, [])
    return <SimpleGrid columns={{ sm: 2, md: 4 }} spacing='40px'>
        {/* TODO infinite scroll */}
        {list.map(it => {
            return <Item key={`${it.contract}-${it.identifier}`} onClick={(contract, id) => navigate(`/detail/${contract}/${id}`)} data={it}></Item>
        })}
    </SimpleGrid>
}

export default ListPage