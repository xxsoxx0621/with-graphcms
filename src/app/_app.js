import {Box, ChakraProvider, Flex} from "@chakra-ui/react";
import graphql from "@/lib/graphql";
import getAllProducts from "@/lib/graphql/queries/getAllProducts";

function MyApp({Component, pageProps}) {
    console.log(pageProps,'=========>');
    return (
        <ChakraProvider>
            <Flex w="full" minH="100vh" bgColor="gray.100">
                <Box maxW="70vw" m="auto">
                    <Component {...pageProps}/>
                </Box>
            </Flex>
        </ChakraProvider>
    )
}

// export const getInitialProps = async () => {
//     const {products} = await graphql.request(getAllProducts);
//     return {
//         revalidate: 60,
//         props: {
//             products,
//         }
//     }
// }

export default MyApp;