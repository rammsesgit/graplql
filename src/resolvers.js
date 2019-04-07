import { task } from "./sample";

import User from "./models/User";

export const resolvers = {
  Query: {
    hello: () => {
      return 'Hello world with GraphQL'
    },
    greet: (root, { name }, { other }) => {
      console.log(other);
      return `hello ${name}`
    },
    tasks: () => {
      return task
    },
    Users: async () => {
      return await User.find()
    }
  },

  Mutation: {
    createTask(_, { input }) {
      input._id = task.length
      task.push(input)
      return input
    },
    async createUser(_, { input }) {
      const newUser = new User(input)
      await newUser.save()
      return newUser;
    },
    async deleteUser(_, { _id }) {
      return await User.findOneAndDelete(_id)
    },
    async updateUser(_, { _id, input }) {
      return await User.findOneAndUpdate(_id, input, { new: true })
    }
  }
}