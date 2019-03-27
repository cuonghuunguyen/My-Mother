import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Thumbnail } from "native-base";

export default class KidPicker extends React.Component {
  listKids = [
    {
      id: "369fa90e-f220-416d-b81a-e8d3663605cb",
      first_name: "Clementine",
      last_name: "Everest",
      image: "http://dummyimage.com/158x101.png/dddddd/000000",
      gender: "Female"
    },
    {
      id: "378e7ff2-d8a7-40e7-adc4-b720cb6d256b",
      first_name: "Luke",
      last_name: "L'Hommeau",
      image: "http://dummyimage.com/154x209.bmp/ff4444/ffffff",
      gender: "Male"
    },
    {
      id: "31d16d33-9904-417e-9992-be5ea5349a03",
      first_name: "Karlik",
      last_name: "Lanon",
      image: "http://dummyimage.com/113x122.jpg/ff4444/ffffff",
      gender: "Male"
    },
    {
      id: "e63c96b8-4299-4e50-b4e1-9d4bebf405b2",
      first_name: "Twyla",
      last_name: "Bowen",
      image: "http://dummyimage.com/241x121.jpg/cc0000/ffffff",
      gender: "Female"
    },
    {
      id: "172a8295-79d3-422f-ac0b-9d0fd433a9d7",
      first_name: "Gale",
      last_name: "Rheaume",
      image: "http://dummyimage.com/182x232.jpg/ff4444/ffffff",
      gender: "Female"
    },
    {
      id: "5c6d7a2e-8323-47e4-beb8-1887ba41c583",
      first_name: "Gerek",
      last_name: "Fullegar",
      image: "http://dummyimage.com/116x161.bmp/cc0000/ffffff",
      gender: "Male"
    },
    {
      id: "34d4f259-cbd4-4fc8-a99b-2dcefcd5591d",
      first_name: "Teddy",
      last_name: "Ferraron",
      image: "http://dummyimage.com/113x161.bmp/dddddd/000000",
      gender: "Male"
    },
    {
      id: "c4d8b2f8-6791-4102-a06c-911267edd23c",
      first_name: "Jeffry",
      last_name: "Tyrer",
      image: "http://dummyimage.com/107x206.jpg/ff4444/ffffff",
      gender: "Male"
    },
    {
      id: "29f08c44-e04e-4056-ac4f-6272925b16c2",
      first_name: "Heall",
      last_name: "Morcom",
      image: "http://dummyimage.com/103x154.png/cc0000/ffffff",
      gender: "Male"
    },
    {
      id: "ba16f0e6-761b-408d-9fab-fe7ceba2c7ae",
      first_name: "Aurore",
      last_name: "Glavis",
      image: "http://dummyimage.com/229x209.bmp/cc0000/ffffff",
      gender: "Female"
    }
  ];

  render() {
    const { setKidID } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Kids</Text>
        <View style={styles.kids}>
          <Icon name="adduser" style={styles.icon} />
          <ScrollView horizontal style={styles.kidList}>
            {this.listKids.map(kid => (
              <TouchableOpacity
                onPress={() => setKidID(kid.id)}
                key={kid.id}
                style={styles.kidIcon}
              >
                <Thumbnail source={{ uri: kid.image }} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 50,
    flex: 0.2
  },
  kidList: {
    flex: 0.8
  },
  kidIcon: {
    marginHorizontal: 5
  },
  kids: {
    flex: 0.13,
    flexDirection: "row"
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 15
  },
  container: {
    flex: 1,
    color: "#000000",
    padding: 10
  }
});
