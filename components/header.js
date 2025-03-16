import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = () => {
  const navigation = useNavigation();
  const route = useRoute();

  
  const isHome = route.name === "Home";

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => !isHome && navigation.goBack()}>
        {isHome ? (
          <Image 
            source={require("../images/quran.png")} 
            style={styles.logo} 
          />
        ) : (
          <Ionicons name="arrow-back" size={30} color="black" />
        )}
      </TouchableOpacity>
      <Text style={styles.title}>W QURAN</Text>
    </View>
  );
};

const styles = {
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d5d5d5",
    padding: 15,
  },
  logo: {
    width: 50, 
    height: 50,
    resizeMode: "contain",
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
};

export default Header;
