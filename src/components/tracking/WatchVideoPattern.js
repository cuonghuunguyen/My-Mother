import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class WatchVideoPattern extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.contactContainer}>
        <Icon name="video" style={[styles.contactIcon]} />
        <Text style={[styles.contactLabel]}> Watch video</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1aa206"
  },
  contactIcon: {
    fontSize: 30,
    alignSelf: "center",
    color: "#FFFFFF"
  },
  contactLabel: {
    fontSize: 14,
    alignSelf: "center",
    fontFamily: "Verdana",
    textAlign: "center",
    color: "#FFFFFF"
  }
});
