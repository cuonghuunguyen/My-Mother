
import DrawerHeader from "../components/DrawerHeader";
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Icon,
  FlatList
} from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
      {id:1, image: require("./img/Avt.png"), name:"Frank Odalthh", date : "20/04/2017", time : "11:00", pick:"99 To Hien Thanh, Son Tra, Da Nang",drop:"35 Ong Ich Khiem, Hai Chau, Da Nang",status :"Done"},
      {id:2, image: require("./img/Avt.png"), name:"John DoeLink", date : "05/05/2017", time : "15:00", pick:"101B Le Huu Trac, Son Tra, Da Nang",drop:"35 Ong Ich Khiem, Hai Chau, Da Nang",status :"Canceled"},
      {id:3, image: require("./img/Avt.png"), name:"March SoulLaComa", date : "24/06/2017", time : "16:00", pick:"99 To Hien Thanh, Son Tra, Da Nang",drop:"60 Cao Thang, Hai Chau, Da Nang",status :"Done"},
      {id:4, image: require("./img/Avt.png"), name:"Finn DoRemiFaso", date : "12/08/2018", time : "12:30", pick:"101B Le Huu Trac, Son Tra, Da Nang",drop:"138 Ngo Quyen, Son Tra, Da Nang",status :"Done"},
      {id:5, image: require("./img/Avt.png"), name:"Maria More More", date : "23/08/2018" ,time : "09:30",  pick:"80B Le Duan, Hai Chau Da Nang",drop:"60 Cao Thang, Hai Chau, Da Nang",status :"Canceld"},
    ],
  };
  }

  displayStatus(stt) {
    if (stt == "Done") {
      return (
        <Text style={styles.txtDone}>Status : {stt}</Text>
      );
    } else {
      return (
        <Text style={styles.txtCancel}>Status : {stt}</Text>        
      );
    }
}

  render() {
    return (
        <View style={styles.container}>
          <DrawerHeader navigation={this.props.navigation} title="History Rides" />
            <ScrollView>
            <View style={styles.body}>
                
                    {this.state.data.map((item, i) => 
                        <View key={item.id} style={styles.cmt}>
                          <Image style={styles.cmtimage} source={item.image}/>
                          <View style={styles.cmtcontent}>
                              
                              <Text  style={styles.cmtname}>{item.name}</Text>

                              <Text style={styles.txt}>Date : {item.date}</Text>

                              <Text style={styles.txt}>Time : {item.time}</Text>

                              <Text style={styles.txt}>Pick up : {item.pick}</Text>

                              <Text style={styles.txt}>Drop off : {item.drop}</Text>

                              {this.displayStatus(item.status)}                                                          
                          </View>
                        </View>
                        
                    )} 
                                        
            </View>
            </ScrollView>
        </View>
    );
  }
}
    
const styles = StyleSheet.create({
  container:{
    flex : 1,
  },
  body: {
    flex: 1,
    padding:15,
    textAlign: 'left'
  },
  cmt: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  cmtimage:{
    width:90,
    height:90,
  },
  cmtname:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom : 10,
  },
  txt:{
    fontSize : 15,
  },
  txtDone : {
    fontSize : 15,
    color : "green",
  },
  txtCancel : {
    fontSize : 15,
    color : "red",
  },
  cmtcontent: {
    marginLeft: 16,
    flex: 1,
  },

});




