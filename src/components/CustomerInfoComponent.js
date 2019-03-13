import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

class CustomerInfoComponent extends Component {
  render() {
    let {customer} = this.props;
    return (
      <View>
            <View style={{flexDirection: "row"}}>
                <Icon name="user" style={[styles.icon]} />
                <Text style={{ marginLeft:15, marginTop:5, justifyContent:'center', fontWeight:'bold', fontSize: 16 }}>{customer.name} </Text>
            </View>
            <View style={{flexDirection: "row", marginTop:10}}>
                <Icon name="mail" style={[styles.icon]} />
                <Text style={{marginLeft:15, marginTop:5, justifyContent:'center', fontWeight:'bold', fontSize: 16}}>{customer.email}</Text>
            </View>
            <View style={{flexDirection: "row", marginTop: 15}}>
                <Icon name="phone" style={[styles.icon]} />
                <Text style={{marginLeft:15, marginTop:5, justifyContent:'center', fontWeight:'bold', fontSize: 16}}>{customer.phone}</Text>
            </View>
            <View style={{flexDirection: "row", marginTop: 15}}>
                <Icon name="home" style={[styles.icon]} />
                <Text style={{marginLeft:15, marginTop:5, justifyContent:'center', fontWeight:'bold', fontSize: 16}}>{customer.address}</Text>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    icon:{
        fontSize: 26
    }
});

export default CustomerInfoComponent;
