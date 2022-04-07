const studentResolvers = {
    Query: {

        getStundentById: async (_, { id }, { dataSource }) => {
            return await dataSource.getStundentById(id);
        }

    },
    Mutation: {

    }
}