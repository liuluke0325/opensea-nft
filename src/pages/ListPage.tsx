import { Box, CircularProgress, SimpleGrid } from "@chakra-ui/react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../components/Item";
import useSWRInfinite from "swr/infinite";
import { NftModel, nftAPI } from "../apis/nft";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { getFetcher } from "../utils/axios";

const getKey = (pageIndex: number, previousPageData: { next: string, nfts: NftModel[] }) => {
    if (previousPageData && !previousPageData.nfts.length) return null // reached the end
    // first page, we don't have `previousPageData`
    const baseUrl = nftAPI.getNFTList('goerli', '0x85fD692D2a075908079261F5E351e7fE0267dB02');
    if (pageIndex === 0) return baseUrl + `?limit=10`
    return baseUrl + `?next=${previousPageData.next}&limit=10`                    // SWR key
}

const ListPage = () => {

    const { isLoading, data, isValidating, error, setSize } = useSWRInfinite<{ nfts: NftModel[], next: string }>(getKey, getFetcher)

    const navigate = useNavigate();

    const onLoadMore = () => {
        setSize(prev => prev + 1);
    }

    const hasNextPage = useMemo(() => {
        return !!data?.[data.length - 1].next
    }, [data])

    const [sentryRef] = useInfiniteScroll({
        loading: isValidating,
        hasNextPage,
        onLoadMore,
        disabled: !!error,
        rootMargin: '0px 0px 400px 0px', // view point to trigger
    });




    return <SimpleGrid columns={{ sm: 2, md: 4 }} spacing='40px'>

        {data?.map((it) => {
            return it.nfts.map((it) => <Item width="100%" key={`${it.contract}-${it.identifier}`} onClick={(contract, id) => navigate(`/detail/${contract}/${id}`)} data={it}></Item>)
        })}
        {(isLoading || hasNextPage) && (
            <Box ref={sentryRef}>
                <CircularProgress isIndeterminate color='green.300' />
            </Box>
        )}
    </SimpleGrid>
}

export default ListPage