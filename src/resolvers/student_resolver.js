const studentResolver = {
    Query: {

        getStudentById: async (_, { id }, { dataSources }) => {
            return await dataSources.studentAPI.getStudentById(id)
        },
        allStudents: async(_, { }, { dataSources}) => {
            return await dataSources.studentAPI.allStudents()
        },

    }
};

module.exports = studentResolver;