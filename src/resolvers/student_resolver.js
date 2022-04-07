const studentResolver = {
    Query: {

        getStudentById: async (_, { id }, { dataSources }) => {
            return await dataSources.studentAPI.getStudentById(id)
        },
        allStudents: async(_, { }, { dataSources}) => {
            return await dataSources.studentAPI.allStudents()
        },

    },
    Mutation: {
        deleteStudentByID: async (_, { id }, { dataSources }) => {
            return await dataSources.studentAPI.deleteStudentByID(id)
        },
        createStudents: async (_, { studentData }, { dataSources }) => {
            const students = {
                name: studentData.name,
                cod: studentData.cod,
                course: studentData.course
            }
            return await dataSources.studentAPI.createStudents(students)
        },
        /*updateStudent: async (_, { studentData }, { dataSources }) => {
            const students = {
                name: studentData.name,
                cod: studentData.cod,
                course: studentData.course,
                id: studentData.id
            }
            return await dataSources.studentAPI.createStudents(students)
        },*/
        
    },
};

module.exports = studentResolver;