import { gql } from "apollo-server-express";

export default gql`
    extend type Query {
        message(name: String!): Message!
        messageFeed(model: String!, cursor: String): MessageFeed
    }
    extend type Mutation {
        createMessage(uid: String!, model: String!, msg: String!): Message!
        updateMessage(id: ID!, uid: String, model: String, msg: String): Message!
        removeMessage(id: ID!): Boolean!
    }
    type Message {
        id: ID!
        uid: String!
        model: String!
        msg: String!
    }
    type MessageFeed {
        messages: [Message]!
        cursor: String!
        hasNextPage: Boolean!
    }
`;
