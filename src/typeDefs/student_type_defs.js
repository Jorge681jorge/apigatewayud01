const { gql } = require('apollo-server');

const studentTypeDefs = gql `
    
    type Student{
        name: String
        cod: Int
        course: Int
        id: Int
    }

    input StudentData{
        name: String
        cod: Int
        course: Int
        id: Int
    }

    type Query{
        allStudents: [Student]
        getStudentById(id: Int!): Student
    }

    type Mutation{
        createStudents(studentData: StudentData): Student
        deleteStudentByID(id: Int!): Student
        #updateStudent(studentData: StudentData): Student
    }
    
`;

module.exports = studentTypeDefs;