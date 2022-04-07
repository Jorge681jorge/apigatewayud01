const {gql} = require('apollo-server');

const studentTypeDef = gql`
    
    type Student{
        name: String
        cod: Int
        course: Int
        id: Int
    }

    type Query{
        allStudents: [Student]
        getStundentById(id: Int!): Student
        #getStudentsByCourse(course: Int!): [Student]
        #getStundentByCod(cod: Int!): Student
        numberOfStudents(): Int
    }

`;

module.exports = accountTypeDefs;