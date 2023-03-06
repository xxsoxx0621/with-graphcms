import Link from "next/link";
import {Box, Divider, Text} from "@chakra-ui/react";
import Image from "next/image";

export default function ProductCard(props) {
    return (
        <Link href={`/product/${props.slug}`} passHref>
            <Box border="1px"
                 borderColor="gray.200"
                 px="10"
                 py="5"
                 rounded="lg"
                 boxShadow="white"
                 bgColor="white"
                 transition="ease 0.2s"
                 _hover={{
                     boxShadow: 'xl',
                     transform: 'scale(1.02)',
                 }}>
                    <Image priority={true}
                           src={props.images[0]?.url}
                           alt={props.name}
                           width={100}
                           height={100}
                           styles={{objectFit: 'cover'}}/>
                <Divider my="3"/>
                <Box>
                    <Text fontWeight="bold" textColor="purple" fontSize="lg">
                        {props.name}
                    </Text>
                    <Text textColor="gray.700">
                        ${props.price / 100}
                    </Text>
                </Box>
            </Box>
        </Link>
    )
}