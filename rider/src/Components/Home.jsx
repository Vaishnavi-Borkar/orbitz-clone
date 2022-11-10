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
import { Box, Spacer, HStack, Button, Portal } from "@chakra-ui/react";

function Home() {
    const [number, setNumber] = useState(1)
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
                    <Box>
                        <input placeholder="Going to" />
                        <input type="date" placeholder="Chech in" />
                        <input type="date" placeholder="Chech in" />
                        {/* <input type="text" onClick={BasicUsage} /> */}

                        <Box style={{ width: "50%", margin: "auto" }}>
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
                        </Box>



                    </Box>
                </Box>

            </Box>
        </>
    )
}
export default Home;