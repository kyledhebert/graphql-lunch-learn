import {GraphQLServer } from 'graphql-yoga';
import * as serverConfig from './api';

const serverOptions = {
    port: 3333,
    endpoint: '/graphql',
    playground: '/docs',
    tracing: true,
    debug: true
}

const server = new GraphQLServer(serverConfig)

server.start(serverOptions, ({port}) => console.log(`Server is running on http://localhost:${port}`))