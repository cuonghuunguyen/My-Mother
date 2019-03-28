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
      id: "1",
      first_name: "Clementine",
      last_name: "Everest",
      image: "http://dummyimage.com/158x101.png/dddddd/000000",
      gender: "Female"
    },
    {
      id: "2",
      first_name: "Luke",
      last_name: "L'Hommeau",
      image: "http://dummyimage.com/154x209.bmp/ff4444/ffffff",
      gender: "Male"
    },
    {
      id: "3",
      first_name: "Karlik",
      last_name: "Lanon",
      image: "http://dummyimage.com/113x122.jpg/ff4444/ffffff",
      gender: "Male"
    },
    {
      id: "4",
      first_name: "Twyla",
      last_name: "Bowen",
      image: "http://dummyimage.com/241x121.jpg/cc0000/ffffff",
      gender: "Female"
    },
    {
      id: "5",
      first_name: "Gale",
      last_name: "Rheaume",
      image: "http://dummyimage.com/182x232.jpg/ff4444/ffffff",
      gender: "Female"
    },
    {
      id: "6",
      first_name: "Gerek",
      last_name: "Fullegar",
      image: "http://dummyimage.com/116x161.bmp/cc0000/ffffff",
      gender: "Male"
    },
    {
      id: "7",
      first_name: "Teddy",
      last_name: "Ferraron",
      image: "http://dummyimage.com/113x161.bmp/dddddd/000000",
      gender: "Male"
    },
    {
      id: "8",
      first_name: "Jeffry",
      last_name: "Tyrer",
      image: "http://dummyimage.com/107x206.jpg/ff4444/ffffff",
      gender: "Male"
    },
  ];

  render() {
    const { setKidID, choosen } = this.props;
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
                style={{ marginHorizontal: 5, backgroundColor: `${choosen === kid.id ? "blue" : "transparent"}`}}
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
