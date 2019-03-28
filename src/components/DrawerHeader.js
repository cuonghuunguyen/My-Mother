import React from "react";
import { Text, StyleSheet } from "react-native";
import { Header, Left, Right, Body } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import KidPicker from "./tracking/KidPicker";

export default function DrawerHeader(props) {
  return (
    <Header style={styles.header}>
      <Left>
        <Icon
          name="bars"
          onPress={props.navigation.openDrawer}
          style={styles.headerIcon}
        />
      </Left>
      <Body>
        <Text style={styles.title}>{props.title}</Text>
      </Body>
      <Right>
        <KidPicker />
      </Right>
    </Header>
  );
}

const styles = StyleSheet.create({
  headerIcon: {
    fontSize: 27,
    color: "#FFFFFF"
  },
  header: {
    backgroundColor: "#29ba18"
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontFamily: "Roboto"
  }
});
