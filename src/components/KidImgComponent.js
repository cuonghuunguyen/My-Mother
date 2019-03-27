import React from "react";
import { Text, View, Image, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default (props) => {
  const { imageUri, name } = props;
  return (
    <TouchableOpacity
      onPress={() => Alert.alert("You tapped the button!")}
      style={{
        height: 130,
        width: 130,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: "#dddddd"
      }}
    >
      <View style={{ flex: 2 }}>
        <Image
          source={imageUri}
          style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
        />
      </View>
      <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};
