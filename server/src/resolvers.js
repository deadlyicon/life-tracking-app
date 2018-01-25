import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import moment from 'moment';
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

const DATE_FORMAT = 'YYYYMMDD'

export const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new moment(value, DATE_FORMAT)
    },
    serialize(value) {
      return value;
    },
    parseLiteral(ast) {
      return new moment(ast.value, DATE_FORMAT).format(DATE_FORMAT); //This should protect against bad data
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

    deleteAction: (root, { input }) => {
      const { habitId, date } = input
      const habit = getHabit(habitId)
      habit.records = habit.records.filter(record => record.date != date)
      return habit
    }
  },
};
