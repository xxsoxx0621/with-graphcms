"use client"
import {Grid} from "@chakra-ui/react";
import ProductCard from "@/components/ProductCard";
import getAllProducts from '@/lib/graphql/queries/getAllProducts'
import graphql from '@/lib/graphql'
import {useEffect, useState} from 'react'

function Home() {
    const [list, setList] = useState([]);
    const getRequestAPICall = async () => {
        return await graphql.request(getAllProducts);
    };

    useEffect(()=>{
        getRequestAPICall().then((resp) => setList(resp.products));
    },[]);


    return (
            <Grid gridTemplateColumns="repeat(4,1fr)" gap="5">
                {
                    list.map((product) => (
                        <ProductCard key={product.id} {...product}/>
                        )
                    )
                }
            </Grid>
    )
}


export default Home;