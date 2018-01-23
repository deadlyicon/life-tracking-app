// app/src/resolvers.js
const habits = [{
  id: 1,
  name: 'exercise',
}, {
  id: 2,
  name: 'brush teeth'

}]

let nextId = 3;

export const resolvers = {
  Query: {
    habits: () => {
      return habits;
    },
    habit: (root, { id }) => {
      return habits.find(habit => habit.id == id);
    }
  },
  Mutation: {
    addHabit: (root, args) => {
      const newHabit = { id: nextId++, name: args.name };
      habits.push(newHabit);
      return newHabit;
    },
  },
};
