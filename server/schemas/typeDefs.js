const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Auth {
    token: ID!
    user: User
    }

    type Book {
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
        email: String!
        password: String!
        bookCount: Int
        savedBooks: [Book]
    }


    type Query {
        me(username: String, _id: String): User
    }

    type Mutation {
        login(email: String, username: String, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(authors: [String], description: String, bookId: String, title: String, image: String, link: String): Book
        removeBook(bookId: String!): User
    }
`;

module.exports = typeDefs;