import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
// app/src/resolvers.js
const habits = [{
  id: 1,
  name: 'exercise',
  records: []
}, {
  id: 2,
  name: 'brush teeth',
  records: []
}]

let nextId = 3;

const getHabit = (id) => {
  return habits.find(habit => habit.id == id)
}

export const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value;
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
  Query: {
    habits: () => {
      return habits;
    },
    habit: (root, { id }) => {
      getHabit(id)
    }
  },
  Mutation: {
    addHabit: (root, args) => {
      const newHabit = { id: nextId++, name: args.name };
      habits.push(newHabit);
      return newHabit;
    },
    recordAction: (root, { input }) => {
      const { habitId, date, didAction } = input
      const habit = getHabit(habitId)
      const existingRecord =  habit.records.find(record => record.date == date)
      if (existingRecord) {
        existingRecord.didAction = didAction
      } else {
        habit.records.push({ date, didAction })
      }
      return habit
    },
  },
};
