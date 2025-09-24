import * as React from "react";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";
import MenuScreen from "../screens/MenuScreen";

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
   
    <Tab.Navigator screenOptions={({route}) =>({
      headerStyle:{backgroundColor:"#fda"},
      headerTitleAlign:"center",  //center title
      tabBarIcon:({focused,color,size}) =>{
       let iconName;
       if(route.name ==="Welcome"){
         iconName =focused ? "home":"home-outline";
       }else if(route.name==='Subscribe'){
        iconName =focused ?"person": "person-outline";
       }else if(route.name ==="Menu"){
        iconName =focused ? "restraunt":"restraunt-outline";
       }
        return <Ionicons name ={iconName} size={size} color={color}/>
      } ,
      tabBarActiveTintColor:"tomato",
      tabBarInactiveTintColor:"gray",
  })}
    >
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
       <Tab.Screen name ="Menu" component={MenuScreen} />
      <Tab.Screen name ="Subscribe" component={SubscribeScreen} />
    
      
      {/* Set up stack navigation to move between welcome screen and subscribe screen here */}
    </Tab.Navigator>
  );
};

export default RootNavigator;
