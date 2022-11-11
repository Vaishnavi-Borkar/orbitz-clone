import { Stack, Image, Flex, Text } from "@chakra-ui/react";
const Hotel = ({ name, city, image, price, rating, address }) => {
    <Stack>
        <Image
            height={230}
            src={image}
        />
        <Flex>
            <Text>
                {name}
            </Text>
            <Text>
                {city}
            </Text>
        </Flex>
    </Stack>
}

export default Hotel;