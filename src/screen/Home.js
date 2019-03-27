import React, { Component, Fragment } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Pusher from "pusher-js/react-native";
import DrawerHeader from "../components/DrawerHeader";
import GoogleMap from "../components/GoogleMap";

export default class Home extends Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: () => <Icon name="home" style={styles.icon} />
  };

  componentDidMount() {
    Pusher.logToConsole = true;
    const pusher = new Pusher("8f9ce1a017d848e54662", {
      cluster: "ap1",
      forceTLS: true
    });

    const channel = pusher.subscribe("1sd32f13asd1f3asdf");

    channel.bind("new_location_tracker", (data) => {
      alert(JSON.stringify(data));
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <Fragment>
        <DrawerHeader navigation={navigation} title="Home" />
        <View style={[styles.container]}>
          <View style={{ flex: 85 }}>
            <GoogleMap />
          </View>
          <View style={{ flex: 15, backgroundColor: "white" }}>
            <View style={styles.book}>
              <Text
                style={{
                  flex: 50,
                  height: 50,
                  color: "black",
                  fontSize: 24,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10
                }}
              >
                Book the ride now!
              </Text>
              <Button
                style={{ height: 80, width: 100, marginRight: 30 }}
                title="Book"
                color="#841584"
                onPress={() => alert("This is a book btn!")}
              />
            </View>
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    fontSize: 24
  },
  book: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10
  }
});
