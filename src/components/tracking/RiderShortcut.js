import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default class RiderShortcut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: "1",
        riderImage: "",
        riderName: "Đỗ Phú Khánh"
      }
    };
  }
  render() {
    const { riderImage, riderName } = this.state.data;
    return (
      <View style={styles.profileWrapper}>
        <Image style={styles.image} source={riderImage} />
        <View style={styles.nameArea}>
          <Text style={styles.nameText}> {riderName}</Text>
          <Text style={styles.link}> View rider's profile</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  profileWrapper: {
    flexDirection: "row",
    margin: 5
  },
  image: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#42c5f4",
    borderRadius: 100
  },
  nameArea: {
    flexDirection: "column",
    left: 5,
    alignItems: "flex-start",
    alignSelf: "center"
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Verdana",
    textAlign: "center",
    color: "#000000"
  },
  link: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Verdana",
    textAlign: "center",
    color: "#1aa206"
  }
});
