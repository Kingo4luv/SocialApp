import React, { Component } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";

export default class LoadingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> loadng Screen </Text>{" "}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
