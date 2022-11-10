import { Link } from "react-router-dom";
import { Box, HStack, Spacer, Text } from "@chakra-ui/react"
const GridBox1 = [
    {
        to: "/about", Contact: "About"
    },
    {
        to: "/jobs", Contact: "Jobs"
    },
    {
        to: "/list", Contact: "List your property"
    },
    {
        to: "/partner", Contact: "Partnerships"
    },
    {
        to: "/newsroom", Contact: "Newsroom"
    },
    {
        to: "/investor", Contact: "Investor Relations"
    },
    {
        to: "/site", Contact: "Site Map"
    },
    {
        to: "/add", Contact: "Orbitz"
    },
    {
        to: "/add", Contact: "Advertising"
    },
]
const GridBox2 = [
    {
        to: "/hotelsUs", Contact: "Hotels in Uninted State"
    },
    {
        to: "/vacation", Contact: "Car Rentals in United States"
    },
    {
        to: "/Domestic", Contact: "Domestic Fights"
    },
    {
        to: "/pakage", Contact: "Vacations Package in United States"
    },
    {
        to: "/reviews", Contact: "Orbitz Reviews"
    },
    {
        to: "/coupons", Contact: "Orbitz Coupons"
    },
    {
        to: "/lgbtq", Contact: "LGBTQ Travels"
    },
    {
        to: "/accommodations", Contact: "Unique Accommodations"
    },
    {
        to: "/Travel", Contact: "Travel Blog"
    },
]
const GridBox3 = [
    {
        to: "/privacy", Contact: "Privacy Policy"
    },
    {
        to: "/terms", Contact: "Terms Of Use"
    },
    {
        to: "/Orbitz", Contact: "Orbitz Rewards Terms"
    },
    {
        to: "/personal", Contact: "Do not sell my personal information"
    }

]
const GridBox4 = [
    {
        to: "/support", Contact: "Privacy Policy"
    },
    {
        to: "/rental", Contact: "Cancal your hotel or vacation rental booking"
    },
    {
        to: "/fight", Contact: "cancel your flight"
    },
    {
        to: "/refund", Contact: "Refund timeslines,policies & process"
    }
    ,
    {
        to: "/usecoupan", Contact: "Refund timeslines,policies & process"
    }
    ,
    {
        to: "/coronavirus", Contact: "Coronavirus Disease (Covid-19)"
    }

]
const style = { padding: "6px 5px", textDecoration: "none" }
const linkstyle = { color: "#007e8f", fontSize: "14px", textDecoration: "none" }
function Footer() {
    return (
        <>

            <Box style={{ display: "flex", justifyContent: "space-around" }}>

                <Box>
                    <img src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" alt="logo" />
                </Box>

                <Box>
                    <Box>Company</Box>
                    {GridBox1.map((el) => (
                        <Box style={style}>

                            <Link to={el.to} style={linkstyle}>{el.Contact}</Link>
                        </Box>
                    ))}
                </Box>
                <Box>
                    <Box>Explore</Box>
                    {GridBox2.map((el) => (
                        <Box style={style}>

                            <Link to={el.to} style={linkstyle}>{el.Contact}</Link>
                        </Box>
                    ))}
                </Box>
                <Box>
                    <Box>Policies</Box>
                    {GridBox3.map((el) => (
                        <Box style={style}>

                            <Link to={el.to} style={linkstyle}>{el.Contact}</Link>
                        </Box>
                    ))}
                </Box>
                <Box>
                    <Box>Help</Box>
                    {GridBox4.map((el) => (
                        <Box style={style}>

                            <Link to={el.to} style={linkstyle}>{el.Contact}</Link>
                        </Box>
                    ))}
                </Box>

            </Box>
            <hr />
            <Box >
                <Text>© 2022 Orbitz, LLC, an Expedia Group Company. All rights reserved.</Text>
                <Text>Orbitz, Orbitz.com, and the Orbitz logo are trademarks or registered trademarks of Orbitz, LLC. CST# 2083930-50.</Text>
            </Box>
        </>
    )
}
export default Footer
