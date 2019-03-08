import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import DrawerHeader from "../components/DrawerHeader";
import GoogleMap from "../components/GoogleMap";

export default class Home extends Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={[styles.icon, { tintColor: tintColor }]} />
    )
  };

  render() {
    return (
      <View style={[styles.container]}>
        <DrawerHeader navigation={this.props.navigation} title="Home" />
        <View style={{flex:85}}>
                    <GoogleMap/>
                </View>
                <View style={{flex:15, backgroundColor:'white'}}>
                    <View style={styles.book}>
                            <Text style={{ flex:50,height:50, color:'black', fontSize:24,alignItems: 'center', justifyContent:'center', marginTop:10}}>
                                    Book the ride now!
                            </Text>
                            <Button style={{height:80, width:100,marginRight:30}}
                                    title="Book"
                                    color="#841584"
                                    onPress={() => alert('This is a book btn!')}
                            />
                    </View>
                </View>
      </View>
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
  book:{
    flex:1,
    flexDirection: "row",
    alignItems: 'center',
    marginRight:10,
    marginLeft:10
  }
});
