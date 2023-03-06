"use client"
import _ from 'lodash';
import {Grid} from "@chakra-ui/react";
import ProductCard from "@/components/ProductCard";
import {useEffect, useState} from "react";
import {Joan} from "@next/font/google";


const getProducts = async () => {
    const response = await fetch('https://api-eu-central-1.hygraph.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: `{
                products {
                  slug
                  name
                  id
                }
              }`
        })

    })

    const {data} = await response.json()

    return data.products;
}

function Home() {
    const [list, setList] = useState([]);
    let arr = [];
    useEffect(() => {
        async function fetchData() {     // You
            const products = await getProducts();
            setList(products);
        }

        fetchData();
    }, []);

    return (
        <div>
            <div>1</div>
            {JSON.stringify(list).concat()}
            <Grid gridTemplateColumns="repeat(4,1fr)" gap="5">
                {list.map((product) => {
                    <ProductCard key={product.id} {...product}/>
                })}
            </Grid>
        </div>
    )
}

// export const getStaticProps = async () => {
//     const {products} = await graphql.request(getAllProducts);
//     return {
//         revalidate: 60,
//         props: {
//             products,
//         }
//     }
// }
export default Home;