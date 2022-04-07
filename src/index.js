const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const StudentAPI = require('./dataSources/student_api');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        studentAPI: new StudentAPI()
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});