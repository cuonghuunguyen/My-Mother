import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View } from "native-base";
import DialogPopup from '../dialog/dialog-popup'


export default class WatchVideoPattern extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.contactContainer} >
          <Icon name="video" style={[styles.contactIcon]} />
          <Text style={[styles.contactLabel]} onPress={() => this.refs.videostream.show()}> Watch video</Text>
        </TouchableOpacity>
        <DialogPopup ref='videostream' style={{flex:1}} height={0.9} >
          <View>
            <Text>
              Live Stream Screen video here!
            </Text>
            <View>
                <TouchableOpacity onPress={()=>this.refs.videostream.hide()}>
                    <Text style={styles.closeButton}>Close</Text>
                </TouchableOpacity>
            </View>
          </View>
          </DialogPopup>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1aa206"
  },
  contactIcon: {
    fontSize: 30,
    alignSelf: "center",
    color: "#FFFFFF"
  },
  contactLabel: {
    fontSize: 14,
    alignSelf: "center",
    fontFamily: "Verdana",
    textAlign: "center",
    color: "#FFFFFF"
  },
  modalContent: {
    flexDirection:'row',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    height:0.95
  },
  closeButton: {
    color: 'red',
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    borderRadius: 3,
    textAlign: 'center',
    margin: 10,
    alignSelf: 'flex-end',
  } 
});
