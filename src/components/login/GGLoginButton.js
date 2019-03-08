import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
// import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin";

export default class GGLoginButton extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.GGLoginButton}>
          <Image
            style={styles.google_icon}
            source={require("../../../assets/images/google_icon.jpg")}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.text}> Continue with Google </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  GGLoginButton: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: 200,
    padding: 5,
    backgroundColor: "#dd4b39"
  },
  google_icon: {
    height: 25,
    width: 25
  },
  textWrapper: {
    width: 160,
    alignItems: "center"
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    alignSelf: "center"
  }
});

module.exports = GGLoginButton;
