import { task } from "./sample";

export const resolvers = {
  Query: {
    hello: () => {
      return 'Hello world with GraphQL'
    },
    greet: (root, { name }) => {
      return `hello ${name}`
    },
    task: () => {
      return task
    }
  }
}