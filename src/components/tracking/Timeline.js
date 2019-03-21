import React, { Component } from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "1",
          kidImage: "",
          kidName: "Bé Khánh Đáng Yêu",
          date: "20/03/2019",
          pickTime: "11:00 am",
          dropTime: "11:20 am",
          pickAdr: "99 To Hien Thanh, Son Tra, Da Nang",
          dropAdr: "35 Ong Ich Khiem, Hai Chau, Da Nang",
          status: "On the road"
        }
      ]
    };
  }
  render() {
    return (
      <ScrollView style={styles.body}>
        {this.state.data.map(item => (
          <View key={item.id}>
            <View style={styles.kidInfo}>
              <Image style={styles.image} source={item.kidImage} />
              <Text style={styles.nameLabel}>{item.kidName}</Text>
            </View>
            <View style={styles.rideInfo}>
              <View style={styles.div}>
                <Icon
                  name="location"
                  style={styles.locationIcon}
                  color="#04d384"
                />
                <View style={styles.rideDetail}>
                  <Text style={styles.rideLabel}>Pick up </Text>
                  <Text style={styles.text}>
                    {item.pickTime} - {item.date}
                  </Text>
                  <Text style={styles.text}> {item.pickAdr} </Text>
                </View>
              </View>
              <View style={styles.div}>
                <Icon
                  name="location"
                  style={styles.locationIcon}
                  color="#d19302"
                />
                <View style={styles.rideDetail}>
                  <Text style={styles.rideLabel}>Drop off</Text>
                  <Text style={styles.text}>
                    {item.dropTime} - {item.date}
                  </Text>
                  <Text style={styles.text}> {item.dropAdr}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  kidInfo: {
    flexDirection: "row",
    color: "#000000",
    alignSelf: "center",
    alignItems: "center",
    padding: 5
  },
  image: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#ff70bc",
    borderRadius: 100
  },
  nameLabel: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Verdana",
    textAlign: "center",
    left: 5,
    alignItems: "flex-start",
    alignSelf: "center"
  },
  div: {
    flexDirection: "row",
    padding: 5
  },
  locationIcon: {
    fontSize: 26,
    marginLeft: 10
  },
  rideDetail: {
    marginLeft: 10,
    alignItems: "flex-start",
    alignSelf: "center"
  },
  rideLabel: {
    fontWeight: "bold"
  }
});
