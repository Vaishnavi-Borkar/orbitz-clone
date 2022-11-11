import { CircularProgress } from '@chakra-ui/react';
function Loading() {
    return (
        <>
            <Box style={{ justifyContent: "center", alineItem: "center" }}>
                <p>Loading...</p>
                <CircularProgress isIndeterminate color='green.300' />
            </Box>
        </>
    )
}
export default Loading;