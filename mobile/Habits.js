import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Habit from './Habit'

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and habits when ready
function Habits({ data: { loading, habits } }) {
  if (loading) {
    return <Text style={styles.outer}>Loading</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Text>Habits: The Life Hacking App</Text>
        {habits.map(habit => (
          <Habit key={habit.id} {...habit}/>
        ))}
      </View>
    )
  }
}      

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (Habits here)
export default graphql(gql`
  query allHabits {
    habits {
      id
      name
      records {
        didAction
        date
      }
    }
  }
`)(Habits);
