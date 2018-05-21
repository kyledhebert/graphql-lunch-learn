![GraphQL](/images/graphql-logo.jpg)

---
## What is GraphQL?
 - A query language for APIs
 - A specification, not a library or language
 - Developed by Facebook, and widely-adopted

---

## Why Should You Use GraphQL?
 - GraphQL APIs have strongly typed schemas
 - Rapid product development
 - An efficient alternative to REST
    
+++

### REST vs. GraphQL

 - `/portfolio/{portfolioId}/policies`
 - `/policy/{policyId}/insured`
 - `/insured/{insuredId}/contacts`

+++

### GraphQL
```
query {
  portfolio(id: 232432) {
    policies {
    policyNum
    active
    carrier
    insured {
      name
      address
      phoneNum
      contacts {
        name
        address
        phoneNum
      }
    }
}
```
---

## Core Concepts
 - Schema Definitions
 - Resolvers
 - Queries
 - Mutations

+++

### GraphQLSchema
- the core of a GraphQL Server
    - schema definition
    - resolvers

+++

### Schemas and Types
- Schemas are defined in SDL
- Scalar Types
- Object Types
- Query and Mutation Types 

+++

#### Scalar Types
 - Int
 - Float
 - String
 - Boolean
 - ID

+++

#### Object Types
![EngineerSchema](/images/engineer-schema.png)

+++

#### Query and Mutation Types
![EngineerQueryMutation](/images/engineer-query-mutation.png)

+++

### Resolvers
![EngineerQueryResolver](/images/engineer-query-resolver.png)

+++

![EngineerMutationResolver](/images/engineer-mutation-resolver.png)

+++

### Queries
![EngineerQuery](/images/engineer-query.png)

+++

### Mutations
![EngineerMutation](/images/engineer-mutation.png)

---

## To The Code!

---

## Resources
- <https://www.graphql.com>
- <https://www.howtographql.com>
- <https://dev-blog.apollodata.com>
- <https://blog.graph.cool>

---

## Thank You!