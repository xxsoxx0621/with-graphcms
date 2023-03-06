import {GraphQLClient} from "graphql-request";

const {GRAPHCMS_ENDPOINT, GRAPHCMS_API_KEY = null} = process.env;
const authorization = `Bearer ${process.env.GRAPHCMS_API_KEY}`;

export default new GraphQLClient(`${process.env.GRAPHCMS_ENDPOINT}`, {
    method : 'POST',
    headers: {
        authorization: authorization
    },
});