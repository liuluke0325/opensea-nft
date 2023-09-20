import { useParams, Link as RouterLink } from "react-router-dom";
import { NftModel, listAPI } from "../apis/list";
import { useEffect, useState } from "react";
import { Stack, Text, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, CircularProgress, Heading, Image, Link } from "@chakra-ui/react";

const DetailPage = () => {
    const { contract, id } = useParams();
    const [info, setInfo] = useState<NftModel>();
    useEffect(() => {
        if (id && contract) {
            (async () => {
                const resp = await listAPI.getNFT('goerli', contract, id)
                setInfo(resp.data.nft);
            })();
        }
    }, [contract, id])
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
            info ? (<Stack>
                <Heading>{info.collection}</Heading>
                <Image src={info?.image_url} alt={info?.name}></Image>
                <Heading as='h2' size='lg'>
                    {info.name}
                </Heading>
                <Text>{info.description}</Text>
                <Link href={`https://testnets.opensea.io/assets/goerli/${info.contract}/${info.identifier}`} isExternal display="block" borderRadius="lg" background="gray.400" paddingX="8" paddingY="8" border="4px">
                    {`https://testnets.opensea.io/assets/goerli/${info.contract}/${info.identifier}`}
                </Link>


            </Stack>) : (<CircularProgress isIndeterminate color='green.300' />)
        }
    </Box >



}

export default DetailPage;