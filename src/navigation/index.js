import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "../screens/Auth/SplashPage";
import Login from "../screens/Auth/LoginPage";
 import Addcategory from "../screens/Main/Addcategory";
 import Addproduct from "../screens/Main/Addproduct";
 import Addcollection from "../screens/Main/Addcollection";
 import Mycustomer from "../screens/Main/Mycustomers";
 import Feedback from "../screens/Main/Feedback";
import Messagebox from "../screens/Main/Messagebox";
import Edit from "../screens/Main/Editprofile";
import Loyalty from "../screens/Main/Loyalty";
import LoyaltyPage from "../screens/Main/Loyaltypage";
import Purchase from "../screens/Main/Purchasehistory";
import Chat from "../screens/Main/MessageboxChat"
const Stack = createNativeStackNavigator();
function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name ="Login" component ={Login}/>
        <Stack.Screen name ="Addcategory" component ={Addcategory}/>
        <Stack.Screen name ="Addproduct" component ={Addproduct}/>
        <Stack.Screen name="Addcollection" component ={Addcollection}/>
        <Stack.Screen name="Mycustomer" component ={Mycustomer}/>
        <Stack.Screen name="Feedback" component ={Feedback}/>
        <Stack.Screen name="Messagebox" component ={Messagebox}/>
        <Stack.Screen name="Editprofile" component ={Edit}/>
        <Stack.Screen name="Loyalty" component ={Loyalty}/>
        <Stack.Screen name ="Loyalty1"  component ={LoyaltyPage}/>
        <Stack.Screen name ="Purchase" component={Purchase}/>
        <Stack.Screen name ="Chat" component ={Chat}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigate;
