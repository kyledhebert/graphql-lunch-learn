import {schema as engineerSchema} from './engineer'

module.exports = {
    typeDefs: [
    engineerSchema.typeDefs,
    ].join(' '),
    resolvers: {...engineerSchema.resolvers},
}



