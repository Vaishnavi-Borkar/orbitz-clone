import { Box, Spacer, HStack, Button, Portal } from "@chakra-ui/react";
import { Link } from "react-router-dom";





function Navbar() {


    return (
        <>
            <Box>
                <Box style={{ fontFamily: "Segoe UI", backgroundColor: "#00253c", color: "white", height: "80px", display: "flex" }}>
                    <Box>
                        <img style={{ cursor: "pointer", width: "200px", height: "80px" }} src="data:image/png;base64,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" alt="Orbitz" />

                    </Box>
                    <Box style={{ alignItems: "center", marginLeft: "20px", display: "flex" }}>
                        <p>Menu</p>
                    </Box>
                    <Spacer />

                    <Box style={{ display: "flex", alignItems: "center" }}>
                        <HStack spacing="20px">
                            <Box>Espanol</Box>
                            <Box>List your property</Box>
                            <Box>Support</Box>
                            <Box>Trips</Box>

                            <Link style={{ marginRight: "30px", textDecoration: "none", color: "white" }} to="/SignIn">Sign in</Link>
                        </HStack>
                    </Box>
                </Box>
            </Box>



        </>

    )
}
export default Navbar;