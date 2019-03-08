import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { AccessToken } from "react-native-fbsdk";
const FBSDK = require("react-native-fbsdk");
const { LoginManager } = FBSDK;
export default class FBLoginButton extends Component {
  login(dispatch) {
    LoginManager.logInWithReadPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            console.log(data);
            if (data.accessToken) {
              dispatch(
                loginActions.fetchLoginWithAPI(
                  data.accessToken,
                  Constants.API_Facebook
                )
              );
            }
          });
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.FBLoginButton}
          onPress={() => this.login(this.props.dispatch)}
        >
          <Image
            style={styles.facebook_icon}
            source={require("../../../assets/images/facebook_icon.png")}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.text}> Continue with Facebook </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  FBLoginButton: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: 200,
    padding: 5,
    backgroundColor: "#4267b2"
  },
  facebook_icon: {
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
module.exports = FBLoginButton;
