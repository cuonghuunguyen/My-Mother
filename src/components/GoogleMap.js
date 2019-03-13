import React, { Component } from 'react';
import { StyleSheet, Platform, Alert } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import GPSState from 'react-native-gps-state';

export default class GoogleMap extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      latitude: 0,
      longitude: 0
    };
  }

  showAlert = () => {
    Alert.alert(
      "Use Location ?",
      "We need your GPS function turned on to give you an accurate service. Please enable GPS to continue to use our app.",
      [
        {
          text: "Cancel",
          onPress: async () => {
            Alert.alert('', 'It`s a shame that you do not allowed us to use location :(')
          },
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            GPSState.openLocationSettings();
            this.getCurrentPosition();
          }
        }
      ],
      { cancelable: false }
    );
  };

  getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let { latitude, longitude } = position.coords;
        this.setState({ latitude, longitude });
      },
      (error) => {
        alert('Can not get your position');
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 100000 },
    );
  }

  componentDidMount() {
    GPSState.getStatus().then(status => {
      if (
        (Platform.OS === "android" && status === 1) ||
        (Platform.OS === "ios" && status === 2)
      ) {
        this.showAlert();
      } else if (status === 0 || status === 4 || status === 3) {
        this.getCurrentPosition();
      }
    });
  }

  componentWillMount() {
    GPSState.addListener((status) => {
      switch (status) {
        case GPSState.NOT_DETERMINED:
          alert('Please, allow the location, for us to do amazing things for you!')
          break;

        case GPSState.RESTRICTED:
          this.showAlert();
          break;

        case GPSState.DENIED:
          alert('It`s a shame that you do not allowed us to use location :(')
          break;

        case GPSState.AUTHORIZED_ALWAYS:
        case GPSState.AUTHORIZED_WHENINUSE:
          this.getCurrentPosition();
          break;
      }
    })
    GPSState.requestAuthorization(GPSState.AUTHORIZED_WHENINUSE)
  }

  componentWillUnmount() {
    GPSState.removeListener()
  }

  render() {
    return (
      <MapView style={styles.container}
        region={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 1,
          longitudeDelta: 1
      
        }}
        showsUserLocation={true}
        followUserLocation={true}
        showsMyLocationButton={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
        loadingEnabled={true}
        provider={PROVIDER_GOOGLE}
        onRegionChange={this.onRegionChange}
      >
        <Marker
          coordinate={{
            latitude: this.state.latitude,
            longitude: this.state.longitude
          }}
          title={"Your Location"}
        />
      </MapView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  }
});
