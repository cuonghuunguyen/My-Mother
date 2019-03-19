import React from "react";
import {
  Image,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  View,
  Text
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  createAppContainer,
  createDrawerNavigator,
  DrawerItems
} from "react-navigation";
import { colors } from "./../constant/colors";
import Home from "../screen/Home";
import Landing from "../screen/LandingScreen";
import Rider from "../screen/RiderProfile";
import CustomerProfile from "../screen/CustomerProfile";
import RidesHistory from "../screen/HistoryRides";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  view: {
    flex: 0.3,
    backgroundColor: "#24e356",
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "center"
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 4,
    borderStyle: "solid",
    marginLeft: 10,
    borderColor: "#3f8955"
  },
  customerText: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 20
  },
  customerName: {
    flex: 0.5,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  customerInfo: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "center"
  },
  textCustomerName: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  textCustomerInfo: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  drawerItem: {
    marginTop: -10
  }
});

const CustomDrawerComponent = props => (
  <SafeAreaView style={styles.container}>
    <View style={styles.view}>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/images/avatar.png")}
        />
      </View>

      <View style={styles.customerText}>
        <View style={styles.customerName}>
          <Text style={styles.textCustomerName}>Cu Tèo</Text>
        </View>
        <View style={styles.customerInfo}>
          <Text style={styles.textCustomerInfo}>200 point | Silver</Text>
        </View>
      </View>
    </View>
    <ScrollView style={styles.drawerItem}>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home
    },
    Landing: {
      screen: Landing
    },
    Rider:{
      screen : Rider
    },
    CustomerProfile:{
      screen:CustomerProfile
    },
    RidesHistory:{
      screen : RidesHistory
    }
  },
  {
    contentComponent: CustomDrawerComponent,
    initialRouteName: "RidesHistory",
    drawerWidth: (width / 4) * 3,
    contentOptions: {
      activeTintColor: colors.activeRedColor,
      inactiveTintColor: colors.initRedColore,
      activeBackgroundColor: colors.primary
    },
    drawerBackgroundColor: colors.drawerBackgroundColor
  }
);

export default createAppContainer(MyDrawerNavigator);
