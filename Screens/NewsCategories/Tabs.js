import React from 'react'
import Pages from "./Pages"
import { createMaterialTopTabNavigator } from 'react-navigation'
export default NewsTabs = createMaterialTopTabNavigator(
    {
        ViralNews : {
            screen : Pages,
            navigationoptions : {
            tabBarLabel : 'Viral'
            }
        },
        TipsNews : Pages,
        OtoNews : Pages,
        HealthNews : Pages
    },
    {
        swipeEnabled : true,
        tabBarOptions : {
         activeBackgroundColor : '#fff',
         inactiveBackgroundColor : '#fff',
         activeTintColor : '#000000',
         inactiveTintColor : 'grey',
         labelStyle : {
             fontSize : 16,
             fontWeight : 'bold'
         },
         allowFontScaling : true,
         scrollEnabled : true,
         style : {
             backgroundColor : '#fff',
             height : 55
         }
        }
        
    }
)
