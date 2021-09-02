const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Auth {
    token: ID!
    user: User
    }

    type Book {
        _id: ID
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }

    type User {
        _id: ID
        username: String!
        emial: String!
        password: String!
        savedBooks: [Book]
    }


    type Query {

    }
`;

module.exports = typeDefs;