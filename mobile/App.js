import React from 'react'
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo';
import Habits from './Habits'

export default class App extends React.Component {
  constructor(...args) {
    super(...args);

    this.client = new ApolloClient({
      link: new HttpLink({ uri: 'http://localhost:7700/graphql' }),
      cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
    });
  }

  render () {
    return (
      <ApolloProvider client={this.client}>
        <Habits/>
      </ApolloProvider>
    )
  }
}

