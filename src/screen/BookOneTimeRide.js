/* eslint-disable react/jsx-no-bind */
import React from "react";
import { Container, Button, Form, Content, Footer, Left, Body, Right } from "native-base";
import DateTimePicker from "react-native-modal-datetime-picker";
import { TouchableOpacity, Text, Alert, View } from "react-native";
import KidPicker from "../components/KidPicker";
import DrawerHeader from "../components/DrawerHeader";
import LocationPicker from "../components/LocationPicker";
import AxiosInstance from "../api/AxiosInstance";

export default class BookOneTimeRide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kidId: "",
      startPoint: {
        lat: 0,
        long: 0
      },
      startPointTitle: "",
      destinationPoint: {
        lat: 0,
        long: 0
      },
      destinationPointTitle: "",
      startTime: new Date(),
      isTimePickerVisible: false,
      loading: false
    };
  }

  showTimePicker = () => this.setState({ isTimePickerVisible: true });

  hideTimePicker = () => this.setState({ isTimePickerVisible: false });

  handleTimePicked = (time) => {
    this.setState({
      startTime: time
    });
    this.hideTimePicker();
  };

  setKidID = kidId => this.setState({ kidId });

  setStartPointInfo = (startPointInfo) => {
    this.setState({
      startPoint: startPointInfo.geometry.location,
      startPointTitle: startPointInfo.formatted_address
    });
  };

  setDestinationPointInfo = (destinationPointInfo) => {
    this.setState({
      destinationPoint: destinationPointInfo.geometry.location,
      destinationPointTitle: destinationPointInfo.formatted_address
    });
  };

  confirmBooking = () => {
    const {
      kidId,
      startPoint,
      startTime,
      destinationPoint,
      destinationPointTitle,
      startPointTitle
    } = this.state;
    console.log(this.state);
    if (!kidId || !startPoint || !startTime || !destinationPoint.lat || !destinationPoint.lng || !startPoint.lat || !startPoint.lng) {
      Alert.alert("Error", "You have to fill out all the field");
      return;
    }
    this.setState({loading: true});

    AxiosInstance.post("book", {
      user_id: 1,
      kid_id: kidId,
      lat_start: startPoint.lat,
      long_start: startPoint.lng,
      lat_end: destinationPoint.lat,
      long_end: destinationPoint.lng,
      start_time: `${startTime.getUTCFullYear()}-${
        (`00${startTime.getUTCMonth() + 1}`).slice(-2)}-${
        (`00${startTime.getUTCDate()}`).slice(-2)} ${
        (`00${startTime.getUTCHours()}`).slice(-2)}:${
        (`00${startTime.getUTCMinutes()}`).slice(-2)}:${
        (`00${startTime.getUTCSeconds()}`).slice(-2)}`,
      end_point: destinationPointTitle,
      start_point: startPointTitle
    }).then((res) => {
      Alert.alert("Success!!", "You have booked this ride successfully");
      console.log(res.data);
      this.setState({loading: false});
    }).catch((error) => {
      Alert.alert("Failed!!", `Booked not successfully\n Error: ${error}`);
      console.log(error.response);
      this.setState({loading: false});
    });
  };

  render() {
    const { navigation } = this.props;
    const {
      startPointTitle,
      destinationPointTitle,
      startTime,
      isTimePickerVisible,
      kidId,
      loading
    } = this.state;
    return (
      <Container>
        <DrawerHeader title="Book a ride" navigation={navigation} />
        <Content>

          <KidPicker setKidID={this.setKidID.bind(this)} choosen={kidId} />
          <Form>
            <LocationPicker
              callBack={startPointInfo => this.setStartPointInfo(startPointInfo)
              }
              value={startPointTitle}
              title="Start Point"
            />
            <LocationPicker
              callBack={destinationtPointInfo => this.setDestinationPointInfo(destinationtPointInfo)
              }
              value={destinationPointTitle}
              title="Destination Point"
            />
            <TouchableOpacity onPress={this.showTimePicker}>
              <Text style={{ fontWeight: "bold", padding: 10, fontSize: 20 }}>
                Start time:{" "}
                <Text
                  style={{
                    textDecorationLine: "underline",
                    padding: 10,
                    fontSize: 18,
                    color: "#1f427a"
                  }}
                >
                  {startTime.toLocaleString()}
                </Text>
              </Text>
            </TouchableOpacity>
            <DateTimePicker
              isVisible={isTimePickerVisible}
              onConfirm={this.handleTimePicked}
              onCancel={this.hideTimePicker}
              mode="datetime"
            />

            <View style={{justifyContent: "center", alignItems: "center", width: "100%"}}>
              <Button rounded success onPress={this.confirmBooking} disabled={loading}>
                <Text style={{padding: 10, fontSize: 20 }}>Book This Ride Now!</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}
