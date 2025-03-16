import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./App"; 
import SurahDetail from "./DetailSurah"; 

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SurahDetail" component={SurahDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
