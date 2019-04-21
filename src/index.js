import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://api.graph.cool/simple/v1/cjtk3okib547g0182680rna24",
    }),
    cache: new InMemoryCache(),
    onError: ({networkError, graphQLErrors}) => {
        console.log('networkError', networkError);
        console.log('graphQLErrors', graphQLErrors);
    }
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);