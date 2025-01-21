import { gql } from "apollo-server-express";

export default gql`
    extend type Query {
        users: [User!]!
        user(username: String, email: String): User!
    }
    extend type Mutation {
        createUser(username: String!, email: String!, password: String!): User!
        updateUser(id: ID!, username: String, email: String, password: String): User!
        removeUser(id: ID!): Boolean!
    }
    type User {
        id: ID!
        username: String!
        email: String!
    }
`;
