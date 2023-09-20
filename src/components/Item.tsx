import { Image, Card, CardBody, Heading } from "@chakra-ui/react";
import { NftModel } from "../apis/list";
type ItemProps = {
    onClick?: (contract: string, identifier: string) => void
    data: NftModel
    width?: string
}
const Item = ({ data, onClick, width }: ItemProps) => {

    const { image_url, name, contract, identifier } = data;
    return <Card w={width} align='center' _hover={{ cursor: "pointer" }} onClick={() => onClick && onClick(contract, identifier)}>
        <CardBody>
            <Image
                src={image_url}
                alt={name}
                borderRadius='lg'
                fallbackSrc='https://via.placeholder.com/150'
            />
            <Heading color='blue.600' size='md' mt='6'>{name}</Heading>
        </CardBody>
    </Card>
}

export default Item;