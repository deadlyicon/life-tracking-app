// app/src/schema.js
import {  makeExecutableSchema } from 'graphql-tools';

import { resolvers } from './resolvers'; // Will be implemented at a later stage.

const typeDefs = `
    scalar Date

    type Habit {
      id: ID!
      name: String
      records: [Record]
    }

    type Record {
      date: Date
      didAction: Boolean 
    }


    # This type specifies the entry points into our API. 
    type Query {
      habits: [Habit] #List of habits
      habit(id: ID!): Habit
    }

    # The mutation root type, used to define all mutations.
    type Mutation {
      # A mutation to add a new habit to the list of habits
      addHabit(name: String!): Habit
      recordAction(input: RecordActionInput!): Habit
      deleteAction(input: DeleteActionInput!): Habit
    }

    input RecordActionInput {
      habitId: ID!
      date: Date!
      didAction: Boolean!
    }

    input DeleteActionInput {
      habitId: ID!
      date: Date!
    }
    `;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };