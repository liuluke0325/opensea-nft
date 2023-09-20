import { useParams, Link as RouterLink } from "react-router-dom";
import { Stack, Text, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, CircularProgress, Heading, Image, Link } from "@chakra-ui/react";
import useSWR from "swr";
import { getFetcher } from "../utils/axios";
import { NftModel, nftAPI } from "../apis/nft";

const DetailPage = () => {
    const { contract, id } = useParams();
    const { data } = useSWR<{ nft: NftModel }>(nftAPI.getNFT('goerli', contract ?? "", id ?? ""), getFetcher);

    return <Box >
        <Breadcrumb spacing="8px" >
            <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to='/'>
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>Detail</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        {
            data ? (<Stack>
                <Heading>{data.nft.collection}</Heading>
                <Image src={data.nft.image_url} alt={data.nft.name}></Image>
                <Heading as='h2' size='lg'>
                    {data.nft.name}
                </Heading>
                <Text>{data.nft.description}</Text>
                <Link href={`https://testnets.opensea.io/assets/goerli/${data.nft.contract}/${data.nft.identifier}`} isExternal display="inline-block" borderRadius="lg" background="gray.400" paddingX="8" paddingY="8" border="4px">
                    {`https://testnets.opensea.io/assets/goerli/${data.nft.contract}/${data.nft.identifier}`}
                </Link>


            </Stack>) : (<CircularProgress isIndeterminate color='green.300' />)
        }
    </Box >



}

export default DetailPage;