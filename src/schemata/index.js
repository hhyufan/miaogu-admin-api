import { gql } from "apollo-server-express";
import adminTypeDefs from "./admin.js";
import userTypeDefs from "./user.js";
import friendTypeDefs from "./friend.js";
import messageTypeDefs from "./message.js";

const typeDefs = gql`
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
`;

export default [typeDefs, adminTypeDefs, userTypeDefs, friendTypeDefs, messageTypeDefs];
