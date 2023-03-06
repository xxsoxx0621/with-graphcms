import {gql} from "graphql-request";

export default gql`
 query{
        products {
            id
            name
            slug
            price
            images{
                id
                url
            }
        }
}
`;