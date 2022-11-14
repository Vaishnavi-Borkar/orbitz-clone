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
                <Text fontSize='50px' style={{ marginBottom: "50px", marginLeft: "30px" }}>Travel offers</Text>
                <Stack style={{ marginBottom: "50px" }}>
                    <Flex gap='24px'>
                        <Box><Image src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_NationalParks_imgB_1199x399_20211117.jpg" /> </Box>
                        <Box><Image src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_RoadTrips_imgB_1199x399_20211117.jpg" /></Box>
                    </Flex>
                </Stack>
                <Stack style={{ marginBottom: "30px" }}>
                    <Flex gap='24px'>

                        <Box><Image src="https://images.trvl-media.com/hotels/1000000/470000/465100/465005/b6be1b6d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" />
                            <Text>Price:₹ 2200</Text>
                            <Text>Citi:New Delhi</Text>
                            <Text>Address:-Plot No. 10, GMR Hospitality District, Indira Gandhi International Airport, New Delhi, Delhi N.C.R, 110037</Text>
                            <Button>Book now</Button>
                        </Box>
                        <Box><Image src="https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/958ad657.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" />
                            <Text>Price:₹ 5200</Text>
                            <Text>Citi:Delhi</Text>
                            <Text>
                                Address:-Diplomatic Enclave Chanakyapuri, New Delhi, Delhi N.C.R, 110023
                            </Text>
                            <Button>Book now</Button>
                        </Box>
                        <Box><Image src="https://images.trvl-media.com/hotels/10000000/9150000/9141400/9141328/b50c24b2.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" />
                            <Text>Price:₹ 3000</Text>
                            <Text>Citi:Delhi</Text>
                            <Text>Address:-15 Parliament Street, Near Connaught Place, New Delhi, Delhi N.C.R, 110001</Text>
                            <Button >Book now</Button>
                        </Box>
                    </Flex>
                </Stack>
                <Box style={{ marginLeft: "200px", marginBottom: "30px" }}><Image src="https://tpc.googlesyndication.com/simgad/10056509806482740393?" /> </Box>
            </Box>
        </>
    )
}
export default Home;