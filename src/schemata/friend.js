const {gql} = require("apollo-server-express")
module.exports = gql`
    extend type Query {
        friend(name: String!): Friend!
        friends: [Friend!]!
    }
    extend type Mutation {
        createFriend(name: String!, detail: String!): Friend!
        updateFriend(id: ID!, name: String, detail: String): Friend! 
        removeFriend(id: ID!): Boolean!
    }
    type Friend {
        id: ID!
        name: String!
        detail: String!
    }
`
