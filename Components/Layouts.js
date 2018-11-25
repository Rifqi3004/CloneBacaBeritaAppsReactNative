import React from 'react'
import { View, Text , TouchableOpacity, Button} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { 
  createDrawerNavigator, createBottomTabNavigator, 
  createStackNavigator,createAppContainer , createMaterialTopTabNavigator
} from 'react-navigation'

import {
  Header, Icon, Input, Item
}from 'native-base'

import User from "../Screens/User"
import Following from "../Screens/Following"
import IconMat from "react-native-vector-icons/MaterialIcons"
import Reading from "../Screens/NewsCategories/Reading"
import News from "../Screens/NewsCategories/News"
import Videos from "../Screens/VideosCategories/Videos"
import Categories from "./Categories"


const Bottom =  createBottomTabNavigator(
    {
      News : {
        screen : News
      },
      Videos : {
        screen : Videos
      },
      Following : {
        screen : Following,
        navigationOptions :{
          tabBarVisible : false
        }        
      } ,
      User : {
        screen : User,
      }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'News') {
              iconName = `home`;
            } else if (routeName === 'Videos') {
              iconName = 'play-arrow';
            }else if (routeName === 'Following') {
                iconName = `subscriptions`;
            }else if (routeName === 'User') {
            iconName = `account-circle`;
            }
            
            return <IconMat name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: 'black',
          inactiveTintColor: 'grey',
          showLabel : false
        },
      }
)
const Stack = createStackNavigator(
  {
    HomeView : Bottom,
    FollowingScreen: Following,
    ReadingScreen : Reading,
    Categories : Categories
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   }
)

export default Stack