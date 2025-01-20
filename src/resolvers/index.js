const Admin = require("./admin")
const User = require("./user")
const Friend = require("./friend")
const Message = require("./message")
const { GraphQLDateTime } = require("graphql-iso-date")
module.exports = {
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
}
