import {
  InMemoryCache,
  //createHttpLink,
  ApolloClient,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});
console.log("apollo client works!");

export default client;
