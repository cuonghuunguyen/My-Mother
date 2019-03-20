
import DrawerHeader from "../components/DrawerHeader";
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,

} from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, image: require("./img/Avt.png"), name:"Frank Odalthh", time : "20/04/2017", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:2, image: require("./img/Avt.png"), name:"John DoeLink", time : "05/05/2017", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:3, image: require("./img/Avt.png"), name:"March SoulLaComa", time : "24/06/2017", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:4, image: require("./img/Avt.png"), name:"Finn DoRemiFaso", time : "12/08/2018", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:5, image: require("./img/Avt.png"), name:"Maria More More", time : "23/08/2018" , comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:6, image: require("./img/Avt.png"), name:"Clark June Boom!", time : "30/08/2018" , comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:7, image: require("./img/Avt.png"), name:"The googler", time : "12/12/2018", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
      ],
      profile:[
        {id:1, image: require("./img/Avt.png"), name:"James Smith", phone:"035xxxxxxx", address:"85 To Hien Thanh, Son Tra", bike:"Toyota BY21-H356"},        
      ],
      itemsToShow: 3,
      expanded: false,
    };
      this.showMore = this.showMore.bind(this);
    }

  showMore() {
    this.state.itemsToShow === 3 ? (
      this.setState({ itemsToShow: this.state.data.length, expanded: true })
    ) : (
      this.setState({ itemsToShow: 3, expanded: false })
    )
  }

  render() {
    return (
        <View style={styles.container}>
          <DrawerHeader navigation={this.props.navigation} title="Rider's Profile" />
            <ScrollView>
              <View style={styles.container}>
                  <Image style={styles.avatar} source={this.state.profile[0].image}/>
                      <View style={styles.mainInfo}>
                        <Text style={styles.name}>{this.state.profile[0].name}</Text>
                        {/* <Text style={styles.start}>start</Text> */}
                      </View>
            
                  <View style={styles.body}>
                      <View style={styles.bodyContent}>
                        <Text style={styles.title}>Description:</Text>
                        {/* <Text style={styles.txt}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an</Text> */}
                        <Text style={styles.txt}>Phone : {this.state.profile[0].phone}</Text>
                        <Text style={styles.txt}>Address : {this.state.profile[0].address}</Text>
                        <Text style={styles.title}>Bike information:</Text>
                        <Text style={styles.txt}>Number : {this.state.profile[0].bike}</Text>
                        <Text style={styles.title}>.......</Text>
                        <Text style={styles.title}>Review:</Text>
                        {this.state.data.slice(0,this.state.itemsToShow).map((item, i) => 
                            <View key={item.id} style={styles.cmt}>

                              <Image style={styles.cmtimage} source={item.image}/>
                              <View style={styles.cmtcontent}>
                                  <View style={styles.cmtcontentHeader}>
                                    <Text style={styles.cmtname}>{item.name}</Text>
                                    <Text style={styles.cmttime}>{item.time}</Text>
                                  </View>
                                  <Text style={styles.txt}>{item.comment}</Text>
                              </View>
                            </View>
                        )}                       
                      </View>
                  </View>

                  <View style={styles.review } >                        
                    {this.state.expanded ? (
                      <Text style={styles.titlebutton} onPress={this.showMore}>Show less</Text>
                    ) : (
                      <Text style={styles.titlebutton} onPress={this.showMore}>Show more</Text>
                    )}
                          
                  </View>
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
  header:{
    flexDirection: 'row',
    backgroundColor : '#24e356',
  },
  headerIcon: {
    fontSize: 27,
    color: "#FFFFFF",
    alignSelf:'flex-start',
    
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:30
  },
  mainInfo:{
    marginTop: 160,
    flex: 1,
    alignItems: 'center',
  },
  name:{
    fontSize:25,
    color: "#696969",
  },
  start:{
    fontSize:16,
    color: "#00BFFF",
  },

  bodyContent: {
    flex: 1,
    padding:15,
    textAlign: 'left'
  },
  title:{
    fontSize:18,
    color: "#696969",
    marginTop:10,
  },
  txt:{
    fontSize : 15,
  },
  cmt: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  cmtcontent: {
    marginLeft: 16,
    flex: 1,
  },
  cmtcontentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  cmtseparator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  cmtimage:{
    width:70,
    height:70,
  },
  cmttime:{
    fontSize:11,
    color:"#808080",
  },
  cmtname:{
    fontSize:16,
    fontWeight:"bold",
  },
  review: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    marginBottom:20,
    width:170,
    borderRadius:7,
    backgroundColor: "#24e356",
  },
  titlebutton:{
    fontSize:18,
    color: "#ffffff",
  },
});




