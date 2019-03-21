import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DrawerHeader from "../components/DrawerHeader";
import WatchVideoPattern from "../components/tracking/WatchVideoPattern";
import RiderShortcut from "../components/tracking/RiderShortcut";
import GoogleMap from "../components/GoogleMap";
import Timeline from "../components/tracking/Timeline";

export default class TrackingOnTheRoad extends Component {
  static navigationOptions = {
    drawerLabel: "Tracking on the Road",
    drawerIcon: ({ tintColor }) => (
      <Icon name="go-kart-track" style={styles.icon} />
    )
  };

  render() {
    return (
      <View style={[styles.container]}>
        <DrawerHeader navigation={this.props.navigation} title="Tracking" />
        <View style={styles.header}>
          <RiderShortcut />
          <WatchVideoPattern />
        </View>
        <View style={styles.map}>
          <GoogleMap />
        </View>
        <View style={styles.statusBar}>
          <Text style={styles.statusText}> Your kid is on the way</Text>
        </View>
        <Timeline />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 24
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  map: {
    flex: 75
  },
  statusBar: {
    backgroundColor: "#1aa206",
    alignItems: "center"
  },
  statusText: {
    color: "#FFFFFF"
  }
});
