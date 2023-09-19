import { Image, Card, CardBody, CardFooter, Divider, Heading, Stack, Text } from "@chakra-ui/react";
type ItemProps = {
    imageSrc: string;
    name: string
}
const Item = ({ imageSrc, name }: ItemProps) => {


    return <Card maxW='sm'>
        <CardBody>
            <Image
                src={imageSrc}
                alt={name}
                borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
                <Heading color='blue.600' size='md'>{name}</Heading>
            </Stack>
        </CardBody>
    </Card>
}

export default Item;