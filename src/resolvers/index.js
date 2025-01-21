import Admin from "./admin/index.js";
import User from "./user/index.js";
import Friend from "./friend/index.js";
import Message from "./message/index.js";

import graphql_cjs from "graphql-iso-date";
const { GraphQLDateTime } = graphql_cjs;

export default {
    Query: {
        ...Admin.Query,
        ...User.Query,
        ...Friend.Query,
        ...Message.Query
    },
    Mutation: {
        ...Admin.Mutation,
        ...User.Mutation,
        ...Friend.Mutation,
        ...Message.Mutation
    },
    DateTime: GraphQLDateTime
};
