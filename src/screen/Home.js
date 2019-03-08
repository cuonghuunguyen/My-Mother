import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import DrawerHeader from "../components/DrawerHeader";

export default class Home extends Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={[styles.icon, { tintColor: tintColor }]} />
    )
  };

  render() {
    return (
      <View>
        <DrawerHeader navigation={this.props.navigation} title="Home" />
        <Text>Hello, We are my mother</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 24
  }
});
