const studentResolver = require('./student_resolver');
const lodash = require('lodash');

const resolvers = lodash.merge(studentResolver);

module.exports = resolvers;
