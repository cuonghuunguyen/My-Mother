import React, { Component } from 'react'
import {View, Image} from 'react-native';

export class LandingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
  componentDidMount(){
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(()=>{
             // Add your logic for the transition
            this.props.navigation.navigate('Home', {
              Id: 1 })
            }, 3000);
     
   }

   componentWillUnmount(){
        clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
   }

  render() {                                                                                                          
    return (
        <View style={ {flex:1}}>
            <View style={{flex:10}}>
            </View>
              <View style = {{flex:40, alignItems:'center'}}>
                    <Image  style={{width:250, height:250}}
                      source={require('../../assets/images/logo.png')}/>
              </View>
              <View style={{flex:20}}>
              </View>
              <View style = {{flex:30, alignItems:'center'}}>
                  <Image source={require('../../assets/images/loading.gif')} style={{width:90, height:90}}></Image>
              </View>
        </View>
     
    )
  }
}

export default LandingScreen