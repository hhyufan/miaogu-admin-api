import { gql } from "apollo-server-express";

export default gql`
    scalar DateTime
    extend type Query {
        admin(adminname: String!): Admin
        admins: [Admin!]!
        me: Admin!
    }
    extend type Mutation {
        signUp(adminname: String!, email: String!, password: String!): String!
        signIn(adminname: String, email: String, password: String!): String!
    }
    type Admin {
        id: ID!
        adminname: String!
        email: String!
    }
`;
