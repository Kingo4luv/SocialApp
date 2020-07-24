import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class MessageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Message Screen</Text>
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
