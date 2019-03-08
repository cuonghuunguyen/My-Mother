import React, { Component } from "react";
import { View, Image, ImageBackground, Text, StyleSheet } from "react-native";
// import { FBLoginButton } from "../components/login/FBLoginButton";

var FBLoginButton = require("../components/login/FBLoginButton");
var GGLoginButton = require("../components/login/GGLoginButton");

export default class Login extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../../assets/images/backgroundImage.jpeg")}
        style={styles.imageBackground}
      >
        <View style={styles.overlay} />
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.logoHolder} />
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.logo}
            />
          </View>
          <View style={styles.body}>
            <Text style={styles.slogan}>
              We provide safe, convenient, realiable and licensed service
            </Text>
            <Text style={styles.slogan}> for kids' transportation</Text>
          </View>
          <Text style={styles.textLabel}>Sign in</Text>

          <View style={styles.buttonGroup}>
            <FBLoginButton />
            <Text style={styles.text}> or </Text>
            <GGLoginButton />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%"
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.25,
    backgroundColor: "#6bd684"
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  header: {
    top: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1.5
  },
  logoHolder: {
    height: 200,
    width: 200,
    alignSelf: "center",
    backgroundColor: "white",
    opacity: 0.5,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    position: "absolute",
    height: 150,
    width: 150,
    justifyContent: "center",
    alignSelf: "center"
  },
  body: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  slogan: {
    fontSize: 23,
    fontWeight: "bold",
    fontFamily: "Verdana",
    textAlign: "center",
    color: "#FFFFFF",
    textShadowOffset: { 20: 30 },
    textShadowColor: "#490059",
    textShadowRadius: 10
  },
  textLabel: {
    fontSize: 24,
    fontFamily: "Roboto",
    alignSelf: "center",
    color: "#000000",
    fontWeight: "bold",
    textShadowOffset: { 20: 30 },
    textShadowColor: "#FFFFFF",
    textShadowRadius: 10
  },
  text: {
    fontSize: 20,
    fontFamily: "Roboto",
    alignSelf: "center",
    color: "#000000"
  },
  buttonGroup: {
    padding: 10,
    alignItems: "center",
    flex: 1,
    backgroundColor: "transparent"
  }
});
