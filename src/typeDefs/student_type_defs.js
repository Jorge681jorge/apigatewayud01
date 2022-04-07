const { gql } = require('apollo-server');

const studentTypeDefs = gql `
    
    type Student{
        name: String
        cod: Int
        course: Int
        id: Int
    }

    type Query{
        allStudents: [Student]
        getStudentById(id: Int!): Student
    }
    
`;

module.exports = studentTypeDefs;