import { useDisclosure } from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,

} from '@chakra-ui/react'
import { useState } from "react";
import { Box, Spacer, HStack, Button, Portal, Flex, Stack, Image, Text, Input } from "@chakra-ui/react";

function Home() {
    const [number, setNumber] = useState(1);
    const basicBoxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSize: '250px',
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '20px',
        px: 4,
        background:
            'url(https://thumbs.dreamstime.com/b/photo-collage-made-diverse-world-travel-destinations-wooden-surface-photos-127092750.jpg)center/cover no-repeat',
    }
    return (
        <>
            <Box>
                <Box>
                    <img style={{ width: "100%", height: "450px" }} src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/01/ORB_Storefront_6_imgB_1400x600_20211028.jpg?impolicy=fcrop&w=900&h=225&q=mediumHigh" alt="travel" />
                </Box>
                <Box style={{
                    position: "absolute", top: "150px", left: "150px", width: "80%", height: "300px", backgroundColor: "white", margin: "auto", color: "black"
                }}>
                    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "15px" }}>
                        <HStack spacing="30px">
                            <Box>Stays</Box>
                            <Box>Flights</Box>
                            <Box>Cars</Box>
                            <Box>Packages</Box>
                            <Box>Things to do</Box>
                            <Box>Cruises</Box>
                        </HStack>

                    </Box>
                    <hr />
                    <Box style={{ marginTop: "50px", marginLeft: "50px" }}>
                        <Input placeholder="Going to" size='lg' htmlSize={50} width='auto' />
                        <Input type="date" placeholder="Chech in" size='lg' htmlSize={4} width='auto' />
                        <Input type="date" placeholder="Chech in" size='lg' htmlSize={4} width='auto' />
                        {/* <input type="text" onClick={BasicUsage} /> */}

                        {/* <Box style={{ width: "50%", margin: "auto" }}>
                            <Popover style={{ backgroundColor: "gray" }}>
                                <PopoverTrigger>
                                    <Button >Trigger</Button>
                                </PopoverTrigger>
                                <Portal>
                                    <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverHeader>Travelers</PopoverHeader>
                                        <PopoverCloseButton />
                                        <PopoverBody>

                                            <p>Adult</p>
                                            <Box style={{ display: "flex" }}>
                                                <Button colorScheme='teal' size='lg' onClick={() => setNumber(number + 1)}>
                                                    +
                                                </Button>
                                                <h1>{number}</h1>
                                                <Button colorScheme='teal' size='lg' disabled={number <= 0} onClick={() => setNumber(number - 1)}>
                                                    -
                                                </Button>
                                            </Box>
                                        </PopoverBody>

                                    </PopoverContent>
                                </Portal>
                            </Popover>
                        </Box> */}
                        <Button colorScheme='teal' style={{ margin: "auto" }}>Search</Button>


                    </Box>
                </Box>
                <Stack bg='gray.50'
                    columns={{ sm: 2, md: 4 }}
                    spacing='20'
                    p='10'

                    textAlign='center'
                    rounded='lg'
                    color='gray.400'>
                    <Flex justifyContent='space-evenly'>
                        <Box boxShadow='2xl' p='6' rounded='md' bg='white' ><Image src="https://thumbs.dreamstime.com/b/tropical-island-sand-beach-exotic-travel-background-landscape-35213632.jpg" alt="travel" borderRadius='full' /> <Text fontSize='xl' color="black">TRAVEL AS YOU ARE</Text></Box>
                        <Box boxShadow='2xl' p='6' rounded='md' bg='white'><Image src="https://thumbs.dreamstime.com/b/various-travel-destination-japan-tokyo-tower-mt-fuji-kiyomizu-dera-temple-you-can-use-your-brochures-35454311.jpg" alt="offer" borderRadius='full' /> <Text fontSize='xl' color="black">BOOK MORE, GET MORE</Text></Box>
                        <Box boxShadow='2xl' p='6' rounded='md' bg='white'><Image src="https://thumbs.dreamstime.com/b/airport-travel-27730920.jpg" alt="discount" borderRadius='full' />
                            <Text fontSize='xl' color="black">GET INSIDER PRICE</Text></Box>
                    </Flex>
                </Stack>

                <Text fontSize='50px' style={{ marginBottom: "50px", marginLeft: "30px" }}>Feature offers</Text>
                <Stack style={{ marginBottom: "150px" }}>
                    <Flex flexWrap='wrap' gap='24px' justifyContent='space-evenly'>
                        <Box sx={basicBoxStyles} filter='grayscale(80%)'>Last-minute deal</Box>
                        <Box sx={basicBoxStyles}>All-inclusive restros</Box>
                        <Box sx={basicBoxStyles} filter='auto' blur='2px' >Insider prices</Box>
                        <Box sx={basicBoxStyles} filter='auto' brightness='40%'>Jes and reset</Box>
                    </Flex>
                </Stack>
            </Box>
        </>
    )
}
export default Home;