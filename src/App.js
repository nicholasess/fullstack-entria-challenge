/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../createRelayEnvironment";

const query = graphql`
  query AppQuery {
    users {
      edges {
        node {
          name
        }
      }
    }
  }
`;

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <QueryRenderer
          environment={environment}
          query={query}
          render={({ error, props }) => {
            if (error) {
              return <Text>{"aaa: " + error.message}</Text>;
            } else if (props) {
              console.log("====================================");
              console.log("props", props);
              console.log("====================================");
              return <Text>is great!</Text>;
            }
            return <Text>Loading...</Text>;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
