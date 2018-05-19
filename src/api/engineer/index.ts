import {importSchema } from 'graphql-import'
import { resolvers } from './engineer.resolvers';



export const schema = {
    resolvers: resolvers,
    typeDefs : importSchema('./src/api/engineer/engineer.graphql')
}