import { Box, CircularProgress, SimpleGrid } from "@chakra-ui/react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../components/Item";
import useSWRInfinite from "swr/infinite";
import { PAGINATION_LIMIT, WALLET_ADDRESS, api } from "../apis/api";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { getFetcher } from "../utils/axios";
import { NftModel } from "../types/nftModel";

const getKey = (pageIndex: number, previousPageData: { next: string, nfts: NftModel[] }) => {

    if (previousPageData && !previousPageData.nfts.length) return null // reached the end

    const baseUrl = api.getNFTList('goerli', WALLET_ADDRESS);

    // first page
    if (pageIndex === 0) return baseUrl + `?limit=${PAGINATION_LIMIT}`
    // next page
    return baseUrl + `?next=${previousPageData.next}&limit=${PAGINATION_LIMIT}`                    // SWR key
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
        rootMargin: '0px 0px 400px 0px',
    });




    return <>
        <SimpleGrid columns={{ sm: 2, md: 4 }} spacing='40px'>
            {data?.map((it) => {
                return it.nfts.map((it) => <Item width="100%" key={`${it.contract}-${it.identifier}`} onClick={(contract, id) => navigate(`/detail/${contract}/${id}`)} data={it}></Item>)
            })}
        </SimpleGrid>
        {
            (isLoading || hasNextPage) && (
                <Box ref={sentryRef}>
                    <CircularProgress isIndeterminate color='green.300' />
                </Box>
            )
        }</>


}

export default ListPage