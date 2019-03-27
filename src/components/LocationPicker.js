import React, { Fragment } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Container, Header, Content, Left, Body, Title, Right } from "native-base";
import { Modal, Alert, TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default class LocationPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  toggleModal() {
    const { isModalOpen } = this.state;
    this.setState({ isModalOpen: !isModalOpen });
  }

  render() {
    const { callBack, value, title } = this.props;
    const { isModalOpen } = this.state;

    return (
      <Fragment>
        <Modal animationType="slide" transparent={false} visible={isModalOpen}>
          <Container>
            <Header>
              <Left>
                <Icon name="close" onPress={() => this.toggleModal()} style={{fontSize: 24}} />
              </Left>
              <Body>
                <Title>Choose Location</Title>
              </Body>
              <Right />
            </Header>
            <Content>
              <GooglePlacesAutocomplete
                placeholder="Search"
                minLength={2} // minimum length of text to search
                autoFocus
                returnKeyType="search" // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                keyboardAppearance="light" // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
                listViewDisplayed="auto" // true/false/undefined
                fetchDetails
                renderDescription={row => row.description} // custom description render
                onPress={(data, detail = null) => {
                  if (detail != null) {
                    this.toggleModal();
                    callBack(detail);
                  } else Alert("Ops!", "somethings not right here!");
                }}
                getDefaultValue={() => ""}
                query={{
                  // available options: https://developers.google.com/places/web-service/autocomplete
                  key: "AIzaSyBtwS2ag7Liair4xjOdROInUKenq2XXo1w",
                  language: "vi", // language of the results
                  types: "geocode" // default: 'geocode'
                }}
                styles={{
                  textInputContainer: {
                    width: "100%"
                  },
                  description: {
                    fontWeight: "bold"
                  },
                  predefinedPlacesDescription: {
                    color: "#1faadb"
                  }
                }}
                nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                GoogleReverseGeocodingQuery={
                  {
                    // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                  }
                }
                GooglePlacesSearchQuery={{
                  // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                  rankby: "distance"
                }}
                GooglePlacesDetailsQuery={{
                  // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                  fields: "formatted_address"
                }}
                filterReverseGeocodingByTypes={[
                  "locality",
                  "administrative_area_level_3"
                ]} // filter the reverse geocoding results by types
                // ['locality', 'administrative_area_level_3'] if you want to display only cities
                debounce={200}
              />
            </Content>
          </Container>
        </Modal>
        <TouchableOpacity onPress={() => this.toggleModal()}>
          <View style={{height: 80}}>
            <Text style={{fontWeight: "bold", padding: 10, fontSize: 20}}>{title}</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={{marginLeft: 10, marginRight: 10, fontSize: 19, borderBottomColor: "red", borderBottomWidth: 1}}>{value || "Choose a location..."}</Text>
          </View>
        </TouchableOpacity>
      </Fragment>
    );
  }
}
