import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when ready
function Habits({ data: { loading, habits } }) {
  if (loading) {
    return <Text style={styles.outer}>Loading</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Text>Habits: The Life Hacking App</Text>
        {habits.map(habit => (
          <View key={habit.id} style={styles.wrapper}>
            <View>
              <Text style={styles.header}>{habit.name}</Text>
            </View>
         </View>
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
