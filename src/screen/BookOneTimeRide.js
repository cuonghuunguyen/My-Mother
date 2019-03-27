/* eslint-disable react/jsx-no-bind */
import React from "react";
import { Container, Button, Form, Content } from "native-base";
import DateTimePicker from "react-native-modal-datetime-picker";
import { TouchableOpacity, Text, Alert } from "react-native";
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
      isTimePickerVisible: false
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
    AxiosInstance.post("/book", {
      data: {
        user_id: 1,
        kid_id: kidId,
        lat_start: startPoint.lat,
        long_start: startPoint.long,
        lat_end: destinationPoint.lat,
        long_end: destinationPoint.long,
        start_time: startTime,
        end_point: destinationPointTitle,
        start_point: startPointTitle
      }
    }).then(() => {
      Alert.alert("Success!!", "You have booked this ride successfully");
    }).catch((error) => {
      Alert.alert(`Failed!!", "Booked not successfully\n Error: ${error}`);
    });
  };

  render() {
    const { navigation } = this.props;
    const {
      startPointTitle,
      destinationPointTitle,
      startTime,
      isTimePickerVisible
    } = this.state;
    return (
      <Container>
        <DrawerHeader title="Book a ride" navigation={navigation} />
        <Content>
          <KidPicker setKidID={this.setKidID.bind(this)} />

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

            <Button rounded success onPress={this.confirmBooking}>
              <Text>Success</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
