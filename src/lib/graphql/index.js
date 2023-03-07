import {GraphQLClient} from "graphql-request";

const GRAPHCMS_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const authorization = `Bearer ${process.env.GRAPHCMS_API_KEY}`;

export default new GraphQLClient(`${GRAPHCMS_ENDPOINT}`, {
    method : 'POST',
    headers: {
        authorization: authorization
    },
});