const studentResolvers = require('./student_resolvers');
const lodash = require('lodash');

const resolvers = lodash.merge(studentResolvers);

module.exports = resolvers;
