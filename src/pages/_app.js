import {Box, ChakraProvider, Flex} from "@chakra-ui/react";
import NavBar from '@/components/NavBar'

function MyApp({Component, pageProps}) {
    return (
        <ChakraProvider>
            <Flex w="full" minH="100vh" bgColor="gray.100">
                <NavBar/>
                <Box maxW="70vw" m="auto">
                    <Component {...pageProps}/>
                </Box>
            </Flex>
        </ChakraProvider>
    )
}

export default MyApp;