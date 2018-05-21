import { importSchema } from "graphql-import";
import { resolvers } from "./engineer.resolvers";

export const schema = {
  resolvers,
  typeDefs: importSchema("./src/api/engineer/engineer.graphql")
};
